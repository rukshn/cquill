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
import { oneDarkPro } from "@/theme/onedarkpro";
import { ScrollArea } from "@/components/ui/scroll-area";

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

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

// Define variables
const view = ref("codes");
const searchQueryInput = useTemplateRef("searchQueryInput");
const codeSystem: Ref<{ code: string; display: string }[]> = ref([]);
const searchQuery = ref("");
const definition: Ref<{ code: string; display: string } | null> = ref(null);
const definitionPosition: Ref<monaco.Position | null> = ref(null);
const definitionRange: Ref<monaco.Range | null> = ref(null);
const codeSystemInput = useTemplateRef("codeSystemInput");
const cqlWordPattern =
  /[a-zA-Z][a-zA-Z0-9_]*|"[^"]*"|'[^']*'|\d+(\.\d+)?|\$\{[^}]*\}/g;

let editor: monaco.editor.IStandaloneCodeEditor;
const contentWidgetId = {
  allowEditorOverflow: true,
  getDomNode: () => {
    const node = document.createElement("div");
    node.setAttribute("id", "definition");
    node.innerHTML = definition.value?.display || "";
    return node;
  },
  getPosition: () => ({
    position: {
      lineNumber: definitionPosition.value?.lineNumber || 0,
      column: definitionPosition.value?.column || 0,
    },
    preference: [monaco.editor.ContentWidgetPositionPreference.BELOW],
  }),
  getId: function (): string {
    return "definition";
  },
};

// Function definitions
const parseCql = () => {
  const chars = antlr4.CharStream.fromString(editor.getValue());
  const lexer = new cqlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const errorListner = new antlr4.BaseErrorListener();
  const parser = new cqlParser(tokens);
  parser.errorHandler = new antlr4.BailErrorStrategy();
  parser.addErrorListener(errorListner);
  errorListner.reportContextSensitivity = function (
    recognizer,
    dfa,
    startIndex,
    stopIndex,
    prediction,
    configs
  ) {
    console.log("context sensitivity");
  };
  errorListner.reportAttemptingFullContext = function (
    recognizer,
    dfa,
    startIndex,
    stopIndex,
    conflictingAlts,
    configs
  ) {
    console.log("full context");
  };
  errorListner.reportAmbiguity = function (
    recognizer,
    dfa,
    startIndex,
    stopIndex,
    exact,
    ambigAlts,
    configs
  ) {
    console.log("ambiguity");
  };
  errorListner.syntaxError = function (
    recognizer,
    offendingSymbol,
    line,
    column,
    msg,
    e
  ) {
    return { line: line, column: column, msg: msg };
  };

  const tree = parser.query();
};

/**
 * @param e file input element
 * @returns a codeSystem mapped to the codeSystem variable
 */
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

/**
 * Define hotkeys for the web-app
 */
hotkeys("ctrl+,,/,r,f", function (event, handler) {
  event.preventDefault();
  switch (handler.key) {
    case "ctrl+,":
      editor.focus();
      break;
    case "/":
      searchQuery.value = "";
      if (searchQueryInput.value) {
        searchQueryInput.value.$el.focus();
      }
      break;
    case "ctrl+o, cmd+o":
      if (codeSystemInput.value) {
        codeSystemInput.value.$el.click();
      }
      break;
    default:
      alert(event);
  }
});

/**
 * computed when the search term is changed
 * @returns a search result based on the search query
 */
const searchResult: Ref<{ code: string; display: string }[]> = computed(() => {
  if (!codeSystem.value.length) return [];
  return codeSystem.value.filter(
    (c) =>
      c.code.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.display.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

/**
 *
 * @param e code to be copied
 * @returns copies the code to the clipboard
 */
const copyCode = (e: any) => {
  navigator.clipboard.writeText(e);
};

/**
 * On webapplication mounted
 * Initialize monaco editor
 * Register cql language
 * Set monarch tokens provider
 * Generates autocomplete based on the coseSystem
 */
onMounted(() => {
  monaco.languages.register({ id: "cql" });
  monaco.languages.setMonarchTokensProvider("cql", cqlMonarchLanguage);
  monaco.languages.setLanguageConfiguration("cql", languageConfiguration);
  monaco.editor.defineTheme(
    "onedarkpro",
    oneDarkPro as monaco.editor.IStandaloneThemeData
  );

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
        label: c.code,
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
    editor = monaco.editor.create(editorElement, {
      value: ["library calc"].join("\n"),
      theme: "onedarkpro",
      language: "cql",
    });
  }

  /**
   * Add content widget to the editor
   * To display the definition of the code
   */
  editor.onMouseUp((e) => {
    if (e.target.type === monaco.editor.MouseTargetType.CONTENT_TEXT) {
      gotoDefinition();
      console.log(definition.value);

      editor.removeContentWidget(contentWidgetId);

      editor.addContentWidget(contentWidgetId);
    } else {
      editor.removeContentWidget(contentWidgetId);
    }
  });

  /**
   * Parse the cql code on change
   */
  editor.onDidChangeModelContent(() => {
    const syntaxErrors = parseCql();
  });
});

/**
 * Goto definition of a code,
 * the definition is derived from the display element of the codeSystem concept
 * @returns sets the definition value based on the word clicked
 */
const gotoDefinition = () => {
  const position = editor.getPosition();
  if (!position) {
    definition.value = null;
    return;
  }

  const word = editor.getModel()?.getWordAtPosition(position);
  console.log(word);
  if (!word) {
    definition.value = null;
    return;
  }

  const range = new monaco.Range(
    position.lineNumber,
    word.startColumn,
    position.lineNumber,
    word.endColumn
  );

  const findDefinition = codeSystem.value.filter((c) => c.code === word.word);

  if (!findDefinition.length) {
    definition.value = null;
  } else if (findDefinition[0].code === definition.value?.code) {
    definition.value = null;
  } else {
    definition.value = findDefinition[0];
    definitionPosition.value = position;
    definitionRange.value = range;
  }
};
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem @click="codeSystemInput?.$el.click()">
          Open CodeSystem<MenubarShortcut>⌘O</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarItem @click="view = 'cqlLibrary'">CQL Library</MenubarItem>
        <MenubarItem @click="view = 'codes'">Codes</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-4 h-screen">
      <div id="editor" class="h-screen w-full"></div>
      <Button v-on:click="parseCql">Parse</Button>
    </div>

    <div class="col-span-2">
      <div class="h-16">
        <div class="hidden">
          <Label>Select Code System File</Label>
          <Input
            ref="codeSystemInput"
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
      </div>
      <ScrollArea class="h-[calc(100vh-64px)]">
        <Table v-if="view === 'codes'">
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
      </ScrollArea>
    </div>
  </div>
</template>

<style scoped></style>
