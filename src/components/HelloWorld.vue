<script setup lang="ts">
import { ref, type Ref, computed, useTemplateRef, onMounted } from "vue";
import * as antlr4 from "antlr4ng";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import hotkeys from "hotkeys-js";
import { cqlLexer } from "@/lib/cqlLexer";
import { cqlParser } from "@/lib/cqlParser";
import * as monaco from "monaco-editor";
import {oneDarkPro} from "@/theme/onedarkpro";

import {
  cqlMonarchLanguage,
  languageConfiguration,
} from "@/lib/monacoTokenizer";

import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCaption,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const cql = ref("");

const parseCql = () => {
  const chars = antlr4.CharStream.fromString(cql.value);
  const lexer = new cqlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new cqlParser(tokens);
  const tree = parser.query();
  console.log(tree);
};

const searchQueryInput = useTemplateRef("searchQueryInput");

const readCodeSystem = (e: any) => {
  const file = e.target.files || e.dataTransfer.files;
  if (!file.length) return;

  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    if (!e.target) return;
    const content = e.target.result;
    const csJson = JSON.parse(content as string);
    codeSystem.value = csJson.concept.map(
      (c: { code: string; display: string }) => ({
        code: c.code,
        display: c.display,
      })
    );
  };
  fileReader.readAsText(file[0]);
};

hotkeys("/", (event, handler) => {
  event.preventDefault();
  switch (handler.key) {
    case "/":
      searchQuery.value = "";
      if (searchQueryInput.value) {
        searchQueryInput.value.$el.focus();
      }
      break;
    default:
      break;
  }
});

const codeSystem: Ref<{ code: string; display: string }[]> = ref([]);
const searchResult: Ref<{ code: string; display: string }[]> = computed(() => {
  if (!codeSystem.value.length) return [];
  return codeSystem.value.filter(
    (c) =>
      c.code.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.display.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const searchQuery = ref("");

const copyCode = (e: any) => {
  navigator.clipboard.writeText(e);
};

onMounted(() => {
  monaco.languages.register({ id: "cql" });
  monaco.languages.setMonarchTokensProvider("cql", cqlMonarchLanguage);
  monaco.languages.setLanguageConfiguration("cql", languageConfiguration);
  monaco.editor.defineTheme("onedarkpro", oneDarkPro as monaco.editor.IStandaloneThemeData);
  monaco.languages.registerCompletionItemProvider("cql", {
    triggerCharacters: ['"', "'"],
    provideCompletionItems: (
      model: monaco.editor.ITextModel,
      position: monaco.Position
    ) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
      const suggestions = codeSystem.value.map((c) => ({
        label: c.display,
        kind: monaco.languages.CompletionItemKind.Text,
        detail: c.display,
        insertText: c.code,
        range: range,
      }));
      return { suggestions };
    },
  });

  if (document) {
    const editorElement = document.getElementById("editor");
    if (!editorElement) return;
    const editor = monaco.editor.create(editorElement, {
      value: ["library calc"].join("\n"),
      theme: "onedarkpro",
      language: "cql",
    });
  }
});

defineProps<{ msg: string }>();
</script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-4 h-screen">
      <Label>CQL</Label>
      <div id="editor" class="h-screen w-full"></div>
      <Button v-on:click="parseCql">Parse</Button>
    </div>

    <div class="col-span-2">
      <div>
        <Label>Select Code System File</Label>
        <Input
          type="file"
          v-on:change="readCodeSystem"
          accept=".json,text/json"
        />
      </div>
      <div>
        <Label>Search for code</Label>
        <Input
          type="text"
          ref="searchQueryInput"
          placeholder="Start typing to search for codes"
          v-model="searchQuery"
        />
      </div>
      <div>
        <Table>
          <TableCaption>Code System Results</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[99px]">#</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Display</TableHead>
              <TableHead>Copy Code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(concept, index) in searchResult" :key="index">
              <TableCell class="w-[99px]">{{ index + 1 }}</TableCell>
              <TableCell>{{ concept.code }}</TableCell>
              <TableCell>{{ concept.display }}</TableCell>
              <TableCell>
                <Button v-on:click="copyCode(concept.code)">Copy</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
