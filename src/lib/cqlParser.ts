// Generated from Src/grammar/cql.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { cqlListener } from "./cqlListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export class cqlParser extends antlr.Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly T__7 = 8;
  public static readonly T__8 = 9;
  public static readonly T__9 = 10;
  public static readonly T__10 = 11;
  public static readonly T__11 = 12;
  public static readonly T__12 = 13;
  public static readonly T__13 = 14;
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly T__17 = 18;
  public static readonly T__18 = 19;
  public static readonly T__19 = 20;
  public static readonly T__20 = 21;
  public static readonly T__21 = 22;
  public static readonly T__22 = 23;
  public static readonly T__23 = 24;
  public static readonly T__24 = 25;
  public static readonly T__25 = 26;
  public static readonly T__26 = 27;
  public static readonly T__27 = 28;
  public static readonly T__28 = 29;
  public static readonly T__29 = 30;
  public static readonly T__30 = 31;
  public static readonly T__31 = 32;
  public static readonly T__32 = 33;
  public static readonly T__33 = 34;
  public static readonly T__34 = 35;
  public static readonly T__35 = 36;
  public static readonly T__36 = 37;
  public static readonly T__37 = 38;
  public static readonly T__38 = 39;
  public static readonly T__39 = 40;
  public static readonly T__40 = 41;
  public static readonly T__41 = 42;
  public static readonly T__42 = 43;
  public static readonly T__43 = 44;
  public static readonly T__44 = 45;
  public static readonly T__45 = 46;
  public static readonly T__46 = 47;
  public static readonly T__47 = 48;
  public static readonly T__48 = 49;
  public static readonly T__49 = 50;
  public static readonly T__50 = 51;
  public static readonly T__51 = 52;
  public static readonly T__52 = 53;
  public static readonly T__53 = 54;
  public static readonly T__54 = 55;
  public static readonly T__55 = 56;
  public static readonly T__56 = 57;
  public static readonly T__57 = 58;
  public static readonly T__58 = 59;
  public static readonly T__59 = 60;
  public static readonly T__60 = 61;
  public static readonly T__61 = 62;
  public static readonly T__62 = 63;
  public static readonly T__63 = 64;
  public static readonly T__64 = 65;
  public static readonly T__65 = 66;
  public static readonly T__66 = 67;
  public static readonly T__67 = 68;
  public static readonly T__68 = 69;
  public static readonly T__69 = 70;
  public static readonly T__70 = 71;
  public static readonly T__71 = 72;
  public static readonly T__72 = 73;
  public static readonly T__73 = 74;
  public static readonly T__74 = 75;
  public static readonly T__75 = 76;
  public static readonly T__76 = 77;
  public static readonly T__77 = 78;
  public static readonly T__78 = 79;
  public static readonly T__79 = 80;
  public static readonly T__80 = 81;
  public static readonly T__81 = 82;
  public static readonly T__82 = 83;
  public static readonly T__83 = 84;
  public static readonly T__84 = 85;
  public static readonly T__85 = 86;
  public static readonly T__86 = 87;
  public static readonly T__87 = 88;
  public static readonly T__88 = 89;
  public static readonly T__89 = 90;
  public static readonly T__90 = 91;
  public static readonly T__91 = 92;
  public static readonly T__92 = 93;
  public static readonly T__93 = 94;
  public static readonly T__94 = 95;
  public static readonly T__95 = 96;
  public static readonly T__96 = 97;
  public static readonly T__97 = 98;
  public static readonly T__98 = 99;
  public static readonly T__99 = 100;
  public static readonly T__100 = 101;
  public static readonly T__101 = 102;
  public static readonly T__102 = 103;
  public static readonly T__103 = 104;
  public static readonly T__104 = 105;
  public static readonly T__105 = 106;
  public static readonly T__106 = 107;
  public static readonly T__107 = 108;
  public static readonly T__108 = 109;
  public static readonly T__109 = 110;
  public static readonly T__110 = 111;
  public static readonly T__111 = 112;
  public static readonly T__112 = 113;
  public static readonly T__113 = 114;
  public static readonly T__114 = 115;
  public static readonly T__115 = 116;
  public static readonly T__116 = 117;
  public static readonly T__117 = 118;
  public static readonly T__118 = 119;
  public static readonly T__119 = 120;
  public static readonly T__120 = 121;
  public static readonly T__121 = 122;
  public static readonly T__122 = 123;
  public static readonly T__123 = 124;
  public static readonly T__124 = 125;
  public static readonly T__125 = 126;
  public static readonly T__126 = 127;
  public static readonly T__127 = 128;
  public static readonly T__128 = 129;
  public static readonly T__129 = 130;
  public static readonly T__130 = 131;
  public static readonly T__131 = 132;
  public static readonly T__132 = 133;
  public static readonly T__133 = 134;
  public static readonly T__134 = 135;
  public static readonly T__135 = 136;
  public static readonly T__136 = 137;
  public static readonly T__137 = 138;
  public static readonly T__138 = 139;
  public static readonly T__139 = 140;
  public static readonly T__140 = 141;
  public static readonly T__141 = 142;
  public static readonly T__142 = 143;
  public static readonly T__143 = 144;
  public static readonly T__144 = 145;
  public static readonly T__145 = 146;
  public static readonly T__146 = 147;
  public static readonly T__147 = 148;
  public static readonly T__148 = 149;
  public static readonly T__149 = 150;
  public static readonly T__150 = 151;
  public static readonly T__151 = 152;
  public static readonly T__152 = 153;
  public static readonly T__153 = 154;
  public static readonly T__154 = 155;
  public static readonly T__155 = 156;
  public static readonly T__156 = 157;
  public static readonly QUOTEDIDENTIFIER = 158;
  public static readonly DATETIME = 159;
  public static readonly LONGNUMBER = 160;
  public static readonly DATE = 161;
  public static readonly TIME = 162;
  public static readonly IDENTIFIER = 163;
  public static readonly DELIMITEDIDENTIFIER = 164;
  public static readonly STRING = 165;
  public static readonly NUMBER = 166;
  public static readonly WS = 167;
  public static readonly COMMENT = 168;
  public static readonly LINE_COMMENT = 169;
  public static readonly RULE_definition = 0;
  public static readonly RULE_library = 1;
  public static readonly RULE_libraryDefinition = 2;
  public static readonly RULE_usingDefinition = 3;
  public static readonly RULE_includeDefinition = 4;
  public static readonly RULE_localIdentifier = 5;
  public static readonly RULE_accessModifier = 6;
  public static readonly RULE_parameterDefinition = 7;
  public static readonly RULE_codesystemDefinition = 8;
  public static readonly RULE_valuesetDefinition = 9;
  public static readonly RULE_codesystems = 10;
  public static readonly RULE_codesystemIdentifier = 11;
  public static readonly RULE_libraryIdentifier = 12;
  public static readonly RULE_codeDefinition = 13;
  public static readonly RULE_conceptDefinition = 14;
  public static readonly RULE_codeIdentifier = 15;
  public static readonly RULE_codesystemId = 16;
  public static readonly RULE_valuesetId = 17;
  public static readonly RULE_versionSpecifier = 18;
  public static readonly RULE_codeId = 19;
  public static readonly RULE_typeSpecifier = 20;
  public static readonly RULE_namedTypeSpecifier = 21;
  public static readonly RULE_modelIdentifier = 22;
  public static readonly RULE_listTypeSpecifier = 23;
  public static readonly RULE_intervalTypeSpecifier = 24;
  public static readonly RULE_tupleTypeSpecifier = 25;
  public static readonly RULE_tupleElementDefinition = 26;
  public static readonly RULE_choiceTypeSpecifier = 27;
  public static readonly RULE_statement = 28;
  public static readonly RULE_expressionDefinition = 29;
  public static readonly RULE_contextDefinition = 30;
  public static readonly RULE_fluentModifier = 31;
  public static readonly RULE_functionDefinition = 32;
  public static readonly RULE_operandDefinition = 33;
  public static readonly RULE_functionBody = 34;
  public static readonly RULE_querySource = 35;
  public static readonly RULE_aliasedQuerySource = 36;
  public static readonly RULE_alias = 37;
  public static readonly RULE_queryInclusionClause = 38;
  public static readonly RULE_withClause = 39;
  public static readonly RULE_withoutClause = 40;
  public static readonly RULE_retrieve = 41;
  public static readonly RULE_contextIdentifier = 42;
  public static readonly RULE_codePath = 43;
  public static readonly RULE_codeComparator = 44;
  public static readonly RULE_terminology = 45;
  public static readonly RULE_qualifier = 46;
  public static readonly RULE_query = 47;
  public static readonly RULE_sourceClause = 48;
  public static readonly RULE_letClause = 49;
  public static readonly RULE_letClauseItem = 50;
  public static readonly RULE_whereClause = 51;
  public static readonly RULE_returnClause = 52;
  public static readonly RULE_aggregateClause = 53;
  public static readonly RULE_startingClause = 54;
  public static readonly RULE_sortClause = 55;
  public static readonly RULE_sortDirection = 56;
  public static readonly RULE_sortByItem = 57;
  public static readonly RULE_qualifiedIdentifier = 58;
  public static readonly RULE_qualifiedIdentifierExpression = 59;
  public static readonly RULE_qualifierExpression = 60;
  public static readonly RULE_simplePath = 61;
  public static readonly RULE_simpleLiteral = 62;
  public static readonly RULE_expression = 63;
  public static readonly RULE_dateTimePrecision = 64;
  public static readonly RULE_dateTimeComponent = 65;
  public static readonly RULE_pluralDateTimePrecision = 66;
  public static readonly RULE_expressionTerm = 67;
  public static readonly RULE_caseExpressionItem = 68;
  public static readonly RULE_dateTimePrecisionSpecifier = 69;
  public static readonly RULE_relativeQualifier = 70;
  public static readonly RULE_offsetRelativeQualifier = 71;
  public static readonly RULE_exclusiveRelativeQualifier = 72;
  public static readonly RULE_quantityOffset = 73;
  public static readonly RULE_temporalRelationship = 74;
  public static readonly RULE_intervalOperatorPhrase = 75;
  public static readonly RULE_term = 76;
  public static readonly RULE_qualifiedInvocation = 77;
  public static readonly RULE_qualifiedFunction = 78;
  public static readonly RULE_invocation = 79;
  public static readonly RULE_function = 80;
  public static readonly RULE_ratio = 81;
  public static readonly RULE_literal = 82;
  public static readonly RULE_intervalSelector = 83;
  public static readonly RULE_tupleSelector = 84;
  public static readonly RULE_tupleElementSelector = 85;
  public static readonly RULE_instanceSelector = 86;
  public static readonly RULE_instanceElementSelector = 87;
  public static readonly RULE_listSelector = 88;
  public static readonly RULE_displayClause = 89;
  public static readonly RULE_codeSelector = 90;
  public static readonly RULE_conceptSelector = 91;
  public static readonly RULE_keyword = 92;
  public static readonly RULE_reservedWord = 93;
  public static readonly RULE_keywordIdentifier = 94;
  public static readonly RULE_obsoleteIdentifier = 95;
  public static readonly RULE_functionIdentifier = 96;
  public static readonly RULE_typeNameIdentifier = 97;
  public static readonly RULE_referentialIdentifier = 98;
  public static readonly RULE_referentialOrTypeNameIdentifier = 99;
  public static readonly RULE_identifierOrFunctionIdentifier = 100;
  public static readonly RULE_identifier = 101;
  public static readonly RULE_externalConstant = 102;
  public static readonly RULE_paramList = 103;
  public static readonly RULE_quantity = 104;
  public static readonly RULE_unit = 105;

  public static readonly literalNames = [
    null,
    "'library'",
    "'version'",
    "'using'",
    "'called'",
    "'include'",
    "'public'",
    "'private'",
    "'parameter'",
    "'default'",
    "'codesystem'",
    "':'",
    "'valueset'",
    "'codesystems'",
    "'{'",
    "','",
    "'}'",
    "'.'",
    "'code'",
    "'from'",
    "'concept'",
    "'List'",
    "'<'",
    "'>'",
    "'Interval'",
    "'Tuple'",
    "'Choice'",
    "'define'",
    "'context'",
    "'fluent'",
    "'function'",
    "'('",
    "')'",
    "'returns'",
    "'external'",
    "'with'",
    "'such that'",
    "'without'",
    "'['",
    "'->'",
    "']'",
    "'in'",
    "'='",
    "'~'",
    "'let'",
    "'where'",
    "'return'",
    "'all'",
    "'distinct'",
    "'aggregate'",
    "'starting'",
    "'sort'",
    "'by'",
    "'asc'",
    "'ascending'",
    "'desc'",
    "'descending'",
    "'is'",
    "'not'",
    "'null'",
    "'true'",
    "'false'",
    "'as'",
    "'cast'",
    "'exists'",
    "'properly'",
    "'between'",
    "'and'",
    "'duration'",
    "'difference'",
    "'|'",
    "'union'",
    "'intersect'",
    "'except'",
    "'<='",
    "'>='",
    "'!='",
    "'!~'",
    "'contains'",
    "'or'",
    "'xor'",
    "'implies'",
    "'year'",
    "'month'",
    "'week'",
    "'day'",
    "'hour'",
    "'minute'",
    "'second'",
    "'millisecond'",
    "'date'",
    "'time'",
    "'timezone'",
    "'timezoneoffset'",
    "'years'",
    "'months'",
    "'weeks'",
    "'days'",
    "'hours'",
    "'minutes'",
    "'seconds'",
    "'milliseconds'",
    "'convert'",
    "'to'",
    "'+'",
    "'-'",
    "'start'",
    "'end'",
    "'of'",
    "'width'",
    "'successor'",
    "'predecessor'",
    "'singleton'",
    "'point'",
    "'minimum'",
    "'maximum'",
    "'^'",
    "'*'",
    "'/'",
    "'div'",
    "'mod'",
    "'&'",
    "'if'",
    "'then'",
    "'else'",
    "'case'",
    "'flatten'",
    "'expand'",
    "'collapse'",
    "'per'",
    "'when'",
    "'or before'",
    "'or after'",
    "'or more'",
    "'or less'",
    "'less than'",
    "'more than'",
    "'on or'",
    "'before'",
    "'after'",
    "'or on'",
    "'starts'",
    "'ends'",
    "'occurs'",
    "'same'",
    "'includes'",
    "'during'",
    "'included in'",
    "'within'",
    "'meets'",
    "'overlaps'",
    "'$this'",
    "'$index'",
    "'$total'",
    "'display'",
    "'Code'",
    "'Concept'",
    "'%'",
  ];

  public static readonly symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "QUOTEDIDENTIFIER",
    "DATETIME",
    "LONGNUMBER",
    "DATE",
    "TIME",
    "IDENTIFIER",
    "DELIMITEDIDENTIFIER",
    "STRING",
    "NUMBER",
    "WS",
    "COMMENT",
    "LINE_COMMENT",
  ];
  public static readonly ruleNames = [
    "definition",
    "library",
    "libraryDefinition",
    "usingDefinition",
    "includeDefinition",
    "localIdentifier",
    "accessModifier",
    "parameterDefinition",
    "codesystemDefinition",
    "valuesetDefinition",
    "codesystems",
    "codesystemIdentifier",
    "libraryIdentifier",
    "codeDefinition",
    "conceptDefinition",
    "codeIdentifier",
    "codesystemId",
    "valuesetId",
    "versionSpecifier",
    "codeId",
    "typeSpecifier",
    "namedTypeSpecifier",
    "modelIdentifier",
    "listTypeSpecifier",
    "intervalTypeSpecifier",
    "tupleTypeSpecifier",
    "tupleElementDefinition",
    "choiceTypeSpecifier",
    "statement",
    "expressionDefinition",
    "contextDefinition",
    "fluentModifier",
    "functionDefinition",
    "operandDefinition",
    "functionBody",
    "querySource",
    "aliasedQuerySource",
    "alias",
    "queryInclusionClause",
    "withClause",
    "withoutClause",
    "retrieve",
    "contextIdentifier",
    "codePath",
    "codeComparator",
    "terminology",
    "qualifier",
    "query",
    "sourceClause",
    "letClause",
    "letClauseItem",
    "whereClause",
    "returnClause",
    "aggregateClause",
    "startingClause",
    "sortClause",
    "sortDirection",
    "sortByItem",
    "qualifiedIdentifier",
    "qualifiedIdentifierExpression",
    "qualifierExpression",
    "simplePath",
    "simpleLiteral",
    "expression",
    "dateTimePrecision",
    "dateTimeComponent",
    "pluralDateTimePrecision",
    "expressionTerm",
    "caseExpressionItem",
    "dateTimePrecisionSpecifier",
    "relativeQualifier",
    "offsetRelativeQualifier",
    "exclusiveRelativeQualifier",
    "quantityOffset",
    "temporalRelationship",
    "intervalOperatorPhrase",
    "term",
    "qualifiedInvocation",
    "qualifiedFunction",
    "invocation",
    "function",
    "ratio",
    "literal",
    "intervalSelector",
    "tupleSelector",
    "tupleElementSelector",
    "instanceSelector",
    "instanceElementSelector",
    "listSelector",
    "displayClause",
    "codeSelector",
    "conceptSelector",
    "keyword",
    "reservedWord",
    "keywordIdentifier",
    "obsoleteIdentifier",
    "functionIdentifier",
    "typeNameIdentifier",
    "referentialIdentifier",
    "referentialOrTypeNameIdentifier",
    "identifierOrFunctionIdentifier",
    "identifier",
    "externalConstant",
    "paramList",
    "quantity",
    "unit",
  ];

  public get grammarFileName(): string {
    return "cql.g4";
  }
  public get literalNames(): (string | null)[] {
    return cqlParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return cqlParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return cqlParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return cqlParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): antlr.FailedPredicateException {
    return new antlr.FailedPredicateException(this, predicate, message);
  }

  public constructor(input: antlr.TokenStream) {
    super(input);
    this.interpreter = new antlr.ParserATNSimulator(
      this,
      cqlParser._ATN,
      cqlParser.decisionsToDFA,
      new antlr.PredictionContextCache()
    );
  }
  public definition(): DefinitionContext {
    let localContext = new DefinitionContext(this.context, this.state);
    this.enterRule(localContext, 0, cqlParser.RULE_definition);
    try {
      this.state = 219;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 0, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 212;
            this.usingDefinition();
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 213;
            this.includeDefinition();
          }
          break;
        case 3:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 214;
            this.codesystemDefinition();
          }
          break;
        case 4:
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 215;
            this.valuesetDefinition();
          }
          break;
        case 5:
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 216;
            this.codeDefinition();
          }
          break;
        case 6:
          this.enterOuterAlt(localContext, 6);
          {
            this.state = 217;
            this.conceptDefinition();
          }
          break;
        case 7:
          this.enterOuterAlt(localContext, 7);
          {
            this.state = 218;
            this.parameterDefinition();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public library(): LibraryContext {
    let localContext = new LibraryContext(this.context, this.state);
    this.enterRule(localContext, 2, cqlParser.RULE_library);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 222;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 1) {
          {
            this.state = 221;
            this.libraryDefinition();
          }
        }

        this.state = 227;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while ((_la & ~0x1f) === 0 && ((1 << _la) & 1316328) !== 0) {
          {
            {
              this.state = 224;
              this.definition();
            }
          }
          this.state = 229;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 233;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 27 || _la === 28) {
          {
            {
              this.state = 230;
              this.statement();
            }
          }
          this.state = 235;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 236;
        this.match(cqlParser.EOF);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public libraryDefinition(): LibraryDefinitionContext {
    let localContext = new LibraryDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 4, cqlParser.RULE_libraryDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 238;
        this.match(cqlParser.T__0);
        this.state = 239;
        this.qualifiedIdentifier();
        this.state = 242;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 2) {
          {
            this.state = 240;
            this.match(cqlParser.T__1);
            this.state = 241;
            this.versionSpecifier();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public usingDefinition(): UsingDefinitionContext {
    let localContext = new UsingDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 6, cqlParser.RULE_usingDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 244;
        this.match(cqlParser.T__2);
        this.state = 245;
        this.qualifiedIdentifier();
        this.state = 248;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 2) {
          {
            this.state = 246;
            this.match(cqlParser.T__1);
            this.state = 247;
            this.versionSpecifier();
          }
        }

        this.state = 252;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 4) {
          {
            this.state = 250;
            this.match(cqlParser.T__3);
            this.state = 251;
            this.localIdentifier();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public includeDefinition(): IncludeDefinitionContext {
    let localContext = new IncludeDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 8, cqlParser.RULE_includeDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 254;
        this.match(cqlParser.T__4);
        this.state = 255;
        this.qualifiedIdentifier();
        this.state = 258;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 2) {
          {
            this.state = 256;
            this.match(cqlParser.T__1);
            this.state = 257;
            this.versionSpecifier();
          }
        }

        this.state = 262;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 4) {
          {
            this.state = 260;
            this.match(cqlParser.T__3);
            this.state = 261;
            this.localIdentifier();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public localIdentifier(): LocalIdentifierContext {
    let localContext = new LocalIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 10, cqlParser.RULE_localIdentifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 264;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public accessModifier(): AccessModifierContext {
    let localContext = new AccessModifierContext(this.context, this.state);
    this.enterRule(localContext, 12, cqlParser.RULE_accessModifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 266;
        _la = this.tokenStream.LA(1);
        if (!(_la === 6 || _la === 7)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public parameterDefinition(): ParameterDefinitionContext {
    let localContext = new ParameterDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 14, cqlParser.RULE_parameterDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 269;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 268;
            this.accessModifier();
          }
        }

        this.state = 271;
        this.match(cqlParser.T__7);
        this.state = 272;
        this.identifier();
        this.state = 274;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 10, this.context)
        ) {
          case 1:
            {
              this.state = 273;
              this.typeSpecifier();
            }
            break;
        }
        this.state = 278;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 9) {
          {
            this.state = 276;
            this.match(cqlParser.T__8);
            this.state = 277;
            this.expression(0);
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codesystemDefinition(): CodesystemDefinitionContext {
    let localContext = new CodesystemDefinitionContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 16, cqlParser.RULE_codesystemDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 281;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 280;
            this.accessModifier();
          }
        }

        this.state = 283;
        this.match(cqlParser.T__9);
        this.state = 284;
        this.identifier();
        this.state = 285;
        this.match(cqlParser.T__10);
        this.state = 286;
        this.codesystemId();
        this.state = 289;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 2) {
          {
            this.state = 287;
            this.match(cqlParser.T__1);
            this.state = 288;
            this.versionSpecifier();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public valuesetDefinition(): ValuesetDefinitionContext {
    let localContext = new ValuesetDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 18, cqlParser.RULE_valuesetDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 292;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 291;
            this.accessModifier();
          }
        }

        this.state = 294;
        this.match(cqlParser.T__11);
        this.state = 295;
        this.identifier();
        this.state = 296;
        this.match(cqlParser.T__10);
        this.state = 297;
        this.valuesetId();
        this.state = 300;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 2) {
          {
            this.state = 298;
            this.match(cqlParser.T__1);
            this.state = 299;
            this.versionSpecifier();
          }
        }

        this.state = 303;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 13) {
          {
            this.state = 302;
            this.codesystems();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codesystems(): CodesystemsContext {
    let localContext = new CodesystemsContext(this.context, this.state);
    this.enterRule(localContext, 20, cqlParser.RULE_codesystems);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 305;
        this.match(cqlParser.T__12);
        this.state = 306;
        this.match(cqlParser.T__13);
        this.state = 307;
        this.codesystemIdentifier();
        this.state = 312;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 15) {
          {
            {
              this.state = 308;
              this.match(cqlParser.T__14);
              this.state = 309;
              this.codesystemIdentifier();
            }
          }
          this.state = 314;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 315;
        this.match(cqlParser.T__15);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codesystemIdentifier(): CodesystemIdentifierContext {
    let localContext = new CodesystemIdentifierContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 22, cqlParser.RULE_codesystemIdentifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 320;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 18, this.context)
        ) {
          case 1:
            {
              this.state = 317;
              this.libraryIdentifier();
              this.state = 318;
              this.match(cqlParser.T__16);
            }
            break;
        }
        this.state = 322;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public libraryIdentifier(): LibraryIdentifierContext {
    let localContext = new LibraryIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 24, cqlParser.RULE_libraryIdentifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 324;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codeDefinition(): CodeDefinitionContext {
    let localContext = new CodeDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 26, cqlParser.RULE_codeDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 327;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 326;
            this.accessModifier();
          }
        }

        this.state = 329;
        this.match(cqlParser.T__17);
        this.state = 330;
        this.identifier();
        this.state = 331;
        this.match(cqlParser.T__10);
        this.state = 332;
        this.codeId();
        this.state = 333;
        this.match(cqlParser.T__18);
        this.state = 334;
        this.codesystemIdentifier();
        this.state = 336;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 154) {
          {
            this.state = 335;
            this.displayClause();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public conceptDefinition(): ConceptDefinitionContext {
    let localContext = new ConceptDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 28, cqlParser.RULE_conceptDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 339;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 338;
            this.accessModifier();
          }
        }

        this.state = 341;
        this.match(cqlParser.T__19);
        this.state = 342;
        this.identifier();
        this.state = 343;
        this.match(cqlParser.T__10);
        this.state = 344;
        this.match(cqlParser.T__13);
        this.state = 345;
        this.codeIdentifier();
        this.state = 350;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 15) {
          {
            {
              this.state = 346;
              this.match(cqlParser.T__14);
              this.state = 347;
              this.codeIdentifier();
            }
          }
          this.state = 352;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 353;
        this.match(cqlParser.T__15);
        this.state = 355;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 154) {
          {
            this.state = 354;
            this.displayClause();
          }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codeIdentifier(): CodeIdentifierContext {
    let localContext = new CodeIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 30, cqlParser.RULE_codeIdentifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 360;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 24, this.context)
        ) {
          case 1:
            {
              this.state = 357;
              this.libraryIdentifier();
              this.state = 358;
              this.match(cqlParser.T__16);
            }
            break;
        }
        this.state = 362;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codesystemId(): CodesystemIdContext {
    let localContext = new CodesystemIdContext(this.context, this.state);
    this.enterRule(localContext, 32, cqlParser.RULE_codesystemId);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 364;
        this.match(cqlParser.STRING);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public valuesetId(): ValuesetIdContext {
    let localContext = new ValuesetIdContext(this.context, this.state);
    this.enterRule(localContext, 34, cqlParser.RULE_valuesetId);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 366;
        this.match(cqlParser.STRING);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public versionSpecifier(): VersionSpecifierContext {
    let localContext = new VersionSpecifierContext(this.context, this.state);
    this.enterRule(localContext, 36, cqlParser.RULE_versionSpecifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 368;
        this.match(cqlParser.STRING);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codeId(): CodeIdContext {
    let localContext = new CodeIdContext(this.context, this.state);
    this.enterRule(localContext, 38, cqlParser.RULE_codeId);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 370;
        this.match(cqlParser.STRING);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public typeSpecifier(): TypeSpecifierContext {
    let localContext = new TypeSpecifierContext(this.context, this.state);
    this.enterRule(localContext, 40, cqlParser.RULE_typeSpecifier);
    try {
      this.state = 377;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.T__0:
        case cqlParser.T__1:
        case cqlParser.T__2:
        case cqlParser.T__3:
        case cqlParser.T__4:
        case cqlParser.T__5:
        case cqlParser.T__6:
        case cqlParser.T__7:
        case cqlParser.T__8:
        case cqlParser.T__9:
        case cqlParser.T__11:
        case cqlParser.T__12:
        case cqlParser.T__17:
        case cqlParser.T__19:
        case cqlParser.T__26:
        case cqlParser.T__27:
        case cqlParser.T__28:
        case cqlParser.T__29:
        case cqlParser.T__44:
        case cqlParser.T__49:
        case cqlParser.T__51:
        case cqlParser.T__52:
        case cqlParser.T__53:
        case cqlParser.T__54:
        case cqlParser.T__55:
        case cqlParser.T__70:
        case cqlParser.T__71:
        case cqlParser.T__72:
        case cqlParser.T__77:
        case cqlParser.T__79:
        case cqlParser.T__80:
        case cqlParser.T__89:
        case cqlParser.T__90:
        case cqlParser.T__91:
        case cqlParser.T__92:
        case cqlParser.T__105:
        case cqlParser.T__106:
        case cqlParser.T__108:
        case cqlParser.T__109:
        case cqlParser.T__110:
        case cqlParser.T__118:
        case cqlParser.T__119:
        case cqlParser.T__130:
        case cqlParser.T__131:
        case cqlParser.T__132:
        case cqlParser.T__133:
        case cqlParser.T__140:
        case cqlParser.T__141:
        case cqlParser.T__144:
        case cqlParser.T__148:
        case cqlParser.T__149:
        case cqlParser.T__153:
        case cqlParser.T__154:
        case cqlParser.T__155:
        case cqlParser.QUOTEDIDENTIFIER:
        case cqlParser.IDENTIFIER:
        case cqlParser.DELIMITEDIDENTIFIER:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 372;
            this.namedTypeSpecifier();
          }
          break;
        case cqlParser.T__20:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 373;
            this.listTypeSpecifier();
          }
          break;
        case cqlParser.T__23:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 374;
            this.intervalTypeSpecifier();
          }
          break;
        case cqlParser.T__24:
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 375;
            this.tupleTypeSpecifier();
          }
          break;
        case cqlParser.T__25:
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 376;
            this.choiceTypeSpecifier();
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public namedTypeSpecifier(): NamedTypeSpecifierContext {
    let localContext = new NamedTypeSpecifierContext(this.context, this.state);
    this.enterRule(localContext, 42, cqlParser.RULE_namedTypeSpecifier);
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 384;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          26,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 379;
                this.qualifier();
                this.state = 380;
                this.match(cqlParser.T__16);
              }
            }
          }
          this.state = 386;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            26,
            this.context
          );
        }
        this.state = 387;
        this.referentialOrTypeNameIdentifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public modelIdentifier(): ModelIdentifierContext {
    let localContext = new ModelIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 44, cqlParser.RULE_modelIdentifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 389;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public listTypeSpecifier(): ListTypeSpecifierContext {
    let localContext = new ListTypeSpecifierContext(this.context, this.state);
    this.enterRule(localContext, 46, cqlParser.RULE_listTypeSpecifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 391;
        this.match(cqlParser.T__20);
        this.state = 392;
        this.match(cqlParser.T__21);
        this.state = 393;
        this.typeSpecifier();
        this.state = 394;
        this.match(cqlParser.T__22);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public intervalTypeSpecifier(): IntervalTypeSpecifierContext {
    let localContext = new IntervalTypeSpecifierContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 48, cqlParser.RULE_intervalTypeSpecifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 396;
        this.match(cqlParser.T__23);
        this.state = 397;
        this.match(cqlParser.T__21);
        this.state = 398;
        this.typeSpecifier();
        this.state = 399;
        this.match(cqlParser.T__22);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public tupleTypeSpecifier(): TupleTypeSpecifierContext {
    let localContext = new TupleTypeSpecifierContext(this.context, this.state);
    this.enterRule(localContext, 50, cqlParser.RULE_tupleTypeSpecifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 401;
        this.match(cqlParser.T__24);
        this.state = 402;
        this.match(cqlParser.T__13);
        this.state = 403;
        this.tupleElementDefinition();
        this.state = 408;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 15) {
          {
            {
              this.state = 404;
              this.match(cqlParser.T__14);
              this.state = 405;
              this.tupleElementDefinition();
            }
          }
          this.state = 410;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 411;
        this.match(cqlParser.T__15);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public tupleElementDefinition(): TupleElementDefinitionContext {
    let localContext = new TupleElementDefinitionContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 52, cqlParser.RULE_tupleElementDefinition);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 413;
        this.referentialIdentifier();
        this.state = 414;
        this.typeSpecifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public choiceTypeSpecifier(): ChoiceTypeSpecifierContext {
    let localContext = new ChoiceTypeSpecifierContext(this.context, this.state);
    this.enterRule(localContext, 54, cqlParser.RULE_choiceTypeSpecifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 416;
        this.match(cqlParser.T__25);
        this.state = 417;
        this.match(cqlParser.T__21);
        this.state = 418;
        this.typeSpecifier();
        this.state = 423;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 15) {
          {
            {
              this.state = 419;
              this.match(cqlParser.T__14);
              this.state = 420;
              this.typeSpecifier();
            }
          }
          this.state = 425;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 426;
        this.match(cqlParser.T__22);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public statement(): StatementContext {
    let localContext = new StatementContext(this.context, this.state);
    this.enterRule(localContext, 56, cqlParser.RULE_statement);
    try {
      this.state = 431;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 29, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 428;
            this.expressionDefinition();
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 429;
            this.contextDefinition();
          }
          break;
        case 3:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 430;
            this.functionDefinition();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public expressionDefinition(): ExpressionDefinitionContext {
    let localContext = new ExpressionDefinitionContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 58, cqlParser.RULE_expressionDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 433;
        this.match(cqlParser.T__26);
        this.state = 435;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 434;
            this.accessModifier();
          }
        }

        this.state = 437;
        this.identifier();
        this.state = 438;
        this.match(cqlParser.T__10);
        this.state = 439;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public contextDefinition(): ContextDefinitionContext {
    let localContext = new ContextDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 60, cqlParser.RULE_contextDefinition);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 441;
        this.match(cqlParser.T__27);
        this.state = 445;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)
        ) {
          case 1:
            {
              this.state = 442;
              this.modelIdentifier();
              this.state = 443;
              this.match(cqlParser.T__16);
            }
            break;
        }
        this.state = 447;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public fluentModifier(): FluentModifierContext {
    let localContext = new FluentModifierContext(this.context, this.state);
    this.enterRule(localContext, 62, cqlParser.RULE_fluentModifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 449;
        this.match(cqlParser.T__28);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public functionDefinition(): FunctionDefinitionContext {
    let localContext = new FunctionDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 64, cqlParser.RULE_functionDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 451;
        this.match(cqlParser.T__26);
        this.state = 453;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 6 || _la === 7) {
          {
            this.state = 452;
            this.accessModifier();
          }
        }

        this.state = 456;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 29) {
          {
            this.state = 455;
            this.fluentModifier();
          }
        }

        this.state = 458;
        this.match(cqlParser.T__29);
        this.state = 459;
        this.identifierOrFunctionIdentifier();
        this.state = 460;
        this.match(cqlParser.T__30);
        this.state = 469;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 2014590974) !== 0) ||
          (((_la - 45) & ~0x1f) === 0 &&
            ((1 << (_la - 45)) & 469766049) !== 0) ||
          (((_la - 78) & ~0x1f) === 0 &&
            ((1 << (_la - 78)) & 2952851469) !== 0) ||
          (((_la - 110) & ~0x1f) === 0 &&
            ((1 << (_la - 110)) & 2178942467) !== 0) ||
          (((_la - 142) & ~0x1f) === 0 && ((1 << (_la - 142)) & 6361481) !== 0)
        ) {
          {
            this.state = 461;
            this.operandDefinition();
            this.state = 466;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
              {
                {
                  this.state = 462;
                  this.match(cqlParser.T__14);
                  this.state = 463;
                  this.operandDefinition();
                }
              }
              this.state = 468;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
            }
          }
        }

        this.state = 471;
        this.match(cqlParser.T__31);
        this.state = 474;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 33) {
          {
            this.state = 472;
            this.match(cqlParser.T__32);
            this.state = 473;
            this.typeSpecifier();
          }
        }

        this.state = 476;
        this.match(cqlParser.T__10);
        this.state = 479;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case cqlParser.T__0:
          case cqlParser.T__1:
          case cqlParser.T__2:
          case cqlParser.T__3:
          case cqlParser.T__4:
          case cqlParser.T__5:
          case cqlParser.T__6:
          case cqlParser.T__7:
          case cqlParser.T__8:
          case cqlParser.T__9:
          case cqlParser.T__11:
          case cqlParser.T__12:
          case cqlParser.T__13:
          case cqlParser.T__17:
          case cqlParser.T__18:
          case cqlParser.T__19:
          case cqlParser.T__20:
          case cqlParser.T__23:
          case cqlParser.T__24:
          case cqlParser.T__26:
          case cqlParser.T__27:
          case cqlParser.T__28:
          case cqlParser.T__29:
          case cqlParser.T__30:
          case cqlParser.T__37:
          case cqlParser.T__44:
          case cqlParser.T__47:
          case cqlParser.T__49:
          case cqlParser.T__51:
          case cqlParser.T__52:
          case cqlParser.T__53:
          case cqlParser.T__54:
          case cqlParser.T__55:
          case cqlParser.T__57:
          case cqlParser.T__58:
          case cqlParser.T__59:
          case cqlParser.T__60:
          case cqlParser.T__62:
          case cqlParser.T__63:
          case cqlParser.T__67:
          case cqlParser.T__68:
          case cqlParser.T__70:
          case cqlParser.T__71:
          case cqlParser.T__72:
          case cqlParser.T__77:
          case cqlParser.T__79:
          case cqlParser.T__80:
          case cqlParser.T__81:
          case cqlParser.T__82:
          case cqlParser.T__83:
          case cqlParser.T__84:
          case cqlParser.T__85:
          case cqlParser.T__86:
          case cqlParser.T__87:
          case cqlParser.T__88:
          case cqlParser.T__89:
          case cqlParser.T__90:
          case cqlParser.T__91:
          case cqlParser.T__92:
          case cqlParser.T__93:
          case cqlParser.T__94:
          case cqlParser.T__95:
          case cqlParser.T__96:
          case cqlParser.T__97:
          case cqlParser.T__98:
          case cqlParser.T__99:
          case cqlParser.T__100:
          case cqlParser.T__101:
          case cqlParser.T__103:
          case cqlParser.T__104:
          case cqlParser.T__105:
          case cqlParser.T__106:
          case cqlParser.T__108:
          case cqlParser.T__109:
          case cqlParser.T__110:
          case cqlParser.T__111:
          case cqlParser.T__112:
          case cqlParser.T__113:
          case cqlParser.T__114:
          case cqlParser.T__118:
          case cqlParser.T__119:
          case cqlParser.T__121:
          case cqlParser.T__124:
          case cqlParser.T__125:
          case cqlParser.T__126:
          case cqlParser.T__127:
          case cqlParser.T__130:
          case cqlParser.T__131:
          case cqlParser.T__132:
          case cqlParser.T__133:
          case cqlParser.T__140:
          case cqlParser.T__141:
          case cqlParser.T__144:
          case cqlParser.T__148:
          case cqlParser.T__149:
          case cqlParser.T__150:
          case cqlParser.T__151:
          case cqlParser.T__152:
          case cqlParser.T__153:
          case cqlParser.T__154:
          case cqlParser.T__155:
          case cqlParser.T__156:
          case cqlParser.QUOTEDIDENTIFIER:
          case cqlParser.DATETIME:
          case cqlParser.LONGNUMBER:
          case cqlParser.DATE:
          case cqlParser.TIME:
          case cqlParser.IDENTIFIER:
          case cqlParser.DELIMITEDIDENTIFIER:
          case cqlParser.STRING:
          case cqlParser.NUMBER:
            {
              this.state = 477;
              this.functionBody();
            }
            break;
          case cqlParser.T__33:
            {
              this.state = 478;
              this.match(cqlParser.T__33);
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public operandDefinition(): OperandDefinitionContext {
    let localContext = new OperandDefinitionContext(this.context, this.state);
    this.enterRule(localContext, 66, cqlParser.RULE_operandDefinition);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 481;
        this.referentialIdentifier();
        this.state = 482;
        this.typeSpecifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public functionBody(): FunctionBodyContext {
    let localContext = new FunctionBodyContext(this.context, this.state);
    this.enterRule(localContext, 68, cqlParser.RULE_functionBody);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 484;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public querySource(): QuerySourceContext {
    let localContext = new QuerySourceContext(this.context, this.state);
    this.enterRule(localContext, 70, cqlParser.RULE_querySource);
    try {
      this.state = 492;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.T__37:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 486;
            this.retrieve();
          }
          break;
        case cqlParser.T__0:
        case cqlParser.T__1:
        case cqlParser.T__2:
        case cqlParser.T__3:
        case cqlParser.T__4:
        case cqlParser.T__5:
        case cqlParser.T__6:
        case cqlParser.T__7:
        case cqlParser.T__8:
        case cqlParser.T__9:
        case cqlParser.T__11:
        case cqlParser.T__12:
        case cqlParser.T__17:
        case cqlParser.T__19:
        case cqlParser.T__26:
        case cqlParser.T__27:
        case cqlParser.T__28:
        case cqlParser.T__29:
        case cqlParser.T__44:
        case cqlParser.T__49:
        case cqlParser.T__51:
        case cqlParser.T__52:
        case cqlParser.T__53:
        case cqlParser.T__54:
        case cqlParser.T__55:
        case cqlParser.T__70:
        case cqlParser.T__71:
        case cqlParser.T__72:
        case cqlParser.T__77:
        case cqlParser.T__79:
        case cqlParser.T__80:
        case cqlParser.T__89:
        case cqlParser.T__90:
        case cqlParser.T__91:
        case cqlParser.T__92:
        case cqlParser.T__105:
        case cqlParser.T__106:
        case cqlParser.T__108:
        case cqlParser.T__109:
        case cqlParser.T__110:
        case cqlParser.T__118:
        case cqlParser.T__119:
        case cqlParser.T__130:
        case cqlParser.T__131:
        case cqlParser.T__132:
        case cqlParser.T__133:
        case cqlParser.T__140:
        case cqlParser.T__141:
        case cqlParser.T__144:
        case cqlParser.T__148:
        case cqlParser.T__149:
        case cqlParser.T__153:
        case cqlParser.QUOTEDIDENTIFIER:
        case cqlParser.IDENTIFIER:
        case cqlParser.DELIMITEDIDENTIFIER:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 487;
            this.qualifiedIdentifierExpression();
          }
          break;
        case cqlParser.T__30:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 488;
            this.match(cqlParser.T__30);
            this.state = 489;
            this.expression(0);
            this.state = 490;
            this.match(cqlParser.T__31);
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public aliasedQuerySource(): AliasedQuerySourceContext {
    let localContext = new AliasedQuerySourceContext(this.context, this.state);
    this.enterRule(localContext, 72, cqlParser.RULE_aliasedQuerySource);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 494;
        this.querySource();
        this.state = 495;
        this.alias();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public alias(): AliasContext {
    let localContext = new AliasContext(this.context, this.state);
    this.enterRule(localContext, 74, cqlParser.RULE_alias);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 497;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public queryInclusionClause(): QueryInclusionClauseContext {
    let localContext = new QueryInclusionClauseContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 76, cqlParser.RULE_queryInclusionClause);
    try {
      this.state = 501;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.T__34:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 499;
            this.withClause();
          }
          break;
        case cqlParser.T__36:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 500;
            this.withoutClause();
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public withClause(): WithClauseContext {
    let localContext = new WithClauseContext(this.context, this.state);
    this.enterRule(localContext, 78, cqlParser.RULE_withClause);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 503;
        this.match(cqlParser.T__34);
        this.state = 504;
        this.aliasedQuerySource();
        this.state = 505;
        this.match(cqlParser.T__35);
        this.state = 506;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public withoutClause(): WithoutClauseContext {
    let localContext = new WithoutClauseContext(this.context, this.state);
    this.enterRule(localContext, 80, cqlParser.RULE_withoutClause);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 508;
        this.match(cqlParser.T__36);
        this.state = 509;
        this.aliasedQuerySource();
        this.state = 510;
        this.match(cqlParser.T__35);
        this.state = 511;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public retrieve(): RetrieveContext {
    let localContext = new RetrieveContext(this.context, this.state);
    this.enterRule(localContext, 82, cqlParser.RULE_retrieve);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 513;
        this.match(cqlParser.T__37);
        this.state = 517;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)
        ) {
          case 1:
            {
              this.state = 514;
              this.contextIdentifier();
              this.state = 515;
              this.match(cqlParser.T__38);
            }
            break;
        }
        this.state = 519;
        this.namedTypeSpecifier();
        this.state = 527;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 11) {
          {
            this.state = 520;
            this.match(cqlParser.T__10);
            this.state = 524;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                41,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 521;
                  this.codePath();
                  this.state = 522;
                  this.codeComparator();
                }
                break;
            }
            this.state = 526;
            this.terminology();
          }
        }

        this.state = 529;
        this.match(cqlParser.T__39);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public contextIdentifier(): ContextIdentifierContext {
    let localContext = new ContextIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 84, cqlParser.RULE_contextIdentifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 531;
        this.qualifiedIdentifierExpression();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codePath(): CodePathContext {
    let localContext = new CodePathContext(this.context, this.state);
    this.enterRule(localContext, 86, cqlParser.RULE_codePath);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 533;
        this.simplePath(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codeComparator(): CodeComparatorContext {
    let localContext = new CodeComparatorContext(this.context, this.state);
    this.enterRule(localContext, 88, cqlParser.RULE_codeComparator);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 535;
        _la = this.tokenStream.LA(1);
        if (!(((_la - 41) & ~0x1f) === 0 && ((1 << (_la - 41)) & 7) !== 0)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public terminology(): TerminologyContext {
    let localContext = new TerminologyContext(this.context, this.state);
    this.enterRule(localContext, 90, cqlParser.RULE_terminology);
    try {
      this.state = 539;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 537;
            this.qualifiedIdentifierExpression();
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 538;
            this.expression(0);
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public qualifier(): QualifierContext {
    let localContext = new QualifierContext(this.context, this.state);
    this.enterRule(localContext, 92, cqlParser.RULE_qualifier);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 541;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public query(): QueryContext {
    let localContext = new QueryContext(this.context, this.state);
    this.enterRule(localContext, 94, cqlParser.RULE_query);
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 543;
        this.sourceClause();
        this.state = 545;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 44, this.context)
        ) {
          case 1:
            {
              this.state = 544;
              this.letClause();
            }
            break;
        }
        this.state = 550;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          45,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 547;
                this.queryInclusionClause();
              }
            }
          }
          this.state = 552;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            45,
            this.context
          );
        }
        this.state = 554;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 46, this.context)
        ) {
          case 1:
            {
              this.state = 553;
              this.whereClause();
            }
            break;
        }
        this.state = 558;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 47, this.context)
        ) {
          case 1:
            {
              this.state = 556;
              this.aggregateClause();
            }
            break;
          case 2:
            {
              this.state = 557;
              this.returnClause();
            }
            break;
        }
        this.state = 561;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)
        ) {
          case 1:
            {
              this.state = 560;
              this.sortClause();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public sourceClause(): SourceClauseContext {
    let localContext = new SourceClauseContext(this.context, this.state);
    this.enterRule(localContext, 96, cqlParser.RULE_sourceClause);
    let _la: number;
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 564;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 19) {
          {
            this.state = 563;
            this.match(cqlParser.T__18);
          }
        }

        this.state = 566;
        this.aliasedQuerySource();
        this.state = 571;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          50,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 567;
                this.match(cqlParser.T__14);
                this.state = 568;
                this.aliasedQuerySource();
              }
            }
          }
          this.state = 573;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            50,
            this.context
          );
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public letClause(): LetClauseContext {
    let localContext = new LetClauseContext(this.context, this.state);
    this.enterRule(localContext, 98, cqlParser.RULE_letClause);
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 574;
        this.match(cqlParser.T__43);
        this.state = 575;
        this.letClauseItem();
        this.state = 580;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          51,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 576;
                this.match(cqlParser.T__14);
                this.state = 577;
                this.letClauseItem();
              }
            }
          }
          this.state = 582;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            51,
            this.context
          );
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public letClauseItem(): LetClauseItemContext {
    let localContext = new LetClauseItemContext(this.context, this.state);
    this.enterRule(localContext, 100, cqlParser.RULE_letClauseItem);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 583;
        this.identifier();
        this.state = 584;
        this.match(cqlParser.T__10);
        this.state = 585;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public whereClause(): WhereClauseContext {
    let localContext = new WhereClauseContext(this.context, this.state);
    this.enterRule(localContext, 102, cqlParser.RULE_whereClause);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 587;
        this.match(cqlParser.T__44);
        this.state = 588;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public returnClause(): ReturnClauseContext {
    let localContext = new ReturnClauseContext(this.context, this.state);
    this.enterRule(localContext, 104, cqlParser.RULE_returnClause);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 590;
        this.match(cqlParser.T__45);
        this.state = 592;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 52, this.context)
        ) {
          case 1:
            {
              this.state = 591;
              _la = this.tokenStream.LA(1);
              if (!(_la === 47 || _la === 48)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
            }
            break;
        }
        this.state = 594;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public aggregateClause(): AggregateClauseContext {
    let localContext = new AggregateClauseContext(this.context, this.state);
    this.enterRule(localContext, 106, cqlParser.RULE_aggregateClause);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 596;
        this.match(cqlParser.T__48);
        this.state = 598;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 47 || _la === 48) {
          {
            this.state = 597;
            _la = this.tokenStream.LA(1);
            if (!(_la === 47 || _la === 48)) {
              this.errorHandler.recoverInline(this);
            } else {
              this.errorHandler.reportMatch(this);
              this.consume();
            }
          }
        }

        this.state = 600;
        this.identifier();
        this.state = 602;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 50) {
          {
            this.state = 601;
            this.startingClause();
          }
        }

        this.state = 604;
        this.match(cqlParser.T__10);
        this.state = 605;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public startingClause(): StartingClauseContext {
    let localContext = new StartingClauseContext(this.context, this.state);
    this.enterRule(localContext, 108, cqlParser.RULE_startingClause);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 607;
        this.match(cqlParser.T__49);
        this.state = 614;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 55, this.context)
        ) {
          case 1:
            {
              this.state = 608;
              this.simpleLiteral();
            }
            break;
          case 2:
            {
              this.state = 609;
              this.quantity();
            }
            break;
          case 3:
            {
              {
                this.state = 610;
                this.match(cqlParser.T__30);
                this.state = 611;
                this.expression(0);
                this.state = 612;
                this.match(cqlParser.T__31);
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public sortClause(): SortClauseContext {
    let localContext = new SortClauseContext(this.context, this.state);
    this.enterRule(localContext, 110, cqlParser.RULE_sortClause);
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 616;
        this.match(cqlParser.T__50);
        this.state = 627;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case cqlParser.T__52:
          case cqlParser.T__53:
          case cqlParser.T__54:
          case cqlParser.T__55:
            {
              this.state = 617;
              this.sortDirection();
            }
            break;
          case cqlParser.T__51:
            {
              {
                this.state = 618;
                this.match(cqlParser.T__51);
                this.state = 619;
                this.sortByItem();
                this.state = 624;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(
                  this.tokenStream,
                  56,
                  this.context
                );
                while (
                  alternative !== 2 &&
                  alternative !== antlr.ATN.INVALID_ALT_NUMBER
                ) {
                  if (alternative === 1) {
                    {
                      {
                        this.state = 620;
                        this.match(cqlParser.T__14);
                        this.state = 621;
                        this.sortByItem();
                      }
                    }
                  }
                  this.state = 626;
                  this.errorHandler.sync(this);
                  alternative = this.interpreter.adaptivePredict(
                    this.tokenStream,
                    56,
                    this.context
                  );
                }
              }
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public sortDirection(): SortDirectionContext {
    let localContext = new SortDirectionContext(this.context, this.state);
    this.enterRule(localContext, 112, cqlParser.RULE_sortDirection);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 629;
        _la = this.tokenStream.LA(1);
        if (!(((_la - 53) & ~0x1f) === 0 && ((1 << (_la - 53)) & 15) !== 0)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public sortByItem(): SortByItemContext {
    let localContext = new SortByItemContext(this.context, this.state);
    this.enterRule(localContext, 114, cqlParser.RULE_sortByItem);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 631;
        this.expressionTerm(0);
        this.state = 633;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 58, this.context)
        ) {
          case 1:
            {
              this.state = 632;
              this.sortDirection();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public qualifiedIdentifier(): QualifiedIdentifierContext {
    let localContext = new QualifiedIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 116, cqlParser.RULE_qualifiedIdentifier);
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 640;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          59,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 635;
                this.qualifier();
                this.state = 636;
                this.match(cqlParser.T__16);
              }
            }
          }
          this.state = 642;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            59,
            this.context
          );
        }
        this.state = 643;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext {
    let localContext = new QualifiedIdentifierExpressionContext(
      this.context,
      this.state
    );
    this.enterRule(
      localContext,
      118,
      cqlParser.RULE_qualifiedIdentifierExpression
    );
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 650;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          60,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 645;
                this.qualifierExpression();
                this.state = 646;
                this.match(cqlParser.T__16);
              }
            }
          }
          this.state = 652;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            60,
            this.context
          );
        }
        this.state = 653;
        this.referentialIdentifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public qualifierExpression(): QualifierExpressionContext {
    let localContext = new QualifierExpressionContext(this.context, this.state);
    this.enterRule(localContext, 120, cqlParser.RULE_qualifierExpression);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 655;
        this.referentialIdentifier();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }

  public simplePath(): SimplePathContext;
  public simplePath(_p: number): SimplePathContext;
  public simplePath(_p?: number): SimplePathContext {
    if (_p === undefined) {
      _p = 0;
    }

    let parentContext = this.context;
    let parentState = this.state;
    let localContext = new SimplePathContext(this.context, parentState);
    let previousContext = localContext;
    let _startState = 122;
    this.enterRecursionRule(localContext, 122, cqlParser.RULE_simplePath, _p);
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        {
          localContext = new SimplePathReferentialIdentifierContext(
            localContext
          );
          this.context = localContext;
          previousContext = localContext;

          this.state = 658;
          this.referentialIdentifier();
        }
        this.context!.stop = this.tokenStream.LT(-1);
        this.state = 670;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          62,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            if (this.parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            previousContext = localContext;
            {
              this.state = 668;
              this.errorHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(
                  this.tokenStream,
                  61,
                  this.context
                )
              ) {
                case 1:
                  {
                    localContext = new SimplePathQualifiedIdentifierContext(
                      new SimplePathContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_simplePath
                    );
                    this.state = 660;
                    if (!this.precpred(this.context, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 2)"
                      );
                    }
                    this.state = 661;
                    this.match(cqlParser.T__16);
                    this.state = 662;
                    this.referentialIdentifier();
                  }
                  break;
                case 2:
                  {
                    localContext = new SimplePathIndexerContext(
                      new SimplePathContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_simplePath
                    );
                    this.state = 663;
                    if (!this.precpred(this.context, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 1)"
                      );
                    }
                    this.state = 664;
                    this.match(cqlParser.T__37);
                    this.state = 665;
                    this.simpleLiteral();
                    this.state = 666;
                    this.match(cqlParser.T__39);
                  }
                  break;
              }
            }
          }
          this.state = 672;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            62,
            this.context
          );
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(parentContext);
    }
    return localContext;
  }
  public simpleLiteral(): SimpleLiteralContext {
    let localContext = new SimpleLiteralContext(this.context, this.state);
    this.enterRule(localContext, 124, cqlParser.RULE_simpleLiteral);
    try {
      this.state = 675;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.STRING:
          localContext = new SimpleStringLiteralContext(localContext);
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 673;
            this.match(cqlParser.STRING);
          }
          break;
        case cqlParser.NUMBER:
          localContext = new SimpleNumberLiteralContext(localContext);
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 674;
            this.match(cqlParser.NUMBER);
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }

  public expression(): ExpressionContext;
  public expression(_p: number): ExpressionContext;
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let parentContext = this.context;
    let parentState = this.state;
    let localContext = new ExpressionContext(this.context, parentState);
    let previousContext = localContext;
    let _startState = 126;
    this.enterRecursionRule(localContext, 126, cqlParser.RULE_expression, _p);
    let _la: number;
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 708;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 65, this.context)
        ) {
          case 1:
            {
              localContext = new TermExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;

              this.state = 678;
              this.expressionTerm(0);
            }
            break;
          case 2:
            {
              localContext = new RetrieveExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 679;
              this.retrieve();
            }
            break;
          case 3:
            {
              localContext = new QueryExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 680;
              this.query();
            }
            break;
          case 4:
            {
              localContext = new CastExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 681;
              this.match(cqlParser.T__62);
              this.state = 682;
              this.expression(0);
              this.state = 683;
              this.match(cqlParser.T__61);
              this.state = 684;
              this.typeSpecifier();
            }
            break;
          case 5:
            {
              localContext = new NotExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 686;
              this.match(cqlParser.T__57);
              this.state = 687;
              this.expression(13);
            }
            break;
          case 6:
            {
              localContext = new ExistenceExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 688;
              this.match(cqlParser.T__63);
              this.state = 689;
              this.expression(12);
            }
            break;
          case 7:
            {
              localContext = new DurationBetweenExpressionContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 692;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
              if (_la === 68) {
                {
                  this.state = 690;
                  this.match(cqlParser.T__67);
                  this.state = 691;
                  this.match(cqlParser.T__40);
                }
              }

              this.state = 694;
              this.pluralDateTimePrecision();
              this.state = 695;
              this.match(cqlParser.T__65);
              this.state = 696;
              this.expressionTerm(0);
              this.state = 697;
              this.match(cqlParser.T__66);
              this.state = 698;
              this.expressionTerm(0);
            }
            break;
          case 8:
            {
              localContext = new DifferenceBetweenExpressionContext(
                localContext
              );
              this.context = localContext;
              previousContext = localContext;
              this.state = 700;
              this.match(cqlParser.T__68);
              this.state = 701;
              this.match(cqlParser.T__40);
              this.state = 702;
              this.pluralDateTimePrecision();
              this.state = 703;
              this.match(cqlParser.T__65);
              this.state = 704;
              this.expressionTerm(0);
              this.state = 705;
              this.match(cqlParser.T__66);
              this.state = 706;
              this.expressionTerm(0);
            }
            break;
        }
        this.context!.stop = this.tokenStream.LT(-1);
        this.state = 758;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          70,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            if (this.parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            previousContext = localContext;
            {
              this.state = 756;
              this.errorHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(
                  this.tokenStream,
                  69,
                  this.context
                )
              ) {
                case 1:
                  {
                    localContext = new InFixSetExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 710;
                    if (!this.precpred(this.context, 8)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 8)"
                      );
                    }
                    this.state = 711;
                    _la = this.tokenStream.LA(1);
                    if (
                      !(
                        ((_la - 70) & ~0x1f) === 0 &&
                        ((1 << (_la - 70)) & 15) !== 0
                      )
                    ) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 712;
                    this.expression(9);
                  }
                  break;
                case 2:
                  {
                    localContext = new InequalityExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 713;
                    if (!this.precpred(this.context, 7)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 7)"
                      );
                    }
                    this.state = 714;
                    _la = this.tokenStream.LA(1);
                    if (
                      !(_la === 22 || _la === 23 || _la === 74 || _la === 75)
                    ) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 715;
                    this.expression(8);
                  }
                  break;
                case 3:
                  {
                    localContext = new TimingExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 716;
                    if (!this.precpred(this.context, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 6)"
                      );
                    }
                    this.state = 717;
                    this.intervalOperatorPhrase();
                    this.state = 718;
                    this.expression(7);
                  }
                  break;
                case 4:
                  {
                    localContext = new EqualityExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 720;
                    if (!this.precpred(this.context, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 5)"
                      );
                    }
                    this.state = 721;
                    _la = this.tokenStream.LA(1);
                    if (
                      !(_la === 42 || _la === 43 || _la === 76 || _la === 77)
                    ) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 722;
                    this.expression(6);
                  }
                  break;
                case 5:
                  {
                    localContext = new MembershipExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 723;
                    if (!this.precpred(this.context, 4)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 4)"
                      );
                    }
                    this.state = 724;
                    _la = this.tokenStream.LA(1);
                    if (!(_la === 41 || _la === 78)) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 726;
                    this.errorHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this.tokenStream,
                        66,
                        this.context
                      )
                    ) {
                      case 1:
                        {
                          this.state = 725;
                          this.dateTimePrecisionSpecifier();
                        }
                        break;
                    }
                    this.state = 728;
                    this.expression(5);
                  }
                  break;
                case 6:
                  {
                    localContext = new AndExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 729;
                    if (!this.precpred(this.context, 3)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 3)"
                      );
                    }
                    this.state = 730;
                    this.match(cqlParser.T__66);
                    this.state = 731;
                    this.expression(4);
                  }
                  break;
                case 7:
                  {
                    localContext = new OrExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 732;
                    if (!this.precpred(this.context, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 2)"
                      );
                    }
                    this.state = 733;
                    _la = this.tokenStream.LA(1);
                    if (!(_la === 79 || _la === 80)) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 734;
                    this.expression(3);
                  }
                  break;
                case 8:
                  {
                    localContext = new ImpliesExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 735;
                    if (!this.precpred(this.context, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 1)"
                      );
                    }
                    this.state = 736;
                    this.match(cqlParser.T__80);
                    this.state = 737;
                    this.expression(2);
                  }
                  break;
                case 9:
                  {
                    localContext = new BooleanExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 738;
                    if (!this.precpred(this.context, 16)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 16)"
                      );
                    }
                    this.state = 739;
                    this.match(cqlParser.T__56);
                    this.state = 741;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 58) {
                      {
                        this.state = 740;
                        this.match(cqlParser.T__57);
                      }
                    }

                    this.state = 743;
                    _la = this.tokenStream.LA(1);
                    if (
                      !(
                        ((_la - 59) & ~0x1f) === 0 &&
                        ((1 << (_la - 59)) & 7) !== 0
                      )
                    ) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                  }
                  break;
                case 10:
                  {
                    localContext = new TypeExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 744;
                    if (!this.precpred(this.context, 15)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 15)"
                      );
                    }
                    this.state = 745;
                    _la = this.tokenStream.LA(1);
                    if (!(_la === 57 || _la === 62)) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 746;
                    this.typeSpecifier();
                  }
                  break;
                case 11:
                  {
                    localContext = new BetweenExpressionContext(
                      new ExpressionContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expression
                    );
                    this.state = 747;
                    if (!this.precpred(this.context, 11)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 11)"
                      );
                    }
                    this.state = 749;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 65) {
                      {
                        this.state = 748;
                        this.match(cqlParser.T__64);
                      }
                    }

                    this.state = 751;
                    this.match(cqlParser.T__65);
                    this.state = 752;
                    this.expressionTerm(0);
                    this.state = 753;
                    this.match(cqlParser.T__66);
                    this.state = 754;
                    this.expressionTerm(0);
                  }
                  break;
              }
            }
          }
          this.state = 760;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            70,
            this.context
          );
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(parentContext);
    }
    return localContext;
  }
  public dateTimePrecision(): DateTimePrecisionContext {
    let localContext = new DateTimePrecisionContext(this.context, this.state);
    this.enterRule(localContext, 128, cqlParser.RULE_dateTimePrecision);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 761;
        _la = this.tokenStream.LA(1);
        if (!(((_la - 82) & ~0x1f) === 0 && ((1 << (_la - 82)) & 255) !== 0)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public dateTimeComponent(): DateTimeComponentContext {
    let localContext = new DateTimeComponentContext(this.context, this.state);
    this.enterRule(localContext, 130, cqlParser.RULE_dateTimeComponent);
    try {
      this.state = 768;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.T__81:
        case cqlParser.T__82:
        case cqlParser.T__83:
        case cqlParser.T__84:
        case cqlParser.T__85:
        case cqlParser.T__86:
        case cqlParser.T__87:
        case cqlParser.T__88:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 763;
            this.dateTimePrecision();
          }
          break;
        case cqlParser.T__89:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 764;
            this.match(cqlParser.T__89);
          }
          break;
        case cqlParser.T__90:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 765;
            this.match(cqlParser.T__90);
          }
          break;
        case cqlParser.T__91:
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 766;
            this.match(cqlParser.T__91);
          }
          break;
        case cqlParser.T__92:
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 767;
            this.match(cqlParser.T__92);
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
    let localContext = new PluralDateTimePrecisionContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 132, cqlParser.RULE_pluralDateTimePrecision);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 770;
        _la = this.tokenStream.LA(1);
        if (!(((_la - 94) & ~0x1f) === 0 && ((1 << (_la - 94)) & 255) !== 0)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }

  public expressionTerm(): ExpressionTermContext;
  public expressionTerm(_p: number): ExpressionTermContext;
  public expressionTerm(_p?: number): ExpressionTermContext {
    if (_p === undefined) {
      _p = 0;
    }

    let parentContext = this.context;
    let parentState = this.state;
    let localContext = new ExpressionTermContext(this.context, parentState);
    let previousContext = localContext;
    let _startState = 134;
    this.enterRecursionRule(
      localContext,
      134,
      cqlParser.RULE_expressionTerm,
      _p
    );
    let _la: number;
    try {
      let alternative: number;
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 850;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 77, this.context)
        ) {
          case 1:
            {
              localContext = new TermExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;

              this.state = 773;
              this.term();
            }
            break;
          case 2:
            {
              localContext = new ConversionExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 774;
              this.match(cqlParser.T__101);
              this.state = 775;
              this.expression(0);
              this.state = 776;
              this.match(cqlParser.T__102);
              this.state = 779;
              this.errorHandler.sync(this);
              switch (this.tokenStream.LA(1)) {
                case cqlParser.T__0:
                case cqlParser.T__1:
                case cqlParser.T__2:
                case cqlParser.T__3:
                case cqlParser.T__4:
                case cqlParser.T__5:
                case cqlParser.T__6:
                case cqlParser.T__7:
                case cqlParser.T__8:
                case cqlParser.T__9:
                case cqlParser.T__11:
                case cqlParser.T__12:
                case cqlParser.T__17:
                case cqlParser.T__19:
                case cqlParser.T__20:
                case cqlParser.T__23:
                case cqlParser.T__24:
                case cqlParser.T__25:
                case cqlParser.T__26:
                case cqlParser.T__27:
                case cqlParser.T__28:
                case cqlParser.T__29:
                case cqlParser.T__44:
                case cqlParser.T__49:
                case cqlParser.T__51:
                case cqlParser.T__52:
                case cqlParser.T__53:
                case cqlParser.T__54:
                case cqlParser.T__55:
                case cqlParser.T__70:
                case cqlParser.T__71:
                case cqlParser.T__72:
                case cqlParser.T__77:
                case cqlParser.T__79:
                case cqlParser.T__80:
                case cqlParser.T__89:
                case cqlParser.T__90:
                case cqlParser.T__91:
                case cqlParser.T__92:
                case cqlParser.T__105:
                case cqlParser.T__106:
                case cqlParser.T__108:
                case cqlParser.T__109:
                case cqlParser.T__110:
                case cqlParser.T__118:
                case cqlParser.T__119:
                case cqlParser.T__130:
                case cqlParser.T__131:
                case cqlParser.T__132:
                case cqlParser.T__133:
                case cqlParser.T__140:
                case cqlParser.T__141:
                case cqlParser.T__144:
                case cqlParser.T__148:
                case cqlParser.T__149:
                case cqlParser.T__153:
                case cqlParser.T__154:
                case cqlParser.T__155:
                case cqlParser.QUOTEDIDENTIFIER:
                case cqlParser.IDENTIFIER:
                case cqlParser.DELIMITEDIDENTIFIER:
                  {
                    this.state = 777;
                    this.typeSpecifier();
                  }
                  break;
                case cqlParser.T__81:
                case cqlParser.T__82:
                case cqlParser.T__83:
                case cqlParser.T__84:
                case cqlParser.T__85:
                case cqlParser.T__86:
                case cqlParser.T__87:
                case cqlParser.T__88:
                case cqlParser.T__93:
                case cqlParser.T__94:
                case cqlParser.T__95:
                case cqlParser.T__96:
                case cqlParser.T__97:
                case cqlParser.T__98:
                case cqlParser.T__99:
                case cqlParser.T__100:
                case cqlParser.STRING:
                  {
                    this.state = 778;
                    this.unit();
                  }
                  break;
                default:
                  throw new antlr.NoViableAltException(this);
              }
            }
            break;
          case 3:
            {
              localContext = new PolarityExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 781;
              _la = this.tokenStream.LA(1);
              if (!(_la === 104 || _la === 105)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 782;
              this.expressionTerm(18);
            }
            break;
          case 4:
            {
              localContext = new TimeBoundaryExpressionTermContext(
                localContext
              );
              this.context = localContext;
              previousContext = localContext;
              this.state = 783;
              _la = this.tokenStream.LA(1);
              if (!(_la === 106 || _la === 107)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 784;
              this.match(cqlParser.T__107);
              this.state = 785;
              this.expressionTerm(17);
            }
            break;
          case 5:
            {
              localContext = new TimeUnitExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 786;
              this.dateTimeComponent();
              this.state = 787;
              this.match(cqlParser.T__18);
              this.state = 788;
              this.expressionTerm(16);
            }
            break;
          case 6:
            {
              localContext = new DurationExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 790;
              this.match(cqlParser.T__67);
              this.state = 791;
              this.match(cqlParser.T__40);
              this.state = 792;
              this.pluralDateTimePrecision();
              this.state = 793;
              this.match(cqlParser.T__107);
              this.state = 794;
              this.expressionTerm(15);
            }
            break;
          case 7:
            {
              localContext = new DifferenceExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 796;
              this.match(cqlParser.T__68);
              this.state = 797;
              this.match(cqlParser.T__40);
              this.state = 798;
              this.pluralDateTimePrecision();
              this.state = 799;
              this.match(cqlParser.T__107);
              this.state = 800;
              this.expressionTerm(14);
            }
            break;
          case 8:
            {
              localContext = new WidthExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 802;
              this.match(cqlParser.T__108);
              this.state = 803;
              this.match(cqlParser.T__107);
              this.state = 804;
              this.expressionTerm(13);
            }
            break;
          case 9:
            {
              localContext = new SuccessorExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 805;
              this.match(cqlParser.T__109);
              this.state = 806;
              this.match(cqlParser.T__107);
              this.state = 807;
              this.expressionTerm(12);
            }
            break;
          case 10:
            {
              localContext = new PredecessorExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 808;
              this.match(cqlParser.T__110);
              this.state = 809;
              this.match(cqlParser.T__107);
              this.state = 810;
              this.expressionTerm(11);
            }
            break;
          case 11:
            {
              localContext = new ElementExtractorExpressionTermContext(
                localContext
              );
              this.context = localContext;
              previousContext = localContext;
              this.state = 811;
              this.match(cqlParser.T__111);
              this.state = 812;
              this.match(cqlParser.T__18);
              this.state = 813;
              this.expressionTerm(10);
            }
            break;
          case 12:
            {
              localContext = new PointExtractorExpressionTermContext(
                localContext
              );
              this.context = localContext;
              previousContext = localContext;
              this.state = 814;
              this.match(cqlParser.T__112);
              this.state = 815;
              this.match(cqlParser.T__18);
              this.state = 816;
              this.expressionTerm(9);
            }
            break;
          case 13:
            {
              localContext = new TypeExtentExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 817;
              _la = this.tokenStream.LA(1);
              if (!(_la === 114 || _la === 115)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 818;
              this.namedTypeSpecifier();
            }
            break;
          case 14:
            {
              localContext = new IfThenElseExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 819;
              this.match(cqlParser.T__121);
              this.state = 820;
              this.expression(0);
              this.state = 821;
              this.match(cqlParser.T__122);
              this.state = 822;
              this.expression(0);
              this.state = 823;
              this.match(cqlParser.T__123);
              this.state = 824;
              this.expression(0);
            }
            break;
          case 15:
            {
              localContext = new CaseExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 826;
              this.match(cqlParser.T__124);
              this.state = 828;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
              if (
                ((_la & ~0x1f) === 0 && ((1 << _la) & 4215044094) !== 0) ||
                (((_la - 38) & ~0x1f) === 0 &&
                  ((1 << (_la - 38)) & 3338130561) !== 0) ||
                (((_la - 71) & ~0x1f) === 0 &&
                  ((1 << (_la - 71)) & 4294966919) !== 0) ||
                (((_la - 104) & ~0x1f) === 0 &&
                  ((1 << (_la - 104)) & 2045087727) !== 0) ||
                (((_la - 141) & ~0x1f) === 0 &&
                  ((1 << (_la - 141)) & 67108627) !== 0)
              ) {
                {
                  this.state = 827;
                  this.expression(0);
                }
              }

              this.state = 831;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
              do {
                {
                  {
                    this.state = 830;
                    this.caseExpressionItem();
                  }
                }
                this.state = 833;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
              } while (_la === 130);
              this.state = 835;
              this.match(cqlParser.T__123);
              this.state = 836;
              this.expression(0);
              this.state = 837;
              this.match(cqlParser.T__106);
            }
            break;
          case 16:
            {
              localContext = new AggregateExpressionTermContext(localContext);
              this.context = localContext;
              previousContext = localContext;
              this.state = 839;
              _la = this.tokenStream.LA(1);
              if (!(_la === 48 || _la === 126)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 840;
              this.expression(0);
            }
            break;
          case 17:
            {
              localContext = new SetAggregateExpressionTermContext(
                localContext
              );
              this.context = localContext;
              previousContext = localContext;
              this.state = 841;
              _la = this.tokenStream.LA(1);
              if (!(_la === 127 || _la === 128)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 842;
              this.expression(0);
              this.state = 848;
              this.errorHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(
                  this.tokenStream,
                  76,
                  this.context
                )
              ) {
                case 1:
                  {
                    this.state = 843;
                    this.match(cqlParser.T__128);
                    this.state = 846;
                    this.errorHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this.tokenStream,
                        75,
                        this.context
                      )
                    ) {
                      case 1:
                        {
                          this.state = 844;
                          this.dateTimePrecision();
                        }
                        break;
                      case 2:
                        {
                          this.state = 845;
                          this.expression(0);
                        }
                        break;
                    }
                  }
                  break;
              }
            }
            break;
        }
        this.context!.stop = this.tokenStream.LT(-1);
        this.state = 871;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          79,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            if (this.parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            previousContext = localContext;
            {
              this.state = 869;
              this.errorHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(
                  this.tokenStream,
                  78,
                  this.context
                )
              ) {
                case 1:
                  {
                    localContext = new PowerExpressionTermContext(
                      new ExpressionTermContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expressionTerm
                    );
                    this.state = 852;
                    if (!this.precpred(this.context, 7)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 7)"
                      );
                    }
                    this.state = 853;
                    this.match(cqlParser.T__115);
                    this.state = 854;
                    this.expressionTerm(8);
                  }
                  break;
                case 2:
                  {
                    localContext = new MultiplicationExpressionTermContext(
                      new ExpressionTermContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expressionTerm
                    );
                    this.state = 855;
                    if (!this.precpred(this.context, 6)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 6)"
                      );
                    }
                    this.state = 856;
                    _la = this.tokenStream.LA(1);
                    if (
                      !(
                        ((_la - 117) & ~0x1f) === 0 &&
                        ((1 << (_la - 117)) & 15) !== 0
                      )
                    ) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 857;
                    this.expressionTerm(7);
                  }
                  break;
                case 3:
                  {
                    localContext = new AdditionExpressionTermContext(
                      new ExpressionTermContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expressionTerm
                    );
                    this.state = 858;
                    if (!this.precpred(this.context, 5)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 5)"
                      );
                    }
                    this.state = 859;
                    _la = this.tokenStream.LA(1);
                    if (
                      !(
                        ((_la - 104) & ~0x1f) === 0 &&
                        ((1 << (_la - 104)) & 131075) !== 0
                      )
                    ) {
                      this.errorHandler.recoverInline(this);
                    } else {
                      this.errorHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 860;
                    this.expressionTerm(6);
                  }
                  break;
                case 4:
                  {
                    localContext = new InvocationExpressionTermContext(
                      new ExpressionTermContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expressionTerm
                    );
                    this.state = 861;
                    if (!this.precpred(this.context, 21)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 21)"
                      );
                    }
                    this.state = 862;
                    this.match(cqlParser.T__16);
                    this.state = 863;
                    this.qualifiedInvocation();
                  }
                  break;
                case 5:
                  {
                    localContext = new IndexedExpressionTermContext(
                      new ExpressionTermContext(parentContext, parentState)
                    );
                    this.pushNewRecursionContext(
                      localContext,
                      _startState,
                      cqlParser.RULE_expressionTerm
                    );
                    this.state = 864;
                    if (!this.precpred(this.context, 20)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this.context, 20)"
                      );
                    }
                    this.state = 865;
                    this.match(cqlParser.T__37);
                    this.state = 866;
                    this.expression(0);
                    this.state = 867;
                    this.match(cqlParser.T__39);
                  }
                  break;
              }
            }
          }
          this.state = 873;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            79,
            this.context
          );
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(parentContext);
    }
    return localContext;
  }
  public caseExpressionItem(): CaseExpressionItemContext {
    let localContext = new CaseExpressionItemContext(this.context, this.state);
    this.enterRule(localContext, 136, cqlParser.RULE_caseExpressionItem);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 874;
        this.match(cqlParser.T__129);
        this.state = 875;
        this.expression(0);
        this.state = 876;
        this.match(cqlParser.T__122);
        this.state = 877;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext {
    let localContext = new DateTimePrecisionSpecifierContext(
      this.context,
      this.state
    );
    this.enterRule(
      localContext,
      138,
      cqlParser.RULE_dateTimePrecisionSpecifier
    );
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 879;
        this.dateTimePrecision();
        this.state = 880;
        this.match(cqlParser.T__107);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public relativeQualifier(): RelativeQualifierContext {
    let localContext = new RelativeQualifierContext(this.context, this.state);
    this.enterRule(localContext, 140, cqlParser.RULE_relativeQualifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 882;
        _la = this.tokenStream.LA(1);
        if (!(_la === 131 || _la === 132)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public offsetRelativeQualifier(): OffsetRelativeQualifierContext {
    let localContext = new OffsetRelativeQualifierContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 142, cqlParser.RULE_offsetRelativeQualifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 884;
        _la = this.tokenStream.LA(1);
        if (!(_la === 133 || _la === 134)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public exclusiveRelativeQualifier(): ExclusiveRelativeQualifierContext {
    let localContext = new ExclusiveRelativeQualifierContext(
      this.context,
      this.state
    );
    this.enterRule(
      localContext,
      144,
      cqlParser.RULE_exclusiveRelativeQualifier
    );
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 886;
        _la = this.tokenStream.LA(1);
        if (!(_la === 135 || _la === 136)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public quantityOffset(): QuantityOffsetContext {
    let localContext = new QuantityOffsetContext(this.context, this.state);
    this.enterRule(localContext, 146, cqlParser.RULE_quantityOffset);
    let _la: number;
    try {
      this.state = 895;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.NUMBER:
          this.enterOuterAlt(localContext, 1);
          {
            {
              this.state = 888;
              this.quantity();
              this.state = 890;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
              if (_la === 133 || _la === 134) {
                {
                  this.state = 889;
                  this.offsetRelativeQualifier();
                }
              }
            }
          }
          break;
        case cqlParser.T__134:
        case cqlParser.T__135:
          this.enterOuterAlt(localContext, 2);
          {
            {
              this.state = 892;
              this.exclusiveRelativeQualifier();
              this.state = 893;
              this.quantity();
            }
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public temporalRelationship(): TemporalRelationshipContext {
    let localContext = new TemporalRelationshipContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 148, cqlParser.RULE_temporalRelationship);
    let _la: number;
    try {
      this.state = 905;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            {
              this.state = 898;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
              if (_la === 137) {
                {
                  this.state = 897;
                  this.match(cqlParser.T__136);
                }
              }

              this.state = 900;
              _la = this.tokenStream.LA(1);
              if (!(_la === 138 || _la === 139)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
            }
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            {
              this.state = 901;
              _la = this.tokenStream.LA(1);
              if (!(_la === 138 || _la === 139)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 903;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
              if (_la === 140) {
                {
                  this.state = 902;
                  this.match(cqlParser.T__139);
                }
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public intervalOperatorPhrase(): IntervalOperatorPhraseContext {
    let localContext = new IntervalOperatorPhraseContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 150, cqlParser.RULE_intervalOperatorPhrase);
    let _la: number;
    try {
      this.state = 988;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 108, this.context)
      ) {
        case 1:
          localContext = new ConcurrentWithIntervalOperatorPhraseContext(
            localContext
          );
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 908;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 7) !== 0) {
              {
                this.state = 907;
                _la = this.tokenStream.LA(1);
                if (
                  !(
                    ((_la - 141) & ~0x1f) === 0 &&
                    ((1 << (_la - 141)) & 7) !== 0
                  )
                ) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
              }
            }

            this.state = 910;
            this.match(cqlParser.T__143);
            this.state = 912;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((_la - 82) & ~0x1f) === 0 && ((1 << (_la - 82)) & 255) !== 0) {
              {
                this.state = 911;
                this.dateTimePrecision();
              }
            }

            this.state = 916;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
              case cqlParser.T__130:
              case cqlParser.T__131:
                {
                  this.state = 914;
                  this.relativeQualifier();
                }
                break;
              case cqlParser.T__61:
                {
                  this.state = 915;
                  this.match(cqlParser.T__61);
                }
                break;
              default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 919;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                88,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 918;
                  _la = this.tokenStream.LA(1);
                  if (!(_la === 106 || _la === 107)) {
                    this.errorHandler.recoverInline(this);
                  } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                  }
                }
                break;
            }
          }
          break;
        case 2:
          localContext = new IncludesIntervalOperatorPhraseContext(
            localContext
          );
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 922;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
              {
                this.state = 921;
                this.match(cqlParser.T__64);
              }
            }

            this.state = 924;
            this.match(cqlParser.T__144);
            this.state = 926;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                90,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 925;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
            this.state = 929;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                91,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 928;
                  _la = this.tokenStream.LA(1);
                  if (!(_la === 106 || _la === 107)) {
                    this.errorHandler.recoverInline(this);
                  } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                  }
                }
                break;
            }
          }
          break;
        case 3:
          localContext = new IncludedInIntervalOperatorPhraseContext(
            localContext
          );
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 932;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 7) !== 0) {
              {
                this.state = 931;
                _la = this.tokenStream.LA(1);
                if (
                  !(
                    ((_la - 141) & ~0x1f) === 0 &&
                    ((1 << (_la - 141)) & 7) !== 0
                  )
                ) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
              }
            }

            this.state = 935;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
              {
                this.state = 934;
                this.match(cqlParser.T__64);
              }
            }

            this.state = 937;
            _la = this.tokenStream.LA(1);
            if (!(_la === 146 || _la === 147)) {
              this.errorHandler.recoverInline(this);
            } else {
              this.errorHandler.reportMatch(this);
              this.consume();
            }
            this.state = 939;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                94,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 938;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
          }
          break;
        case 4:
          localContext = new BeforeOrAfterIntervalOperatorPhraseContext(
            localContext
          );
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 942;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 7) !== 0) {
              {
                this.state = 941;
                _la = this.tokenStream.LA(1);
                if (
                  !(
                    ((_la - 141) & ~0x1f) === 0 &&
                    ((1 << (_la - 141)) & 7) !== 0
                  )
                ) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
              }
            }

            this.state = 945;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (
              ((_la - 135) & ~0x1f) === 0 &&
              ((1 << (_la - 135)) & 2147483651) !== 0
            ) {
              {
                this.state = 944;
                this.quantityOffset();
              }
            }

            this.state = 947;
            this.temporalRelationship();
            this.state = 949;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                97,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 948;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
            this.state = 952;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                98,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 951;
                  _la = this.tokenStream.LA(1);
                  if (!(_la === 106 || _la === 107)) {
                    this.errorHandler.recoverInline(this);
                  } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                  }
                }
                break;
            }
          }
          break;
        case 5:
          localContext = new WithinIntervalOperatorPhraseContext(localContext);
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 955;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 7) !== 0) {
              {
                this.state = 954;
                _la = this.tokenStream.LA(1);
                if (
                  !(
                    ((_la - 141) & ~0x1f) === 0 &&
                    ((1 << (_la - 141)) & 7) !== 0
                  )
                ) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
              }
            }

            this.state = 958;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
              {
                this.state = 957;
                this.match(cqlParser.T__64);
              }
            }

            this.state = 960;
            this.match(cqlParser.T__147);
            this.state = 961;
            this.quantity();
            this.state = 962;
            this.match(cqlParser.T__107);
            this.state = 964;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                101,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 963;
                  _la = this.tokenStream.LA(1);
                  if (!(_la === 106 || _la === 107)) {
                    this.errorHandler.recoverInline(this);
                  } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                  }
                }
                break;
            }
          }
          break;
        case 6:
          localContext = new MeetsIntervalOperatorPhraseContext(localContext);
          this.enterOuterAlt(localContext, 6);
          {
            this.state = 966;
            this.match(cqlParser.T__148);
            this.state = 968;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 138 || _la === 139) {
              {
                this.state = 967;
                _la = this.tokenStream.LA(1);
                if (!(_la === 138 || _la === 139)) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
              }
            }

            this.state = 971;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                103,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 970;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
          }
          break;
        case 7:
          localContext = new OverlapsIntervalOperatorPhraseContext(
            localContext
          );
          this.enterOuterAlt(localContext, 7);
          {
            this.state = 973;
            this.match(cqlParser.T__149);
            this.state = 975;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 138 || _la === 139) {
              {
                this.state = 974;
                _la = this.tokenStream.LA(1);
                if (!(_la === 138 || _la === 139)) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
              }
            }

            this.state = 978;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                105,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 977;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
          }
          break;
        case 8:
          localContext = new StartsIntervalOperatorPhraseContext(localContext);
          this.enterOuterAlt(localContext, 8);
          {
            this.state = 980;
            this.match(cqlParser.T__140);
            this.state = 982;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                106,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 981;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
          }
          break;
        case 9:
          localContext = new EndsIntervalOperatorPhraseContext(localContext);
          this.enterOuterAlt(localContext, 9);
          {
            this.state = 984;
            this.match(cqlParser.T__141);
            this.state = 986;
            this.errorHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(
                this.tokenStream,
                107,
                this.context
              )
            ) {
              case 1:
                {
                  this.state = 985;
                  this.dateTimePrecisionSpecifier();
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public term(): TermContext {
    let localContext = new TermContext(this.context, this.state);
    this.enterRule(localContext, 152, cqlParser.RULE_term);
    try {
      this.state = 1003;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 109, this.context)
      ) {
        case 1:
          localContext = new InvocationTermContext(localContext);
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 990;
            this.invocation();
          }
          break;
        case 2:
          localContext = new LiteralTermContext(localContext);
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 991;
            this.literal();
          }
          break;
        case 3:
          localContext = new ExternalConstantTermContext(localContext);
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 992;
            this.externalConstant();
          }
          break;
        case 4:
          localContext = new IntervalSelectorTermContext(localContext);
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 993;
            this.intervalSelector();
          }
          break;
        case 5:
          localContext = new TupleSelectorTermContext(localContext);
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 994;
            this.tupleSelector();
          }
          break;
        case 6:
          localContext = new InstanceSelectorTermContext(localContext);
          this.enterOuterAlt(localContext, 6);
          {
            this.state = 995;
            this.instanceSelector();
          }
          break;
        case 7:
          localContext = new ListSelectorTermContext(localContext);
          this.enterOuterAlt(localContext, 7);
          {
            this.state = 996;
            this.listSelector();
          }
          break;
        case 8:
          localContext = new CodeSelectorTermContext(localContext);
          this.enterOuterAlt(localContext, 8);
          {
            this.state = 997;
            this.codeSelector();
          }
          break;
        case 9:
          localContext = new ConceptSelectorTermContext(localContext);
          this.enterOuterAlt(localContext, 9);
          {
            this.state = 998;
            this.conceptSelector();
          }
          break;
        case 10:
          localContext = new ParenthesizedTermContext(localContext);
          this.enterOuterAlt(localContext, 10);
          {
            this.state = 999;
            this.match(cqlParser.T__30);
            this.state = 1000;
            this.expression(0);
            this.state = 1001;
            this.match(cqlParser.T__31);
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public qualifiedInvocation(): QualifiedInvocationContext {
    let localContext = new QualifiedInvocationContext(this.context, this.state);
    this.enterRule(localContext, 154, cqlParser.RULE_qualifiedInvocation);
    try {
      this.state = 1007;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 110, this.context)
      ) {
        case 1:
          localContext = new QualifiedMemberInvocationContext(localContext);
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1005;
            this.referentialIdentifier();
          }
          break;
        case 2:
          localContext = new QualifiedFunctionInvocationContext(localContext);
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1006;
            this.qualifiedFunction();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public qualifiedFunction(): QualifiedFunctionContext {
    let localContext = new QualifiedFunctionContext(this.context, this.state);
    this.enterRule(localContext, 156, cqlParser.RULE_qualifiedFunction);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1009;
        this.identifierOrFunctionIdentifier();
        this.state = 1010;
        this.match(cqlParser.T__30);
        this.state = 1012;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 4215044094) !== 0) ||
          (((_la - 38) & ~0x1f) === 0 &&
            ((1 << (_la - 38)) & 3338130561) !== 0) ||
          (((_la - 71) & ~0x1f) === 0 &&
            ((1 << (_la - 71)) & 4294966919) !== 0) ||
          (((_la - 104) & ~0x1f) === 0 &&
            ((1 << (_la - 104)) & 2045087727) !== 0) ||
          (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 67108627) !== 0)
        ) {
          {
            this.state = 1011;
            this.paramList();
          }
        }

        this.state = 1014;
        this.match(cqlParser.T__31);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public invocation(): InvocationContext {
    let localContext = new InvocationContext(this.context, this.state);
    this.enterRule(localContext, 158, cqlParser.RULE_invocation);
    try {
      this.state = 1021;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 112, this.context)
      ) {
        case 1:
          localContext = new MemberInvocationContext(localContext);
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1016;
            this.referentialIdentifier();
          }
          break;
        case 2:
          localContext = new FunctionInvocationContext(localContext);
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1017;
            this.function_();
          }
          break;
        case 3:
          localContext = new ThisInvocationContext(localContext);
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 1018;
            this.match(cqlParser.T__150);
          }
          break;
        case 4:
          localContext = new IndexInvocationContext(localContext);
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 1019;
            this.match(cqlParser.T__151);
          }
          break;
        case 5:
          localContext = new TotalInvocationContext(localContext);
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 1020;
            this.match(cqlParser.T__152);
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public function_(): FunctionContext {
    let localContext = new FunctionContext(this.context, this.state);
    this.enterRule(localContext, 160, cqlParser.RULE_function);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1023;
        this.referentialIdentifier();
        this.state = 1024;
        this.match(cqlParser.T__30);
        this.state = 1026;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 4215044094) !== 0) ||
          (((_la - 38) & ~0x1f) === 0 &&
            ((1 << (_la - 38)) & 3338130561) !== 0) ||
          (((_la - 71) & ~0x1f) === 0 &&
            ((1 << (_la - 71)) & 4294966919) !== 0) ||
          (((_la - 104) & ~0x1f) === 0 &&
            ((1 << (_la - 104)) & 2045087727) !== 0) ||
          (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 67108627) !== 0)
        ) {
          {
            this.state = 1025;
            this.paramList();
          }
        }

        this.state = 1028;
        this.match(cqlParser.T__31);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public ratio(): RatioContext {
    let localContext = new RatioContext(this.context, this.state);
    this.enterRule(localContext, 162, cqlParser.RULE_ratio);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1030;
        this.quantity();
        this.state = 1031;
        this.match(cqlParser.T__10);
        this.state = 1032;
        this.quantity();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public literal(): LiteralContext {
    let localContext = new LiteralContext(this.context, this.state);
    this.enterRule(localContext, 164, cqlParser.RULE_literal);
    let _la: number;
    try {
      this.state = 1044;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 114, this.context)
      ) {
        case 1:
          localContext = new BooleanLiteralContext(localContext);
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1034;
            _la = this.tokenStream.LA(1);
            if (!(_la === 60 || _la === 61)) {
              this.errorHandler.recoverInline(this);
            } else {
              this.errorHandler.reportMatch(this);
              this.consume();
            }
          }
          break;
        case 2:
          localContext = new NullLiteralContext(localContext);
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1035;
            this.match(cqlParser.T__58);
          }
          break;
        case 3:
          localContext = new StringLiteralContext(localContext);
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 1036;
            this.match(cqlParser.STRING);
          }
          break;
        case 4:
          localContext = new NumberLiteralContext(localContext);
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 1037;
            this.match(cqlParser.NUMBER);
          }
          break;
        case 5:
          localContext = new LongNumberLiteralContext(localContext);
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 1038;
            this.match(cqlParser.LONGNUMBER);
          }
          break;
        case 6:
          localContext = new DateTimeLiteralContext(localContext);
          this.enterOuterAlt(localContext, 6);
          {
            this.state = 1039;
            this.match(cqlParser.DATETIME);
          }
          break;
        case 7:
          localContext = new DateLiteralContext(localContext);
          this.enterOuterAlt(localContext, 7);
          {
            this.state = 1040;
            this.match(cqlParser.DATE);
          }
          break;
        case 8:
          localContext = new TimeLiteralContext(localContext);
          this.enterOuterAlt(localContext, 8);
          {
            this.state = 1041;
            this.match(cqlParser.TIME);
          }
          break;
        case 9:
          localContext = new QuantityLiteralContext(localContext);
          this.enterOuterAlt(localContext, 9);
          {
            this.state = 1042;
            this.quantity();
          }
          break;
        case 10:
          localContext = new RatioLiteralContext(localContext);
          this.enterOuterAlt(localContext, 10);
          {
            this.state = 1043;
            this.ratio();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public intervalSelector(): IntervalSelectorContext {
    let localContext = new IntervalSelectorContext(this.context, this.state);
    this.enterRule(localContext, 166, cqlParser.RULE_intervalSelector);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1046;
        this.match(cqlParser.T__23);
        this.state = 1047;
        _la = this.tokenStream.LA(1);
        if (!(_la === 31 || _la === 38)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
        this.state = 1048;
        this.expression(0);
        this.state = 1049;
        this.match(cqlParser.T__14);
        this.state = 1050;
        this.expression(0);
        this.state = 1051;
        _la = this.tokenStream.LA(1);
        if (!(_la === 32 || _la === 40)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public tupleSelector(): TupleSelectorContext {
    let localContext = new TupleSelectorContext(this.context, this.state);
    this.enterRule(localContext, 168, cqlParser.RULE_tupleSelector);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1054;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 25) {
          {
            this.state = 1053;
            this.match(cqlParser.T__24);
          }
        }

        this.state = 1056;
        this.match(cqlParser.T__13);
        this.state = 1066;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case cqlParser.T__10:
            {
              this.state = 1057;
              this.match(cqlParser.T__10);
            }
            break;
          case cqlParser.T__0:
          case cqlParser.T__1:
          case cqlParser.T__2:
          case cqlParser.T__3:
          case cqlParser.T__4:
          case cqlParser.T__5:
          case cqlParser.T__6:
          case cqlParser.T__7:
          case cqlParser.T__8:
          case cqlParser.T__9:
          case cqlParser.T__11:
          case cqlParser.T__12:
          case cqlParser.T__17:
          case cqlParser.T__19:
          case cqlParser.T__26:
          case cqlParser.T__27:
          case cqlParser.T__28:
          case cqlParser.T__29:
          case cqlParser.T__44:
          case cqlParser.T__49:
          case cqlParser.T__51:
          case cqlParser.T__52:
          case cqlParser.T__53:
          case cqlParser.T__54:
          case cqlParser.T__55:
          case cqlParser.T__70:
          case cqlParser.T__71:
          case cqlParser.T__72:
          case cqlParser.T__77:
          case cqlParser.T__79:
          case cqlParser.T__80:
          case cqlParser.T__89:
          case cqlParser.T__90:
          case cqlParser.T__91:
          case cqlParser.T__92:
          case cqlParser.T__105:
          case cqlParser.T__106:
          case cqlParser.T__108:
          case cqlParser.T__109:
          case cqlParser.T__110:
          case cqlParser.T__118:
          case cqlParser.T__119:
          case cqlParser.T__130:
          case cqlParser.T__131:
          case cqlParser.T__132:
          case cqlParser.T__133:
          case cqlParser.T__140:
          case cqlParser.T__141:
          case cqlParser.T__144:
          case cqlParser.T__148:
          case cqlParser.T__149:
          case cqlParser.T__153:
          case cqlParser.QUOTEDIDENTIFIER:
          case cqlParser.IDENTIFIER:
          case cqlParser.DELIMITEDIDENTIFIER:
            {
              {
                this.state = 1058;
                this.tupleElementSelector();
                this.state = 1063;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 15) {
                  {
                    {
                      this.state = 1059;
                      this.match(cqlParser.T__14);
                      this.state = 1060;
                      this.tupleElementSelector();
                    }
                  }
                  this.state = 1065;
                  this.errorHandler.sync(this);
                  _la = this.tokenStream.LA(1);
                }
              }
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
        this.state = 1068;
        this.match(cqlParser.T__15);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public tupleElementSelector(): TupleElementSelectorContext {
    let localContext = new TupleElementSelectorContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 170, cqlParser.RULE_tupleElementSelector);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1070;
        this.referentialIdentifier();
        this.state = 1071;
        this.match(cqlParser.T__10);
        this.state = 1072;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public instanceSelector(): InstanceSelectorContext {
    let localContext = new InstanceSelectorContext(this.context, this.state);
    this.enterRule(localContext, 172, cqlParser.RULE_instanceSelector);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1074;
        this.namedTypeSpecifier();
        this.state = 1075;
        this.match(cqlParser.T__13);
        this.state = 1085;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case cqlParser.T__10:
            {
              this.state = 1076;
              this.match(cqlParser.T__10);
            }
            break;
          case cqlParser.T__0:
          case cqlParser.T__1:
          case cqlParser.T__2:
          case cqlParser.T__3:
          case cqlParser.T__4:
          case cqlParser.T__5:
          case cqlParser.T__6:
          case cqlParser.T__7:
          case cqlParser.T__8:
          case cqlParser.T__9:
          case cqlParser.T__11:
          case cqlParser.T__12:
          case cqlParser.T__17:
          case cqlParser.T__19:
          case cqlParser.T__26:
          case cqlParser.T__27:
          case cqlParser.T__28:
          case cqlParser.T__29:
          case cqlParser.T__44:
          case cqlParser.T__49:
          case cqlParser.T__51:
          case cqlParser.T__52:
          case cqlParser.T__53:
          case cqlParser.T__54:
          case cqlParser.T__55:
          case cqlParser.T__70:
          case cqlParser.T__71:
          case cqlParser.T__72:
          case cqlParser.T__77:
          case cqlParser.T__79:
          case cqlParser.T__80:
          case cqlParser.T__89:
          case cqlParser.T__90:
          case cqlParser.T__91:
          case cqlParser.T__92:
          case cqlParser.T__105:
          case cqlParser.T__106:
          case cqlParser.T__108:
          case cqlParser.T__109:
          case cqlParser.T__110:
          case cqlParser.T__118:
          case cqlParser.T__119:
          case cqlParser.T__130:
          case cqlParser.T__131:
          case cqlParser.T__132:
          case cqlParser.T__133:
          case cqlParser.T__140:
          case cqlParser.T__141:
          case cqlParser.T__144:
          case cqlParser.T__148:
          case cqlParser.T__149:
          case cqlParser.T__153:
          case cqlParser.QUOTEDIDENTIFIER:
          case cqlParser.IDENTIFIER:
          case cqlParser.DELIMITEDIDENTIFIER:
            {
              {
                this.state = 1077;
                this.instanceElementSelector();
                this.state = 1082;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 15) {
                  {
                    {
                      this.state = 1078;
                      this.match(cqlParser.T__14);
                      this.state = 1079;
                      this.instanceElementSelector();
                    }
                  }
                  this.state = 1084;
                  this.errorHandler.sync(this);
                  _la = this.tokenStream.LA(1);
                }
              }
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
        this.state = 1087;
        this.match(cqlParser.T__15);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public instanceElementSelector(): InstanceElementSelectorContext {
    let localContext = new InstanceElementSelectorContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 174, cqlParser.RULE_instanceElementSelector);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1089;
        this.referentialIdentifier();
        this.state = 1090;
        this.match(cqlParser.T__10);
        this.state = 1091;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public listSelector(): ListSelectorContext {
    let localContext = new ListSelectorContext(this.context, this.state);
    this.enterRule(localContext, 176, cqlParser.RULE_listSelector);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1100;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 21) {
          {
            this.state = 1093;
            this.match(cqlParser.T__20);
            this.state = 1098;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
              {
                this.state = 1094;
                this.match(cqlParser.T__21);
                this.state = 1095;
                this.typeSpecifier();
                this.state = 1096;
                this.match(cqlParser.T__22);
              }
            }
          }
        }

        this.state = 1102;
        this.match(cqlParser.T__13);
        this.state = 1111;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 4215044094) !== 0) ||
          (((_la - 38) & ~0x1f) === 0 &&
            ((1 << (_la - 38)) & 3338130561) !== 0) ||
          (((_la - 71) & ~0x1f) === 0 &&
            ((1 << (_la - 71)) & 4294966919) !== 0) ||
          (((_la - 104) & ~0x1f) === 0 &&
            ((1 << (_la - 104)) & 2045087727) !== 0) ||
          (((_la - 141) & ~0x1f) === 0 && ((1 << (_la - 141)) & 67108627) !== 0)
        ) {
          {
            this.state = 1103;
            this.expression(0);
            this.state = 1108;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
              {
                {
                  this.state = 1104;
                  this.match(cqlParser.T__14);
                  this.state = 1105;
                  this.expression(0);
                }
              }
              this.state = 1110;
              this.errorHandler.sync(this);
              _la = this.tokenStream.LA(1);
            }
          }
        }

        this.state = 1113;
        this.match(cqlParser.T__15);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public displayClause(): DisplayClauseContext {
    let localContext = new DisplayClauseContext(this.context, this.state);
    this.enterRule(localContext, 178, cqlParser.RULE_displayClause);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1115;
        this.match(cqlParser.T__153);
        this.state = 1116;
        this.match(cqlParser.STRING);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public codeSelector(): CodeSelectorContext {
    let localContext = new CodeSelectorContext(this.context, this.state);
    this.enterRule(localContext, 180, cqlParser.RULE_codeSelector);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1118;
        this.match(cqlParser.T__154);
        this.state = 1119;
        this.match(cqlParser.STRING);
        this.state = 1120;
        this.match(cqlParser.T__18);
        this.state = 1121;
        this.codesystemIdentifier();
        this.state = 1123;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 124, this.context)
        ) {
          case 1:
            {
              this.state = 1122;
              this.displayClause();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public conceptSelector(): ConceptSelectorContext {
    let localContext = new ConceptSelectorContext(this.context, this.state);
    this.enterRule(localContext, 182, cqlParser.RULE_conceptSelector);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1125;
        this.match(cqlParser.T__155);
        this.state = 1126;
        this.match(cqlParser.T__13);
        this.state = 1127;
        this.codeSelector();
        this.state = 1132;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 15) {
          {
            {
              this.state = 1128;
              this.match(cqlParser.T__14);
              this.state = 1129;
              this.codeSelector();
            }
          }
          this.state = 1134;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 1135;
        this.match(cqlParser.T__15);
        this.state = 1137;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 126, this.context)
        ) {
          case 1:
            {
              this.state = 1136;
              this.displayClause();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public keyword(): KeywordContext {
    let localContext = new KeywordContext(this.context, this.state);
    this.enterRule(localContext, 184, cqlParser.RULE_keyword);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1139;
        _la = this.tokenStream.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 2067544062) !== 0) ||
            (((_la - 35) & ~0x1f) === 0 &&
              ((1 << (_la - 35)) & 4294966855) !== 0) ||
            (((_la - 67) & ~0x1f) === 0 &&
              ((1 << (_la - 67)) & 4294965367) !== 0) ||
            (((_la - 99) & ~0x1f) === 0 &&
              ((1 << (_la - 99)) & 4289855391) !== 0) ||
            (((_la - 131) & ~0x1f) === 0 &&
              ((1 << (_la - 131)) & 59768783) !== 0)
          )
        ) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public reservedWord(): ReservedWordContext {
    let localContext = new ReservedWordContext(this.context, this.state);
    this.enterRule(localContext, 186, cqlParser.RULE_reservedWord);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1141;
        _la = this.tokenStream.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 52953088) !== 0) ||
            (((_la - 35) & ~0x1f) === 0 &&
              ((1 << (_la - 35)) & 4290869831) !== 0) ||
            (((_la - 67) & ~0x1f) === 0 &&
              ((1 << (_la - 67)) & 4169109511) !== 0) ||
            (((_la - 99) & ~0x1f) === 0 &&
              ((1 << (_la - 99)) & 4286702111) !== 0) ||
            (((_la - 137) & ~0x1f) === 0 && ((1 << (_la - 137)) & 790223) !== 0)
          )
        ) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public keywordIdentifier(): KeywordIdentifierContext {
    let localContext = new KeywordIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 188, cqlParser.RULE_keywordIdentifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1143;
        _la = this.tokenStream.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 2014590974) !== 0) ||
            (((_la - 45) & ~0x1f) === 0 &&
              ((1 << (_la - 45)) & 469766049) !== 0) ||
            (((_la - 78) & ~0x1f) === 0 &&
              ((1 << (_la - 78)) & 2952851469) !== 0) ||
            (((_la - 110) & ~0x1f) === 0 &&
              ((1 << (_la - 110)) & 2178942467) !== 0) ||
            (((_la - 142) & ~0x1f) === 0 && ((1 << (_la - 142)) & 4489) !== 0)
          )
        ) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public obsoleteIdentifier(): ObsoleteIdentifierContext {
    let localContext = new ObsoleteIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 190, cqlParser.RULE_obsoleteIdentifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1145;
        _la = this.tokenStream.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 1310724) !== 0) ||
            (((_la - 45) & ~0x1f) === 0 &&
              ((1 << (_la - 45)) & 532493) !== 0) ||
            (((_la - 78) & ~0x1f) === 0 &&
              ((1 << (_la - 78)) & 805367809) !== 0) ||
            (((_la - 154) & ~0x1f) === 0 && ((1 << (_la - 154)) & 7) !== 0)
          )
        ) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public functionIdentifier(): FunctionIdentifierContext {
    let localContext = new FunctionIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 192, cqlParser.RULE_functionIdentifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1147;
        _la = this.tokenStream.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 2067544062) !== 0) ||
            (((_la - 35) & ~0x1f) === 0 &&
              ((1 << (_la - 35)) & 4294966855) !== 0) ||
            (((_la - 67) & ~0x1f) === 0 &&
              ((1 << (_la - 67)) & 4294965367) !== 0) ||
            (((_la - 99) & ~0x1f) === 0 &&
              ((1 << (_la - 99)) & 4289855391) !== 0) ||
            (((_la - 131) & ~0x1f) === 0 &&
              ((1 << (_la - 131)) & 59768207) !== 0)
          )
        ) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public typeNameIdentifier(): TypeNameIdentifierContext {
    let localContext = new TypeNameIdentifierContext(this.context, this.state);
    this.enterRule(localContext, 194, cqlParser.RULE_typeNameIdentifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1149;
        _la = this.tokenStream.LA(1);
        if (!(_la === 90 || _la === 91 || _la === 155 || _la === 156)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    let localContext = new ReferentialIdentifierContext(
      this.context,
      this.state
    );
    this.enterRule(localContext, 196, cqlParser.RULE_referentialIdentifier);
    try {
      this.state = 1153;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.QUOTEDIDENTIFIER:
        case cqlParser.IDENTIFIER:
        case cqlParser.DELIMITEDIDENTIFIER:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1151;
            this.identifier();
          }
          break;
        case cqlParser.T__0:
        case cqlParser.T__1:
        case cqlParser.T__2:
        case cqlParser.T__3:
        case cqlParser.T__4:
        case cqlParser.T__5:
        case cqlParser.T__6:
        case cqlParser.T__7:
        case cqlParser.T__8:
        case cqlParser.T__9:
        case cqlParser.T__11:
        case cqlParser.T__12:
        case cqlParser.T__17:
        case cqlParser.T__19:
        case cqlParser.T__26:
        case cqlParser.T__27:
        case cqlParser.T__28:
        case cqlParser.T__29:
        case cqlParser.T__44:
        case cqlParser.T__49:
        case cqlParser.T__51:
        case cqlParser.T__52:
        case cqlParser.T__53:
        case cqlParser.T__54:
        case cqlParser.T__55:
        case cqlParser.T__70:
        case cqlParser.T__71:
        case cqlParser.T__72:
        case cqlParser.T__77:
        case cqlParser.T__79:
        case cqlParser.T__80:
        case cqlParser.T__89:
        case cqlParser.T__90:
        case cqlParser.T__91:
        case cqlParser.T__92:
        case cqlParser.T__105:
        case cqlParser.T__106:
        case cqlParser.T__108:
        case cqlParser.T__109:
        case cqlParser.T__110:
        case cqlParser.T__118:
        case cqlParser.T__119:
        case cqlParser.T__130:
        case cqlParser.T__131:
        case cqlParser.T__132:
        case cqlParser.T__133:
        case cqlParser.T__140:
        case cqlParser.T__141:
        case cqlParser.T__144:
        case cqlParser.T__148:
        case cqlParser.T__149:
        case cqlParser.T__153:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1152;
            this.keywordIdentifier();
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public referentialOrTypeNameIdentifier(): ReferentialOrTypeNameIdentifierContext {
    let localContext = new ReferentialOrTypeNameIdentifierContext(
      this.context,
      this.state
    );
    this.enterRule(
      localContext,
      198,
      cqlParser.RULE_referentialOrTypeNameIdentifier
    );
    try {
      this.state = 1157;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 128, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1155;
            this.referentialIdentifier();
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1156;
            this.typeNameIdentifier();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext {
    let localContext = new IdentifierOrFunctionIdentifierContext(
      this.context,
      this.state
    );
    this.enterRule(
      localContext,
      200,
      cqlParser.RULE_identifierOrFunctionIdentifier
    );
    try {
      this.state = 1161;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.QUOTEDIDENTIFIER:
        case cqlParser.IDENTIFIER:
        case cqlParser.DELIMITEDIDENTIFIER:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1159;
            this.identifier();
          }
          break;
        case cqlParser.T__0:
        case cqlParser.T__1:
        case cqlParser.T__2:
        case cqlParser.T__3:
        case cqlParser.T__4:
        case cqlParser.T__5:
        case cqlParser.T__6:
        case cqlParser.T__7:
        case cqlParser.T__8:
        case cqlParser.T__9:
        case cqlParser.T__11:
        case cqlParser.T__12:
        case cqlParser.T__17:
        case cqlParser.T__18:
        case cqlParser.T__19:
        case cqlParser.T__20:
        case cqlParser.T__23:
        case cqlParser.T__24:
        case cqlParser.T__26:
        case cqlParser.T__27:
        case cqlParser.T__28:
        case cqlParser.T__29:
        case cqlParser.T__34:
        case cqlParser.T__35:
        case cqlParser.T__36:
        case cqlParser.T__40:
        case cqlParser.T__43:
        case cqlParser.T__44:
        case cqlParser.T__45:
        case cqlParser.T__46:
        case cqlParser.T__47:
        case cqlParser.T__48:
        case cqlParser.T__49:
        case cqlParser.T__50:
        case cqlParser.T__51:
        case cqlParser.T__52:
        case cqlParser.T__53:
        case cqlParser.T__54:
        case cqlParser.T__55:
        case cqlParser.T__56:
        case cqlParser.T__57:
        case cqlParser.T__58:
        case cqlParser.T__59:
        case cqlParser.T__60:
        case cqlParser.T__61:
        case cqlParser.T__62:
        case cqlParser.T__63:
        case cqlParser.T__64:
        case cqlParser.T__65:
        case cqlParser.T__66:
        case cqlParser.T__67:
        case cqlParser.T__68:
        case cqlParser.T__70:
        case cqlParser.T__71:
        case cqlParser.T__72:
        case cqlParser.T__77:
        case cqlParser.T__78:
        case cqlParser.T__79:
        case cqlParser.T__80:
        case cqlParser.T__81:
        case cqlParser.T__82:
        case cqlParser.T__83:
        case cqlParser.T__84:
        case cqlParser.T__85:
        case cqlParser.T__86:
        case cqlParser.T__87:
        case cqlParser.T__88:
        case cqlParser.T__89:
        case cqlParser.T__90:
        case cqlParser.T__91:
        case cqlParser.T__92:
        case cqlParser.T__93:
        case cqlParser.T__94:
        case cqlParser.T__95:
        case cqlParser.T__96:
        case cqlParser.T__97:
        case cqlParser.T__98:
        case cqlParser.T__99:
        case cqlParser.T__100:
        case cqlParser.T__101:
        case cqlParser.T__102:
        case cqlParser.T__105:
        case cqlParser.T__106:
        case cqlParser.T__107:
        case cqlParser.T__108:
        case cqlParser.T__109:
        case cqlParser.T__110:
        case cqlParser.T__111:
        case cqlParser.T__112:
        case cqlParser.T__113:
        case cqlParser.T__114:
        case cqlParser.T__118:
        case cqlParser.T__119:
        case cqlParser.T__121:
        case cqlParser.T__122:
        case cqlParser.T__123:
        case cqlParser.T__124:
        case cqlParser.T__125:
        case cqlParser.T__126:
        case cqlParser.T__127:
        case cqlParser.T__128:
        case cqlParser.T__129:
        case cqlParser.T__130:
        case cqlParser.T__131:
        case cqlParser.T__132:
        case cqlParser.T__133:
        case cqlParser.T__137:
        case cqlParser.T__138:
        case cqlParser.T__140:
        case cqlParser.T__141:
        case cqlParser.T__142:
        case cqlParser.T__143:
        case cqlParser.T__144:
        case cqlParser.T__145:
        case cqlParser.T__146:
        case cqlParser.T__147:
        case cqlParser.T__148:
        case cqlParser.T__149:
        case cqlParser.T__153:
        case cqlParser.T__154:
        case cqlParser.T__155:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1160;
            this.functionIdentifier();
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public identifier(): IdentifierContext {
    let localContext = new IdentifierContext(this.context, this.state);
    this.enterRule(localContext, 202, cqlParser.RULE_identifier);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1163;
        _la = this.tokenStream.LA(1);
        if (!(((_la - 158) & ~0x1f) === 0 && ((1 << (_la - 158)) & 97) !== 0)) {
          this.errorHandler.recoverInline(this);
        } else {
          this.errorHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public externalConstant(): ExternalConstantContext {
    let localContext = new ExternalConstantContext(this.context, this.state);
    this.enterRule(localContext, 204, cqlParser.RULE_externalConstant);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1165;
        this.match(cqlParser.T__156);
        this.state = 1168;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case cqlParser.QUOTEDIDENTIFIER:
          case cqlParser.IDENTIFIER:
          case cqlParser.DELIMITEDIDENTIFIER:
            {
              this.state = 1166;
              this.identifier();
            }
            break;
          case cqlParser.STRING:
            {
              this.state = 1167;
              this.match(cqlParser.STRING);
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public paramList(): ParamListContext {
    let localContext = new ParamListContext(this.context, this.state);
    this.enterRule(localContext, 206, cqlParser.RULE_paramList);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1170;
        this.expression(0);
        this.state = 1175;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 15) {
          {
            {
              this.state = 1171;
              this.match(cqlParser.T__14);
              this.state = 1172;
              this.expression(0);
            }
          }
          this.state = 1177;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public quantity(): QuantityContext {
    let localContext = new QuantityContext(this.context, this.state);
    this.enterRule(localContext, 208, cqlParser.RULE_quantity);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 1178;
        this.match(cqlParser.NUMBER);
        this.state = 1180;
        this.errorHandler.sync(this);
        switch (
          this.interpreter.adaptivePredict(this.tokenStream, 132, this.context)
        ) {
          case 1:
            {
              this.state = 1179;
              this.unit();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public unit(): UnitContext {
    let localContext = new UnitContext(this.context, this.state);
    this.enterRule(localContext, 210, cqlParser.RULE_unit);
    try {
      this.state = 1185;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case cqlParser.T__81:
        case cqlParser.T__82:
        case cqlParser.T__83:
        case cqlParser.T__84:
        case cqlParser.T__85:
        case cqlParser.T__86:
        case cqlParser.T__87:
        case cqlParser.T__88:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 1182;
            this.dateTimePrecision();
          }
          break;
        case cqlParser.T__93:
        case cqlParser.T__94:
        case cqlParser.T__95:
        case cqlParser.T__96:
        case cqlParser.T__97:
        case cqlParser.T__98:
        case cqlParser.T__99:
        case cqlParser.T__100:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 1183;
            this.pluralDateTimePrecision();
          }
          break;
        case cqlParser.STRING:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 1184;
            this.match(cqlParser.STRING);
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }

  public override sempred(
    localContext: antlr.ParserRuleContext | null,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 61:
        return this.simplePath_sempred(
          localContext as SimplePathContext,
          predIndex
        );
      case 63:
        return this.expression_sempred(
          localContext as ExpressionContext,
          predIndex
        );
      case 67:
        return this.expressionTerm_sempred(
          localContext as ExpressionTermContext,
          predIndex
        );
    }
    return true;
  }
  private simplePath_sempred(
    localContext: SimplePathContext | null,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this.context, 2);
      case 1:
        return this.precpred(this.context, 1);
    }
    return true;
  }
  private expression_sempred(
    localContext: ExpressionContext | null,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this.context, 8);
      case 3:
        return this.precpred(this.context, 7);
      case 4:
        return this.precpred(this.context, 6);
      case 5:
        return this.precpred(this.context, 5);
      case 6:
        return this.precpred(this.context, 4);
      case 7:
        return this.precpred(this.context, 3);
      case 8:
        return this.precpred(this.context, 2);
      case 9:
        return this.precpred(this.context, 1);
      case 10:
        return this.precpred(this.context, 16);
      case 11:
        return this.precpred(this.context, 15);
      case 12:
        return this.precpred(this.context, 11);
    }
    return true;
  }
  private expressionTerm_sempred(
    localContext: ExpressionTermContext | null,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 13:
        return this.precpred(this.context, 7);
      case 14:
        return this.precpred(this.context, 6);
      case 15:
        return this.precpred(this.context, 5);
      case 16:
        return this.precpred(this.context, 21);
      case 17:
        return this.precpred(this.context, 20);
    }
    return true;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 169, 1188, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7,
    38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2,
    44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7,
    49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2,
    55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7,
    60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2,
    66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7,
    71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2,
    77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7,
    82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2,
    88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7,
    93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2,
    99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103,
    2, 104, 7, 104, 2, 105, 7, 105, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3,
    0, 220, 8, 0, 1, 1, 3, 1, 223, 8, 1, 1, 1, 5, 1, 226, 8, 1, 10, 1, 12, 1,
    229, 9, 1, 1, 1, 5, 1, 232, 8, 1, 10, 1, 12, 1, 235, 9, 1, 1, 1, 1, 1, 1, 2,
    1, 2, 1, 2, 1, 2, 3, 2, 243, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 249, 8, 3,
    1, 3, 1, 3, 3, 3, 253, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 259, 8, 4, 1, 4,
    1, 4, 3, 4, 263, 8, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 3, 7, 270, 8, 7, 1, 7,
    1, 7, 1, 7, 3, 7, 275, 8, 7, 1, 7, 1, 7, 3, 7, 279, 8, 7, 1, 8, 3, 8, 282,
    8, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 290, 8, 8, 1, 9, 3, 9, 293,
    8, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 301, 8, 9, 1, 9, 3, 9, 304,
    8, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 311, 8, 10, 10, 10, 12, 10,
    314, 9, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 3, 11, 321, 8, 11, 1, 11, 1,
    11, 1, 12, 1, 12, 1, 13, 3, 13, 328, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1,
    13, 1, 13, 1, 13, 3, 13, 337, 8, 13, 1, 14, 3, 14, 340, 8, 14, 1, 14, 1, 14,
    1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 349, 8, 14, 10, 14, 12, 14, 352,
    9, 14, 1, 14, 1, 14, 3, 14, 356, 8, 14, 1, 15, 1, 15, 1, 15, 3, 15, 361, 8,
    15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1,
    20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 378, 8, 20, 1, 21, 1, 21, 1, 21, 5,
    21, 383, 8, 21, 10, 21, 12, 21, 386, 9, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1,
    23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1,
    25, 1, 25, 1, 25, 1, 25, 5, 25, 407, 8, 25, 10, 25, 12, 25, 410, 9, 25, 1,
    25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27,
    422, 8, 27, 10, 27, 12, 27, 425, 9, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28,
    3, 28, 432, 8, 28, 1, 29, 1, 29, 3, 29, 436, 8, 29, 1, 29, 1, 29, 1, 29, 1,
    29, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 446, 8, 30, 1, 30, 1, 30, 1, 31, 1,
    31, 1, 32, 1, 32, 3, 32, 454, 8, 32, 1, 32, 3, 32, 457, 8, 32, 1, 32, 1, 32,
    1, 32, 1, 32, 1, 32, 1, 32, 5, 32, 465, 8, 32, 10, 32, 12, 32, 468, 9, 32,
    3, 32, 470, 8, 32, 1, 32, 1, 32, 1, 32, 3, 32, 475, 8, 32, 1, 32, 1, 32, 1,
    32, 3, 32, 480, 8, 32, 1, 33, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 1,
    35, 1, 35, 1, 35, 1, 35, 3, 35, 493, 8, 35, 1, 36, 1, 36, 1, 36, 1, 37, 1,
    37, 1, 38, 1, 38, 3, 38, 502, 8, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1,
    40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 518, 8,
    41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 525, 8, 41, 1, 41, 3, 41, 528,
    8, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 43, 1, 43, 1, 44, 1, 44, 1, 45, 1, 45,
    3, 45, 540, 8, 45, 1, 46, 1, 46, 1, 47, 1, 47, 3, 47, 546, 8, 47, 1, 47, 5,
    47, 549, 8, 47, 10, 47, 12, 47, 552, 9, 47, 1, 47, 3, 47, 555, 8, 47, 1, 47,
    1, 47, 3, 47, 559, 8, 47, 1, 47, 3, 47, 562, 8, 47, 1, 48, 3, 48, 565, 8,
    48, 1, 48, 1, 48, 1, 48, 5, 48, 570, 8, 48, 10, 48, 12, 48, 573, 9, 48, 1,
    49, 1, 49, 1, 49, 1, 49, 5, 49, 579, 8, 49, 10, 49, 12, 49, 582, 9, 49, 1,
    50, 1, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52, 3, 52, 593, 8,
    52, 1, 52, 1, 52, 1, 53, 1, 53, 3, 53, 599, 8, 53, 1, 53, 1, 53, 3, 53, 603,
    8, 53, 1, 53, 1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54,
    3, 54, 615, 8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 5, 55, 623, 8,
    55, 10, 55, 12, 55, 626, 9, 55, 3, 55, 628, 8, 55, 1, 56, 1, 56, 1, 57, 1,
    57, 3, 57, 634, 8, 57, 1, 58, 1, 58, 1, 58, 5, 58, 639, 8, 58, 10, 58, 12,
    58, 642, 9, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 5, 59, 649, 8, 59, 10,
    59, 12, 59, 652, 9, 59, 1, 59, 1, 59, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1,
    61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 5, 61, 669, 8, 61, 10,
    61, 12, 61, 672, 9, 61, 1, 62, 1, 62, 3, 62, 676, 8, 62, 1, 63, 1, 63, 1,
    63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1,
    63, 1, 63, 3, 63, 693, 8, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1,
    63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63, 709, 8, 63, 1,
    63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1,
    63, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63, 727, 8, 63, 1, 63, 1, 63, 1, 63, 1,
    63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63,
    742, 8, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63, 750, 8, 63, 1,
    63, 1, 63, 1, 63, 1, 63, 1, 63, 5, 63, 757, 8, 63, 10, 63, 12, 63, 760, 9,
    63, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 3, 65, 769, 8, 65, 1,
    66, 1, 66, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 3, 67, 780, 8,
    67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1,
    67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1,
    67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1,
    67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1,
    67, 1, 67, 1, 67, 1, 67, 3, 67, 829, 8, 67, 1, 67, 4, 67, 832, 8, 67, 11,
    67, 12, 67, 833, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1,
    67, 1, 67, 1, 67, 3, 67, 847, 8, 67, 3, 67, 849, 8, 67, 3, 67, 851, 8, 67,
    1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67,
    1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 5, 67, 870, 8, 67, 10, 67, 12, 67,
    873, 9, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 69, 1, 70,
    1, 70, 1, 71, 1, 71, 1, 72, 1, 72, 1, 73, 1, 73, 3, 73, 891, 8, 73, 1, 73,
    1, 73, 1, 73, 3, 73, 896, 8, 73, 1, 74, 3, 74, 899, 8, 74, 1, 74, 1, 74, 1,
    74, 3, 74, 904, 8, 74, 3, 74, 906, 8, 74, 1, 75, 3, 75, 909, 8, 75, 1, 75,
    1, 75, 3, 75, 913, 8, 75, 1, 75, 1, 75, 3, 75, 917, 8, 75, 1, 75, 3, 75,
    920, 8, 75, 1, 75, 3, 75, 923, 8, 75, 1, 75, 1, 75, 3, 75, 927, 8, 75, 1,
    75, 3, 75, 930, 8, 75, 1, 75, 3, 75, 933, 8, 75, 1, 75, 3, 75, 936, 8, 75,
    1, 75, 1, 75, 3, 75, 940, 8, 75, 1, 75, 3, 75, 943, 8, 75, 1, 75, 3, 75,
    946, 8, 75, 1, 75, 1, 75, 3, 75, 950, 8, 75, 1, 75, 3, 75, 953, 8, 75, 1,
    75, 3, 75, 956, 8, 75, 1, 75, 3, 75, 959, 8, 75, 1, 75, 1, 75, 1, 75, 1, 75,
    3, 75, 965, 8, 75, 1, 75, 1, 75, 3, 75, 969, 8, 75, 1, 75, 3, 75, 972, 8,
    75, 1, 75, 1, 75, 3, 75, 976, 8, 75, 1, 75, 3, 75, 979, 8, 75, 1, 75, 1, 75,
    3, 75, 983, 8, 75, 1, 75, 1, 75, 3, 75, 987, 8, 75, 3, 75, 989, 8, 75, 1,
    76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1,
    76, 1, 76, 3, 76, 1004, 8, 76, 1, 77, 1, 77, 3, 77, 1008, 8, 77, 1, 78, 1,
    78, 1, 78, 3, 78, 1013, 8, 78, 1, 78, 1, 78, 1, 79, 1, 79, 1, 79, 1, 79, 1,
    79, 3, 79, 1022, 8, 79, 1, 80, 1, 80, 1, 80, 3, 80, 1027, 8, 80, 1, 80, 1,
    80, 1, 81, 1, 81, 1, 81, 1, 81, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1,
    82, 1, 82, 1, 82, 1, 82, 3, 82, 1045, 8, 82, 1, 83, 1, 83, 1, 83, 1, 83, 1,
    83, 1, 83, 1, 83, 1, 84, 3, 84, 1055, 8, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1,
    84, 5, 84, 1062, 8, 84, 10, 84, 12, 84, 1065, 9, 84, 3, 84, 1067, 8, 84, 1,
    84, 1, 84, 1, 85, 1, 85, 1, 85, 1, 85, 1, 86, 1, 86, 1, 86, 1, 86, 1, 86, 1,
    86, 5, 86, 1081, 8, 86, 10, 86, 12, 86, 1084, 9, 86, 3, 86, 1086, 8, 86, 1,
    86, 1, 86, 1, 87, 1, 87, 1, 87, 1, 87, 1, 88, 1, 88, 1, 88, 1, 88, 1, 88, 3,
    88, 1099, 8, 88, 3, 88, 1101, 8, 88, 1, 88, 1, 88, 1, 88, 1, 88, 5, 88,
    1107, 8, 88, 10, 88, 12, 88, 1110, 9, 88, 3, 88, 1112, 8, 88, 1, 88, 1, 88,
    1, 89, 1, 89, 1, 89, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 3, 90, 1124, 8, 90,
    1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 5, 91, 1131, 8, 91, 10, 91, 12, 91, 1134,
    9, 91, 1, 91, 1, 91, 3, 91, 1138, 8, 91, 1, 92, 1, 92, 1, 93, 1, 93, 1, 94,
    1, 94, 1, 95, 1, 95, 1, 96, 1, 96, 1, 97, 1, 97, 1, 98, 1, 98, 3, 98, 1154,
    8, 98, 1, 99, 1, 99, 3, 99, 1158, 8, 99, 1, 100, 1, 100, 3, 100, 1162, 8,
    100, 1, 101, 1, 101, 1, 102, 1, 102, 1, 102, 3, 102, 1169, 8, 102, 1, 103,
    1, 103, 1, 103, 5, 103, 1174, 8, 103, 10, 103, 12, 103, 1177, 9, 103, 1,
    104, 1, 104, 3, 104, 1181, 8, 104, 1, 105, 1, 105, 1, 105, 3, 105, 1186, 8,
    105, 1, 105, 0, 3, 122, 126, 134, 106, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
    20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56,
    58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
    96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124,
    126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154,
    156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184,
    186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 0, 36, 1,
    0, 6, 7, 1, 0, 41, 43, 1, 0, 47, 48, 1, 0, 53, 56, 1, 0, 70, 73, 2, 0, 22,
    23, 74, 75, 2, 0, 42, 43, 76, 77, 2, 0, 41, 41, 78, 78, 1, 0, 79, 80, 1, 0,
    59, 61, 2, 0, 57, 57, 62, 62, 1, 0, 82, 89, 1, 0, 94, 101, 1, 0, 104, 105,
    1, 0, 106, 107, 1, 0, 114, 115, 2, 0, 48, 48, 126, 126, 1, 0, 127, 128, 1,
    0, 117, 120, 2, 0, 104, 105, 121, 121, 1, 0, 131, 132, 1, 0, 133, 134, 1, 0,
    135, 136, 1, 0, 138, 139, 1, 0, 141, 143, 1, 0, 146, 147, 1, 0, 60, 61, 2,
    0, 31, 31, 38, 38, 2, 0, 32, 32, 40, 40, 15, 0, 1, 10, 12, 13, 18, 21, 24,
    25, 27, 30, 35, 37, 41, 41, 44, 69, 71, 73, 78, 103, 106, 115, 119, 120,
    122, 134, 137, 150, 154, 156, 19, 0, 19, 19, 21, 21, 24, 25, 35, 37, 41, 41,
    44, 44, 46, 49, 51, 51, 57, 69, 79, 79, 82, 89, 94, 103, 108, 108, 112, 115,
    122, 130, 137, 140, 143, 144, 146, 148, 155, 156, 20, 0, 1, 10, 12, 13, 18,
    18, 20, 20, 27, 30, 45, 45, 50, 50, 52, 56, 71, 73, 78, 78, 80, 81, 90, 93,
    106, 107, 109, 111, 119, 120, 131, 134, 141, 142, 145, 145, 149, 150, 154,
    154, 11, 0, 2, 2, 18, 18, 20, 20, 45, 45, 47, 48, 58, 58, 64, 64, 78, 78,
    90, 93, 106, 107, 154, 156, 16, 0, 1, 10, 12, 13, 18, 21, 24, 25, 27, 30,
    35, 37, 41, 41, 44, 69, 71, 73, 78, 103, 106, 115, 119, 120, 122, 134, 138,
    139, 141, 150, 154, 156, 2, 0, 90, 91, 155, 156, 2, 0, 158, 158, 163, 164,
    1290, 0, 219, 1, 0, 0, 0, 2, 222, 1, 0, 0, 0, 4, 238, 1, 0, 0, 0, 6, 244, 1,
    0, 0, 0, 8, 254, 1, 0, 0, 0, 10, 264, 1, 0, 0, 0, 12, 266, 1, 0, 0, 0, 14,
    269, 1, 0, 0, 0, 16, 281, 1, 0, 0, 0, 18, 292, 1, 0, 0, 0, 20, 305, 1, 0, 0,
    0, 22, 320, 1, 0, 0, 0, 24, 324, 1, 0, 0, 0, 26, 327, 1, 0, 0, 0, 28, 339,
    1, 0, 0, 0, 30, 360, 1, 0, 0, 0, 32, 364, 1, 0, 0, 0, 34, 366, 1, 0, 0, 0,
    36, 368, 1, 0, 0, 0, 38, 370, 1, 0, 0, 0, 40, 377, 1, 0, 0, 0, 42, 384, 1,
    0, 0, 0, 44, 389, 1, 0, 0, 0, 46, 391, 1, 0, 0, 0, 48, 396, 1, 0, 0, 0, 50,
    401, 1, 0, 0, 0, 52, 413, 1, 0, 0, 0, 54, 416, 1, 0, 0, 0, 56, 431, 1, 0, 0,
    0, 58, 433, 1, 0, 0, 0, 60, 441, 1, 0, 0, 0, 62, 449, 1, 0, 0, 0, 64, 451,
    1, 0, 0, 0, 66, 481, 1, 0, 0, 0, 68, 484, 1, 0, 0, 0, 70, 492, 1, 0, 0, 0,
    72, 494, 1, 0, 0, 0, 74, 497, 1, 0, 0, 0, 76, 501, 1, 0, 0, 0, 78, 503, 1,
    0, 0, 0, 80, 508, 1, 0, 0, 0, 82, 513, 1, 0, 0, 0, 84, 531, 1, 0, 0, 0, 86,
    533, 1, 0, 0, 0, 88, 535, 1, 0, 0, 0, 90, 539, 1, 0, 0, 0, 92, 541, 1, 0, 0,
    0, 94, 543, 1, 0, 0, 0, 96, 564, 1, 0, 0, 0, 98, 574, 1, 0, 0, 0, 100, 583,
    1, 0, 0, 0, 102, 587, 1, 0, 0, 0, 104, 590, 1, 0, 0, 0, 106, 596, 1, 0, 0,
    0, 108, 607, 1, 0, 0, 0, 110, 616, 1, 0, 0, 0, 112, 629, 1, 0, 0, 0, 114,
    631, 1, 0, 0, 0, 116, 640, 1, 0, 0, 0, 118, 650, 1, 0, 0, 0, 120, 655, 1, 0,
    0, 0, 122, 657, 1, 0, 0, 0, 124, 675, 1, 0, 0, 0, 126, 708, 1, 0, 0, 0, 128,
    761, 1, 0, 0, 0, 130, 768, 1, 0, 0, 0, 132, 770, 1, 0, 0, 0, 134, 850, 1, 0,
    0, 0, 136, 874, 1, 0, 0, 0, 138, 879, 1, 0, 0, 0, 140, 882, 1, 0, 0, 0, 142,
    884, 1, 0, 0, 0, 144, 886, 1, 0, 0, 0, 146, 895, 1, 0, 0, 0, 148, 905, 1, 0,
    0, 0, 150, 988, 1, 0, 0, 0, 152, 1003, 1, 0, 0, 0, 154, 1007, 1, 0, 0, 0,
    156, 1009, 1, 0, 0, 0, 158, 1021, 1, 0, 0, 0, 160, 1023, 1, 0, 0, 0, 162,
    1030, 1, 0, 0, 0, 164, 1044, 1, 0, 0, 0, 166, 1046, 1, 0, 0, 0, 168, 1054,
    1, 0, 0, 0, 170, 1070, 1, 0, 0, 0, 172, 1074, 1, 0, 0, 0, 174, 1089, 1, 0,
    0, 0, 176, 1100, 1, 0, 0, 0, 178, 1115, 1, 0, 0, 0, 180, 1118, 1, 0, 0, 0,
    182, 1125, 1, 0, 0, 0, 184, 1139, 1, 0, 0, 0, 186, 1141, 1, 0, 0, 0, 188,
    1143, 1, 0, 0, 0, 190, 1145, 1, 0, 0, 0, 192, 1147, 1, 0, 0, 0, 194, 1149,
    1, 0, 0, 0, 196, 1153, 1, 0, 0, 0, 198, 1157, 1, 0, 0, 0, 200, 1161, 1, 0,
    0, 0, 202, 1163, 1, 0, 0, 0, 204, 1165, 1, 0, 0, 0, 206, 1170, 1, 0, 0, 0,
    208, 1178, 1, 0, 0, 0, 210, 1185, 1, 0, 0, 0, 212, 220, 3, 6, 3, 0, 213,
    220, 3, 8, 4, 0, 214, 220, 3, 16, 8, 0, 215, 220, 3, 18, 9, 0, 216, 220, 3,
    26, 13, 0, 217, 220, 3, 28, 14, 0, 218, 220, 3, 14, 7, 0, 219, 212, 1, 0, 0,
    0, 219, 213, 1, 0, 0, 0, 219, 214, 1, 0, 0, 0, 219, 215, 1, 0, 0, 0, 219,
    216, 1, 0, 0, 0, 219, 217, 1, 0, 0, 0, 219, 218, 1, 0, 0, 0, 220, 1, 1, 0,
    0, 0, 221, 223, 3, 4, 2, 0, 222, 221, 1, 0, 0, 0, 222, 223, 1, 0, 0, 0, 223,
    227, 1, 0, 0, 0, 224, 226, 3, 0, 0, 0, 225, 224, 1, 0, 0, 0, 226, 229, 1, 0,
    0, 0, 227, 225, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 233, 1, 0, 0, 0, 229,
    227, 1, 0, 0, 0, 230, 232, 3, 56, 28, 0, 231, 230, 1, 0, 0, 0, 232, 235, 1,
    0, 0, 0, 233, 231, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 236, 1, 0, 0, 0,
    235, 233, 1, 0, 0, 0, 236, 237, 5, 0, 0, 1, 237, 3, 1, 0, 0, 0, 238, 239, 5,
    1, 0, 0, 239, 242, 3, 116, 58, 0, 240, 241, 5, 2, 0, 0, 241, 243, 3, 36, 18,
    0, 242, 240, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 5, 1, 0, 0, 0, 244, 245,
    5, 3, 0, 0, 245, 248, 3, 116, 58, 0, 246, 247, 5, 2, 0, 0, 247, 249, 3, 36,
    18, 0, 248, 246, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 252, 1, 0, 0, 0,
    250, 251, 5, 4, 0, 0, 251, 253, 3, 10, 5, 0, 252, 250, 1, 0, 0, 0, 252, 253,
    1, 0, 0, 0, 253, 7, 1, 0, 0, 0, 254, 255, 5, 5, 0, 0, 255, 258, 3, 116, 58,
    0, 256, 257, 5, 2, 0, 0, 257, 259, 3, 36, 18, 0, 258, 256, 1, 0, 0, 0, 258,
    259, 1, 0, 0, 0, 259, 262, 1, 0, 0, 0, 260, 261, 5, 4, 0, 0, 261, 263, 3,
    10, 5, 0, 262, 260, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 9, 1, 0, 0, 0,
    264, 265, 3, 202, 101, 0, 265, 11, 1, 0, 0, 0, 266, 267, 7, 0, 0, 0, 267,
    13, 1, 0, 0, 0, 268, 270, 3, 12, 6, 0, 269, 268, 1, 0, 0, 0, 269, 270, 1, 0,
    0, 0, 270, 271, 1, 0, 0, 0, 271, 272, 5, 8, 0, 0, 272, 274, 3, 202, 101, 0,
    273, 275, 3, 40, 20, 0, 274, 273, 1, 0, 0, 0, 274, 275, 1, 0, 0, 0, 275,
    278, 1, 0, 0, 0, 276, 277, 5, 9, 0, 0, 277, 279, 3, 126, 63, 0, 278, 276, 1,
    0, 0, 0, 278, 279, 1, 0, 0, 0, 279, 15, 1, 0, 0, 0, 280, 282, 3, 12, 6, 0,
    281, 280, 1, 0, 0, 0, 281, 282, 1, 0, 0, 0, 282, 283, 1, 0, 0, 0, 283, 284,
    5, 10, 0, 0, 284, 285, 3, 202, 101, 0, 285, 286, 5, 11, 0, 0, 286, 289, 3,
    32, 16, 0, 287, 288, 5, 2, 0, 0, 288, 290, 3, 36, 18, 0, 289, 287, 1, 0, 0,
    0, 289, 290, 1, 0, 0, 0, 290, 17, 1, 0, 0, 0, 291, 293, 3, 12, 6, 0, 292,
    291, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 295, 5,
    12, 0, 0, 295, 296, 3, 202, 101, 0, 296, 297, 5, 11, 0, 0, 297, 300, 3, 34,
    17, 0, 298, 299, 5, 2, 0, 0, 299, 301, 3, 36, 18, 0, 300, 298, 1, 0, 0, 0,
    300, 301, 1, 0, 0, 0, 301, 303, 1, 0, 0, 0, 302, 304, 3, 20, 10, 0, 303,
    302, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0, 304, 19, 1, 0, 0, 0, 305, 306, 5, 13,
    0, 0, 306, 307, 5, 14, 0, 0, 307, 312, 3, 22, 11, 0, 308, 309, 5, 15, 0, 0,
    309, 311, 3, 22, 11, 0, 310, 308, 1, 0, 0, 0, 311, 314, 1, 0, 0, 0, 312,
    310, 1, 0, 0, 0, 312, 313, 1, 0, 0, 0, 313, 315, 1, 0, 0, 0, 314, 312, 1, 0,
    0, 0, 315, 316, 5, 16, 0, 0, 316, 21, 1, 0, 0, 0, 317, 318, 3, 24, 12, 0,
    318, 319, 5, 17, 0, 0, 319, 321, 1, 0, 0, 0, 320, 317, 1, 0, 0, 0, 320, 321,
    1, 0, 0, 0, 321, 322, 1, 0, 0, 0, 322, 323, 3, 202, 101, 0, 323, 23, 1, 0,
    0, 0, 324, 325, 3, 202, 101, 0, 325, 25, 1, 0, 0, 0, 326, 328, 3, 12, 6, 0,
    327, 326, 1, 0, 0, 0, 327, 328, 1, 0, 0, 0, 328, 329, 1, 0, 0, 0, 329, 330,
    5, 18, 0, 0, 330, 331, 3, 202, 101, 0, 331, 332, 5, 11, 0, 0, 332, 333, 3,
    38, 19, 0, 333, 334, 5, 19, 0, 0, 334, 336, 3, 22, 11, 0, 335, 337, 3, 178,
    89, 0, 336, 335, 1, 0, 0, 0, 336, 337, 1, 0, 0, 0, 337, 27, 1, 0, 0, 0, 338,
    340, 3, 12, 6, 0, 339, 338, 1, 0, 0, 0, 339, 340, 1, 0, 0, 0, 340, 341, 1,
    0, 0, 0, 341, 342, 5, 20, 0, 0, 342, 343, 3, 202, 101, 0, 343, 344, 5, 11,
    0, 0, 344, 345, 5, 14, 0, 0, 345, 350, 3, 30, 15, 0, 346, 347, 5, 15, 0, 0,
    347, 349, 3, 30, 15, 0, 348, 346, 1, 0, 0, 0, 349, 352, 1, 0, 0, 0, 350,
    348, 1, 0, 0, 0, 350, 351, 1, 0, 0, 0, 351, 353, 1, 0, 0, 0, 352, 350, 1, 0,
    0, 0, 353, 355, 5, 16, 0, 0, 354, 356, 3, 178, 89, 0, 355, 354, 1, 0, 0, 0,
    355, 356, 1, 0, 0, 0, 356, 29, 1, 0, 0, 0, 357, 358, 3, 24, 12, 0, 358, 359,
    5, 17, 0, 0, 359, 361, 1, 0, 0, 0, 360, 357, 1, 0, 0, 0, 360, 361, 1, 0, 0,
    0, 361, 362, 1, 0, 0, 0, 362, 363, 3, 202, 101, 0, 363, 31, 1, 0, 0, 0, 364,
    365, 5, 165, 0, 0, 365, 33, 1, 0, 0, 0, 366, 367, 5, 165, 0, 0, 367, 35, 1,
    0, 0, 0, 368, 369, 5, 165, 0, 0, 369, 37, 1, 0, 0, 0, 370, 371, 5, 165, 0,
    0, 371, 39, 1, 0, 0, 0, 372, 378, 3, 42, 21, 0, 373, 378, 3, 46, 23, 0, 374,
    378, 3, 48, 24, 0, 375, 378, 3, 50, 25, 0, 376, 378, 3, 54, 27, 0, 377, 372,
    1, 0, 0, 0, 377, 373, 1, 0, 0, 0, 377, 374, 1, 0, 0, 0, 377, 375, 1, 0, 0,
    0, 377, 376, 1, 0, 0, 0, 378, 41, 1, 0, 0, 0, 379, 380, 3, 92, 46, 0, 380,
    381, 5, 17, 0, 0, 381, 383, 1, 0, 0, 0, 382, 379, 1, 0, 0, 0, 383, 386, 1,
    0, 0, 0, 384, 382, 1, 0, 0, 0, 384, 385, 1, 0, 0, 0, 385, 387, 1, 0, 0, 0,
    386, 384, 1, 0, 0, 0, 387, 388, 3, 198, 99, 0, 388, 43, 1, 0, 0, 0, 389,
    390, 3, 202, 101, 0, 390, 45, 1, 0, 0, 0, 391, 392, 5, 21, 0, 0, 392, 393,
    5, 22, 0, 0, 393, 394, 3, 40, 20, 0, 394, 395, 5, 23, 0, 0, 395, 47, 1, 0,
    0, 0, 396, 397, 5, 24, 0, 0, 397, 398, 5, 22, 0, 0, 398, 399, 3, 40, 20, 0,
    399, 400, 5, 23, 0, 0, 400, 49, 1, 0, 0, 0, 401, 402, 5, 25, 0, 0, 402, 403,
    5, 14, 0, 0, 403, 408, 3, 52, 26, 0, 404, 405, 5, 15, 0, 0, 405, 407, 3, 52,
    26, 0, 406, 404, 1, 0, 0, 0, 407, 410, 1, 0, 0, 0, 408, 406, 1, 0, 0, 0,
    408, 409, 1, 0, 0, 0, 409, 411, 1, 0, 0, 0, 410, 408, 1, 0, 0, 0, 411, 412,
    5, 16, 0, 0, 412, 51, 1, 0, 0, 0, 413, 414, 3, 196, 98, 0, 414, 415, 3, 40,
    20, 0, 415, 53, 1, 0, 0, 0, 416, 417, 5, 26, 0, 0, 417, 418, 5, 22, 0, 0,
    418, 423, 3, 40, 20, 0, 419, 420, 5, 15, 0, 0, 420, 422, 3, 40, 20, 0, 421,
    419, 1, 0, 0, 0, 422, 425, 1, 0, 0, 0, 423, 421, 1, 0, 0, 0, 423, 424, 1, 0,
    0, 0, 424, 426, 1, 0, 0, 0, 425, 423, 1, 0, 0, 0, 426, 427, 5, 23, 0, 0,
    427, 55, 1, 0, 0, 0, 428, 432, 3, 58, 29, 0, 429, 432, 3, 60, 30, 0, 430,
    432, 3, 64, 32, 0, 431, 428, 1, 0, 0, 0, 431, 429, 1, 0, 0, 0, 431, 430, 1,
    0, 0, 0, 432, 57, 1, 0, 0, 0, 433, 435, 5, 27, 0, 0, 434, 436, 3, 12, 6, 0,
    435, 434, 1, 0, 0, 0, 435, 436, 1, 0, 0, 0, 436, 437, 1, 0, 0, 0, 437, 438,
    3, 202, 101, 0, 438, 439, 5, 11, 0, 0, 439, 440, 3, 126, 63, 0, 440, 59, 1,
    0, 0, 0, 441, 445, 5, 28, 0, 0, 442, 443, 3, 44, 22, 0, 443, 444, 5, 17, 0,
    0, 444, 446, 1, 0, 0, 0, 445, 442, 1, 0, 0, 0, 445, 446, 1, 0, 0, 0, 446,
    447, 1, 0, 0, 0, 447, 448, 3, 202, 101, 0, 448, 61, 1, 0, 0, 0, 449, 450, 5,
    29, 0, 0, 450, 63, 1, 0, 0, 0, 451, 453, 5, 27, 0, 0, 452, 454, 3, 12, 6, 0,
    453, 452, 1, 0, 0, 0, 453, 454, 1, 0, 0, 0, 454, 456, 1, 0, 0, 0, 455, 457,
    3, 62, 31, 0, 456, 455, 1, 0, 0, 0, 456, 457, 1, 0, 0, 0, 457, 458, 1, 0, 0,
    0, 458, 459, 5, 30, 0, 0, 459, 460, 3, 200, 100, 0, 460, 469, 5, 31, 0, 0,
    461, 466, 3, 66, 33, 0, 462, 463, 5, 15, 0, 0, 463, 465, 3, 66, 33, 0, 464,
    462, 1, 0, 0, 0, 465, 468, 1, 0, 0, 0, 466, 464, 1, 0, 0, 0, 466, 467, 1, 0,
    0, 0, 467, 470, 1, 0, 0, 0, 468, 466, 1, 0, 0, 0, 469, 461, 1, 0, 0, 0, 469,
    470, 1, 0, 0, 0, 470, 471, 1, 0, 0, 0, 471, 474, 5, 32, 0, 0, 472, 473, 5,
    33, 0, 0, 473, 475, 3, 40, 20, 0, 474, 472, 1, 0, 0, 0, 474, 475, 1, 0, 0,
    0, 475, 476, 1, 0, 0, 0, 476, 479, 5, 11, 0, 0, 477, 480, 3, 68, 34, 0, 478,
    480, 5, 34, 0, 0, 479, 477, 1, 0, 0, 0, 479, 478, 1, 0, 0, 0, 480, 65, 1, 0,
    0, 0, 481, 482, 3, 196, 98, 0, 482, 483, 3, 40, 20, 0, 483, 67, 1, 0, 0, 0,
    484, 485, 3, 126, 63, 0, 485, 69, 1, 0, 0, 0, 486, 493, 3, 82, 41, 0, 487,
    493, 3, 118, 59, 0, 488, 489, 5, 31, 0, 0, 489, 490, 3, 126, 63, 0, 490,
    491, 5, 32, 0, 0, 491, 493, 1, 0, 0, 0, 492, 486, 1, 0, 0, 0, 492, 487, 1,
    0, 0, 0, 492, 488, 1, 0, 0, 0, 493, 71, 1, 0, 0, 0, 494, 495, 3, 70, 35, 0,
    495, 496, 3, 74, 37, 0, 496, 73, 1, 0, 0, 0, 497, 498, 3, 202, 101, 0, 498,
    75, 1, 0, 0, 0, 499, 502, 3, 78, 39, 0, 500, 502, 3, 80, 40, 0, 501, 499, 1,
    0, 0, 0, 501, 500, 1, 0, 0, 0, 502, 77, 1, 0, 0, 0, 503, 504, 5, 35, 0, 0,
    504, 505, 3, 72, 36, 0, 505, 506, 5, 36, 0, 0, 506, 507, 3, 126, 63, 0, 507,
    79, 1, 0, 0, 0, 508, 509, 5, 37, 0, 0, 509, 510, 3, 72, 36, 0, 510, 511, 5,
    36, 0, 0, 511, 512, 3, 126, 63, 0, 512, 81, 1, 0, 0, 0, 513, 517, 5, 38, 0,
    0, 514, 515, 3, 84, 42, 0, 515, 516, 5, 39, 0, 0, 516, 518, 1, 0, 0, 0, 517,
    514, 1, 0, 0, 0, 517, 518, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0, 519, 527, 3,
    42, 21, 0, 520, 524, 5, 11, 0, 0, 521, 522, 3, 86, 43, 0, 522, 523, 3, 88,
    44, 0, 523, 525, 1, 0, 0, 0, 524, 521, 1, 0, 0, 0, 524, 525, 1, 0, 0, 0,
    525, 526, 1, 0, 0, 0, 526, 528, 3, 90, 45, 0, 527, 520, 1, 0, 0, 0, 527,
    528, 1, 0, 0, 0, 528, 529, 1, 0, 0, 0, 529, 530, 5, 40, 0, 0, 530, 83, 1, 0,
    0, 0, 531, 532, 3, 118, 59, 0, 532, 85, 1, 0, 0, 0, 533, 534, 3, 122, 61, 0,
    534, 87, 1, 0, 0, 0, 535, 536, 7, 1, 0, 0, 536, 89, 1, 0, 0, 0, 537, 540, 3,
    118, 59, 0, 538, 540, 3, 126, 63, 0, 539, 537, 1, 0, 0, 0, 539, 538, 1, 0,
    0, 0, 540, 91, 1, 0, 0, 0, 541, 542, 3, 202, 101, 0, 542, 93, 1, 0, 0, 0,
    543, 545, 3, 96, 48, 0, 544, 546, 3, 98, 49, 0, 545, 544, 1, 0, 0, 0, 545,
    546, 1, 0, 0, 0, 546, 550, 1, 0, 0, 0, 547, 549, 3, 76, 38, 0, 548, 547, 1,
    0, 0, 0, 549, 552, 1, 0, 0, 0, 550, 548, 1, 0, 0, 0, 550, 551, 1, 0, 0, 0,
    551, 554, 1, 0, 0, 0, 552, 550, 1, 0, 0, 0, 553, 555, 3, 102, 51, 0, 554,
    553, 1, 0, 0, 0, 554, 555, 1, 0, 0, 0, 555, 558, 1, 0, 0, 0, 556, 559, 3,
    106, 53, 0, 557, 559, 3, 104, 52, 0, 558, 556, 1, 0, 0, 0, 558, 557, 1, 0,
    0, 0, 558, 559, 1, 0, 0, 0, 559, 561, 1, 0, 0, 0, 560, 562, 3, 110, 55, 0,
    561, 560, 1, 0, 0, 0, 561, 562, 1, 0, 0, 0, 562, 95, 1, 0, 0, 0, 563, 565,
    5, 19, 0, 0, 564, 563, 1, 0, 0, 0, 564, 565, 1, 0, 0, 0, 565, 566, 1, 0, 0,
    0, 566, 571, 3, 72, 36, 0, 567, 568, 5, 15, 0, 0, 568, 570, 3, 72, 36, 0,
    569, 567, 1, 0, 0, 0, 570, 573, 1, 0, 0, 0, 571, 569, 1, 0, 0, 0, 571, 572,
    1, 0, 0, 0, 572, 97, 1, 0, 0, 0, 573, 571, 1, 0, 0, 0, 574, 575, 5, 44, 0,
    0, 575, 580, 3, 100, 50, 0, 576, 577, 5, 15, 0, 0, 577, 579, 3, 100, 50, 0,
    578, 576, 1, 0, 0, 0, 579, 582, 1, 0, 0, 0, 580, 578, 1, 0, 0, 0, 580, 581,
    1, 0, 0, 0, 581, 99, 1, 0, 0, 0, 582, 580, 1, 0, 0, 0, 583, 584, 3, 202,
    101, 0, 584, 585, 5, 11, 0, 0, 585, 586, 3, 126, 63, 0, 586, 101, 1, 0, 0,
    0, 587, 588, 5, 45, 0, 0, 588, 589, 3, 126, 63, 0, 589, 103, 1, 0, 0, 0,
    590, 592, 5, 46, 0, 0, 591, 593, 7, 2, 0, 0, 592, 591, 1, 0, 0, 0, 592, 593,
    1, 0, 0, 0, 593, 594, 1, 0, 0, 0, 594, 595, 3, 126, 63, 0, 595, 105, 1, 0,
    0, 0, 596, 598, 5, 49, 0, 0, 597, 599, 7, 2, 0, 0, 598, 597, 1, 0, 0, 0,
    598, 599, 1, 0, 0, 0, 599, 600, 1, 0, 0, 0, 600, 602, 3, 202, 101, 0, 601,
    603, 3, 108, 54, 0, 602, 601, 1, 0, 0, 0, 602, 603, 1, 0, 0, 0, 603, 604, 1,
    0, 0, 0, 604, 605, 5, 11, 0, 0, 605, 606, 3, 126, 63, 0, 606, 107, 1, 0, 0,
    0, 607, 614, 5, 50, 0, 0, 608, 615, 3, 124, 62, 0, 609, 615, 3, 208, 104, 0,
    610, 611, 5, 31, 0, 0, 611, 612, 3, 126, 63, 0, 612, 613, 5, 32, 0, 0, 613,
    615, 1, 0, 0, 0, 614, 608, 1, 0, 0, 0, 614, 609, 1, 0, 0, 0, 614, 610, 1, 0,
    0, 0, 615, 109, 1, 0, 0, 0, 616, 627, 5, 51, 0, 0, 617, 628, 3, 112, 56, 0,
    618, 619, 5, 52, 0, 0, 619, 624, 3, 114, 57, 0, 620, 621, 5, 15, 0, 0, 621,
    623, 3, 114, 57, 0, 622, 620, 1, 0, 0, 0, 623, 626, 1, 0, 0, 0, 624, 622, 1,
    0, 0, 0, 624, 625, 1, 0, 0, 0, 625, 628, 1, 0, 0, 0, 626, 624, 1, 0, 0, 0,
    627, 617, 1, 0, 0, 0, 627, 618, 1, 0, 0, 0, 628, 111, 1, 0, 0, 0, 629, 630,
    7, 3, 0, 0, 630, 113, 1, 0, 0, 0, 631, 633, 3, 134, 67, 0, 632, 634, 3, 112,
    56, 0, 633, 632, 1, 0, 0, 0, 633, 634, 1, 0, 0, 0, 634, 115, 1, 0, 0, 0,
    635, 636, 3, 92, 46, 0, 636, 637, 5, 17, 0, 0, 637, 639, 1, 0, 0, 0, 638,
    635, 1, 0, 0, 0, 639, 642, 1, 0, 0, 0, 640, 638, 1, 0, 0, 0, 640, 641, 1, 0,
    0, 0, 641, 643, 1, 0, 0, 0, 642, 640, 1, 0, 0, 0, 643, 644, 3, 202, 101, 0,
    644, 117, 1, 0, 0, 0, 645, 646, 3, 120, 60, 0, 646, 647, 5, 17, 0, 0, 647,
    649, 1, 0, 0, 0, 648, 645, 1, 0, 0, 0, 649, 652, 1, 0, 0, 0, 650, 648, 1, 0,
    0, 0, 650, 651, 1, 0, 0, 0, 651, 653, 1, 0, 0, 0, 652, 650, 1, 0, 0, 0, 653,
    654, 3, 196, 98, 0, 654, 119, 1, 0, 0, 0, 655, 656, 3, 196, 98, 0, 656, 121,
    1, 0, 0, 0, 657, 658, 6, 61, -1, 0, 658, 659, 3, 196, 98, 0, 659, 670, 1, 0,
    0, 0, 660, 661, 10, 2, 0, 0, 661, 662, 5, 17, 0, 0, 662, 669, 3, 196, 98, 0,
    663, 664, 10, 1, 0, 0, 664, 665, 5, 38, 0, 0, 665, 666, 3, 124, 62, 0, 666,
    667, 5, 40, 0, 0, 667, 669, 1, 0, 0, 0, 668, 660, 1, 0, 0, 0, 668, 663, 1,
    0, 0, 0, 669, 672, 1, 0, 0, 0, 670, 668, 1, 0, 0, 0, 670, 671, 1, 0, 0, 0,
    671, 123, 1, 0, 0, 0, 672, 670, 1, 0, 0, 0, 673, 676, 5, 165, 0, 0, 674,
    676, 5, 166, 0, 0, 675, 673, 1, 0, 0, 0, 675, 674, 1, 0, 0, 0, 676, 125, 1,
    0, 0, 0, 677, 678, 6, 63, -1, 0, 678, 709, 3, 134, 67, 0, 679, 709, 3, 82,
    41, 0, 680, 709, 3, 94, 47, 0, 681, 682, 5, 63, 0, 0, 682, 683, 3, 126, 63,
    0, 683, 684, 5, 62, 0, 0, 684, 685, 3, 40, 20, 0, 685, 709, 1, 0, 0, 0, 686,
    687, 5, 58, 0, 0, 687, 709, 3, 126, 63, 13, 688, 689, 5, 64, 0, 0, 689, 709,
    3, 126, 63, 12, 690, 691, 5, 68, 0, 0, 691, 693, 5, 41, 0, 0, 692, 690, 1,
    0, 0, 0, 692, 693, 1, 0, 0, 0, 693, 694, 1, 0, 0, 0, 694, 695, 3, 132, 66,
    0, 695, 696, 5, 66, 0, 0, 696, 697, 3, 134, 67, 0, 697, 698, 5, 67, 0, 0,
    698, 699, 3, 134, 67, 0, 699, 709, 1, 0, 0, 0, 700, 701, 5, 69, 0, 0, 701,
    702, 5, 41, 0, 0, 702, 703, 3, 132, 66, 0, 703, 704, 5, 66, 0, 0, 704, 705,
    3, 134, 67, 0, 705, 706, 5, 67, 0, 0, 706, 707, 3, 134, 67, 0, 707, 709, 1,
    0, 0, 0, 708, 677, 1, 0, 0, 0, 708, 679, 1, 0, 0, 0, 708, 680, 1, 0, 0, 0,
    708, 681, 1, 0, 0, 0, 708, 686, 1, 0, 0, 0, 708, 688, 1, 0, 0, 0, 708, 692,
    1, 0, 0, 0, 708, 700, 1, 0, 0, 0, 709, 758, 1, 0, 0, 0, 710, 711, 10, 8, 0,
    0, 711, 712, 7, 4, 0, 0, 712, 757, 3, 126, 63, 9, 713, 714, 10, 7, 0, 0,
    714, 715, 7, 5, 0, 0, 715, 757, 3, 126, 63, 8, 716, 717, 10, 6, 0, 0, 717,
    718, 3, 150, 75, 0, 718, 719, 3, 126, 63, 7, 719, 757, 1, 0, 0, 0, 720, 721,
    10, 5, 0, 0, 721, 722, 7, 6, 0, 0, 722, 757, 3, 126, 63, 6, 723, 724, 10, 4,
    0, 0, 724, 726, 7, 7, 0, 0, 725, 727, 3, 138, 69, 0, 726, 725, 1, 0, 0, 0,
    726, 727, 1, 0, 0, 0, 727, 728, 1, 0, 0, 0, 728, 757, 3, 126, 63, 5, 729,
    730, 10, 3, 0, 0, 730, 731, 5, 67, 0, 0, 731, 757, 3, 126, 63, 4, 732, 733,
    10, 2, 0, 0, 733, 734, 7, 8, 0, 0, 734, 757, 3, 126, 63, 3, 735, 736, 10, 1,
    0, 0, 736, 737, 5, 81, 0, 0, 737, 757, 3, 126, 63, 2, 738, 739, 10, 16, 0,
    0, 739, 741, 5, 57, 0, 0, 740, 742, 5, 58, 0, 0, 741, 740, 1, 0, 0, 0, 741,
    742, 1, 0, 0, 0, 742, 743, 1, 0, 0, 0, 743, 757, 7, 9, 0, 0, 744, 745, 10,
    15, 0, 0, 745, 746, 7, 10, 0, 0, 746, 757, 3, 40, 20, 0, 747, 749, 10, 11,
    0, 0, 748, 750, 5, 65, 0, 0, 749, 748, 1, 0, 0, 0, 749, 750, 1, 0, 0, 0,
    750, 751, 1, 0, 0, 0, 751, 752, 5, 66, 0, 0, 752, 753, 3, 134, 67, 0, 753,
    754, 5, 67, 0, 0, 754, 755, 3, 134, 67, 0, 755, 757, 1, 0, 0, 0, 756, 710,
    1, 0, 0, 0, 756, 713, 1, 0, 0, 0, 756, 716, 1, 0, 0, 0, 756, 720, 1, 0, 0,
    0, 756, 723, 1, 0, 0, 0, 756, 729, 1, 0, 0, 0, 756, 732, 1, 0, 0, 0, 756,
    735, 1, 0, 0, 0, 756, 738, 1, 0, 0, 0, 756, 744, 1, 0, 0, 0, 756, 747, 1, 0,
    0, 0, 757, 760, 1, 0, 0, 0, 758, 756, 1, 0, 0, 0, 758, 759, 1, 0, 0, 0, 759,
    127, 1, 0, 0, 0, 760, 758, 1, 0, 0, 0, 761, 762, 7, 11, 0, 0, 762, 129, 1,
    0, 0, 0, 763, 769, 3, 128, 64, 0, 764, 769, 5, 90, 0, 0, 765, 769, 5, 91, 0,
    0, 766, 769, 5, 92, 0, 0, 767, 769, 5, 93, 0, 0, 768, 763, 1, 0, 0, 0, 768,
    764, 1, 0, 0, 0, 768, 765, 1, 0, 0, 0, 768, 766, 1, 0, 0, 0, 768, 767, 1, 0,
    0, 0, 769, 131, 1, 0, 0, 0, 770, 771, 7, 12, 0, 0, 771, 133, 1, 0, 0, 0,
    772, 773, 6, 67, -1, 0, 773, 851, 3, 152, 76, 0, 774, 775, 5, 102, 0, 0,
    775, 776, 3, 126, 63, 0, 776, 779, 5, 103, 0, 0, 777, 780, 3, 40, 20, 0,
    778, 780, 3, 210, 105, 0, 779, 777, 1, 0, 0, 0, 779, 778, 1, 0, 0, 0, 780,
    851, 1, 0, 0, 0, 781, 782, 7, 13, 0, 0, 782, 851, 3, 134, 67, 18, 783, 784,
    7, 14, 0, 0, 784, 785, 5, 108, 0, 0, 785, 851, 3, 134, 67, 17, 786, 787, 3,
    130, 65, 0, 787, 788, 5, 19, 0, 0, 788, 789, 3, 134, 67, 16, 789, 851, 1, 0,
    0, 0, 790, 791, 5, 68, 0, 0, 791, 792, 5, 41, 0, 0, 792, 793, 3, 132, 66, 0,
    793, 794, 5, 108, 0, 0, 794, 795, 3, 134, 67, 15, 795, 851, 1, 0, 0, 0, 796,
    797, 5, 69, 0, 0, 797, 798, 5, 41, 0, 0, 798, 799, 3, 132, 66, 0, 799, 800,
    5, 108, 0, 0, 800, 801, 3, 134, 67, 14, 801, 851, 1, 0, 0, 0, 802, 803, 5,
    109, 0, 0, 803, 804, 5, 108, 0, 0, 804, 851, 3, 134, 67, 13, 805, 806, 5,
    110, 0, 0, 806, 807, 5, 108, 0, 0, 807, 851, 3, 134, 67, 12, 808, 809, 5,
    111, 0, 0, 809, 810, 5, 108, 0, 0, 810, 851, 3, 134, 67, 11, 811, 812, 5,
    112, 0, 0, 812, 813, 5, 19, 0, 0, 813, 851, 3, 134, 67, 10, 814, 815, 5,
    113, 0, 0, 815, 816, 5, 19, 0, 0, 816, 851, 3, 134, 67, 9, 817, 818, 7, 15,
    0, 0, 818, 851, 3, 42, 21, 0, 819, 820, 5, 122, 0, 0, 820, 821, 3, 126, 63,
    0, 821, 822, 5, 123, 0, 0, 822, 823, 3, 126, 63, 0, 823, 824, 5, 124, 0, 0,
    824, 825, 3, 126, 63, 0, 825, 851, 1, 0, 0, 0, 826, 828, 5, 125, 0, 0, 827,
    829, 3, 126, 63, 0, 828, 827, 1, 0, 0, 0, 828, 829, 1, 0, 0, 0, 829, 831, 1,
    0, 0, 0, 830, 832, 3, 136, 68, 0, 831, 830, 1, 0, 0, 0, 832, 833, 1, 0, 0,
    0, 833, 831, 1, 0, 0, 0, 833, 834, 1, 0, 0, 0, 834, 835, 1, 0, 0, 0, 835,
    836, 5, 124, 0, 0, 836, 837, 3, 126, 63, 0, 837, 838, 5, 107, 0, 0, 838,
    851, 1, 0, 0, 0, 839, 840, 7, 16, 0, 0, 840, 851, 3, 126, 63, 0, 841, 842,
    7, 17, 0, 0, 842, 848, 3, 126, 63, 0, 843, 846, 5, 129, 0, 0, 844, 847, 3,
    128, 64, 0, 845, 847, 3, 126, 63, 0, 846, 844, 1, 0, 0, 0, 846, 845, 1, 0,
    0, 0, 847, 849, 1, 0, 0, 0, 848, 843, 1, 0, 0, 0, 848, 849, 1, 0, 0, 0, 849,
    851, 1, 0, 0, 0, 850, 772, 1, 0, 0, 0, 850, 774, 1, 0, 0, 0, 850, 781, 1, 0,
    0, 0, 850, 783, 1, 0, 0, 0, 850, 786, 1, 0, 0, 0, 850, 790, 1, 0, 0, 0, 850,
    796, 1, 0, 0, 0, 850, 802, 1, 0, 0, 0, 850, 805, 1, 0, 0, 0, 850, 808, 1, 0,
    0, 0, 850, 811, 1, 0, 0, 0, 850, 814, 1, 0, 0, 0, 850, 817, 1, 0, 0, 0, 850,
    819, 1, 0, 0, 0, 850, 826, 1, 0, 0, 0, 850, 839, 1, 0, 0, 0, 850, 841, 1, 0,
    0, 0, 851, 871, 1, 0, 0, 0, 852, 853, 10, 7, 0, 0, 853, 854, 5, 116, 0, 0,
    854, 870, 3, 134, 67, 8, 855, 856, 10, 6, 0, 0, 856, 857, 7, 18, 0, 0, 857,
    870, 3, 134, 67, 7, 858, 859, 10, 5, 0, 0, 859, 860, 7, 19, 0, 0, 860, 870,
    3, 134, 67, 6, 861, 862, 10, 21, 0, 0, 862, 863, 5, 17, 0, 0, 863, 870, 3,
    154, 77, 0, 864, 865, 10, 20, 0, 0, 865, 866, 5, 38, 0, 0, 866, 867, 3, 126,
    63, 0, 867, 868, 5, 40, 0, 0, 868, 870, 1, 0, 0, 0, 869, 852, 1, 0, 0, 0,
    869, 855, 1, 0, 0, 0, 869, 858, 1, 0, 0, 0, 869, 861, 1, 0, 0, 0, 869, 864,
    1, 0, 0, 0, 870, 873, 1, 0, 0, 0, 871, 869, 1, 0, 0, 0, 871, 872, 1, 0, 0,
    0, 872, 135, 1, 0, 0, 0, 873, 871, 1, 0, 0, 0, 874, 875, 5, 130, 0, 0, 875,
    876, 3, 126, 63, 0, 876, 877, 5, 123, 0, 0, 877, 878, 3, 126, 63, 0, 878,
    137, 1, 0, 0, 0, 879, 880, 3, 128, 64, 0, 880, 881, 5, 108, 0, 0, 881, 139,
    1, 0, 0, 0, 882, 883, 7, 20, 0, 0, 883, 141, 1, 0, 0, 0, 884, 885, 7, 21, 0,
    0, 885, 143, 1, 0, 0, 0, 886, 887, 7, 22, 0, 0, 887, 145, 1, 0, 0, 0, 888,
    890, 3, 208, 104, 0, 889, 891, 3, 142, 71, 0, 890, 889, 1, 0, 0, 0, 890,
    891, 1, 0, 0, 0, 891, 896, 1, 0, 0, 0, 892, 893, 3, 144, 72, 0, 893, 894, 3,
    208, 104, 0, 894, 896, 1, 0, 0, 0, 895, 888, 1, 0, 0, 0, 895, 892, 1, 0, 0,
    0, 896, 147, 1, 0, 0, 0, 897, 899, 5, 137, 0, 0, 898, 897, 1, 0, 0, 0, 898,
    899, 1, 0, 0, 0, 899, 900, 1, 0, 0, 0, 900, 906, 7, 23, 0, 0, 901, 903, 7,
    23, 0, 0, 902, 904, 5, 140, 0, 0, 903, 902, 1, 0, 0, 0, 903, 904, 1, 0, 0,
    0, 904, 906, 1, 0, 0, 0, 905, 898, 1, 0, 0, 0, 905, 901, 1, 0, 0, 0, 906,
    149, 1, 0, 0, 0, 907, 909, 7, 24, 0, 0, 908, 907, 1, 0, 0, 0, 908, 909, 1,
    0, 0, 0, 909, 910, 1, 0, 0, 0, 910, 912, 5, 144, 0, 0, 911, 913, 3, 128, 64,
    0, 912, 911, 1, 0, 0, 0, 912, 913, 1, 0, 0, 0, 913, 916, 1, 0, 0, 0, 914,
    917, 3, 140, 70, 0, 915, 917, 5, 62, 0, 0, 916, 914, 1, 0, 0, 0, 916, 915,
    1, 0, 0, 0, 917, 919, 1, 0, 0, 0, 918, 920, 7, 14, 0, 0, 919, 918, 1, 0, 0,
    0, 919, 920, 1, 0, 0, 0, 920, 989, 1, 0, 0, 0, 921, 923, 5, 65, 0, 0, 922,
    921, 1, 0, 0, 0, 922, 923, 1, 0, 0, 0, 923, 924, 1, 0, 0, 0, 924, 926, 5,
    145, 0, 0, 925, 927, 3, 138, 69, 0, 926, 925, 1, 0, 0, 0, 926, 927, 1, 0, 0,
    0, 927, 929, 1, 0, 0, 0, 928, 930, 7, 14, 0, 0, 929, 928, 1, 0, 0, 0, 929,
    930, 1, 0, 0, 0, 930, 989, 1, 0, 0, 0, 931, 933, 7, 24, 0, 0, 932, 931, 1,
    0, 0, 0, 932, 933, 1, 0, 0, 0, 933, 935, 1, 0, 0, 0, 934, 936, 5, 65, 0, 0,
    935, 934, 1, 0, 0, 0, 935, 936, 1, 0, 0, 0, 936, 937, 1, 0, 0, 0, 937, 939,
    7, 25, 0, 0, 938, 940, 3, 138, 69, 0, 939, 938, 1, 0, 0, 0, 939, 940, 1, 0,
    0, 0, 940, 989, 1, 0, 0, 0, 941, 943, 7, 24, 0, 0, 942, 941, 1, 0, 0, 0,
    942, 943, 1, 0, 0, 0, 943, 945, 1, 0, 0, 0, 944, 946, 3, 146, 73, 0, 945,
    944, 1, 0, 0, 0, 945, 946, 1, 0, 0, 0, 946, 947, 1, 0, 0, 0, 947, 949, 3,
    148, 74, 0, 948, 950, 3, 138, 69, 0, 949, 948, 1, 0, 0, 0, 949, 950, 1, 0,
    0, 0, 950, 952, 1, 0, 0, 0, 951, 953, 7, 14, 0, 0, 952, 951, 1, 0, 0, 0,
    952, 953, 1, 0, 0, 0, 953, 989, 1, 0, 0, 0, 954, 956, 7, 24, 0, 0, 955, 954,
    1, 0, 0, 0, 955, 956, 1, 0, 0, 0, 956, 958, 1, 0, 0, 0, 957, 959, 5, 65, 0,
    0, 958, 957, 1, 0, 0, 0, 958, 959, 1, 0, 0, 0, 959, 960, 1, 0, 0, 0, 960,
    961, 5, 148, 0, 0, 961, 962, 3, 208, 104, 0, 962, 964, 5, 108, 0, 0, 963,
    965, 7, 14, 0, 0, 964, 963, 1, 0, 0, 0, 964, 965, 1, 0, 0, 0, 965, 989, 1,
    0, 0, 0, 966, 968, 5, 149, 0, 0, 967, 969, 7, 23, 0, 0, 968, 967, 1, 0, 0,
    0, 968, 969, 1, 0, 0, 0, 969, 971, 1, 0, 0, 0, 970, 972, 3, 138, 69, 0, 971,
    970, 1, 0, 0, 0, 971, 972, 1, 0, 0, 0, 972, 989, 1, 0, 0, 0, 973, 975, 5,
    150, 0, 0, 974, 976, 7, 23, 0, 0, 975, 974, 1, 0, 0, 0, 975, 976, 1, 0, 0,
    0, 976, 978, 1, 0, 0, 0, 977, 979, 3, 138, 69, 0, 978, 977, 1, 0, 0, 0, 978,
    979, 1, 0, 0, 0, 979, 989, 1, 0, 0, 0, 980, 982, 5, 141, 0, 0, 981, 983, 3,
    138, 69, 0, 982, 981, 1, 0, 0, 0, 982, 983, 1, 0, 0, 0, 983, 989, 1, 0, 0,
    0, 984, 986, 5, 142, 0, 0, 985, 987, 3, 138, 69, 0, 986, 985, 1, 0, 0, 0,
    986, 987, 1, 0, 0, 0, 987, 989, 1, 0, 0, 0, 988, 908, 1, 0, 0, 0, 988, 922,
    1, 0, 0, 0, 988, 932, 1, 0, 0, 0, 988, 942, 1, 0, 0, 0, 988, 955, 1, 0, 0,
    0, 988, 966, 1, 0, 0, 0, 988, 973, 1, 0, 0, 0, 988, 980, 1, 0, 0, 0, 988,
    984, 1, 0, 0, 0, 989, 151, 1, 0, 0, 0, 990, 1004, 3, 158, 79, 0, 991, 1004,
    3, 164, 82, 0, 992, 1004, 3, 204, 102, 0, 993, 1004, 3, 166, 83, 0, 994,
    1004, 3, 168, 84, 0, 995, 1004, 3, 172, 86, 0, 996, 1004, 3, 176, 88, 0,
    997, 1004, 3, 180, 90, 0, 998, 1004, 3, 182, 91, 0, 999, 1000, 5, 31, 0, 0,
    1000, 1001, 3, 126, 63, 0, 1001, 1002, 5, 32, 0, 0, 1002, 1004, 1, 0, 0, 0,
    1003, 990, 1, 0, 0, 0, 1003, 991, 1, 0, 0, 0, 1003, 992, 1, 0, 0, 0, 1003,
    993, 1, 0, 0, 0, 1003, 994, 1, 0, 0, 0, 1003, 995, 1, 0, 0, 0, 1003, 996, 1,
    0, 0, 0, 1003, 997, 1, 0, 0, 0, 1003, 998, 1, 0, 0, 0, 1003, 999, 1, 0, 0,
    0, 1004, 153, 1, 0, 0, 0, 1005, 1008, 3, 196, 98, 0, 1006, 1008, 3, 156, 78,
    0, 1007, 1005, 1, 0, 0, 0, 1007, 1006, 1, 0, 0, 0, 1008, 155, 1, 0, 0, 0,
    1009, 1010, 3, 200, 100, 0, 1010, 1012, 5, 31, 0, 0, 1011, 1013, 3, 206,
    103, 0, 1012, 1011, 1, 0, 0, 0, 1012, 1013, 1, 0, 0, 0, 1013, 1014, 1, 0, 0,
    0, 1014, 1015, 5, 32, 0, 0, 1015, 157, 1, 0, 0, 0, 1016, 1022, 3, 196, 98,
    0, 1017, 1022, 3, 160, 80, 0, 1018, 1022, 5, 151, 0, 0, 1019, 1022, 5, 152,
    0, 0, 1020, 1022, 5, 153, 0, 0, 1021, 1016, 1, 0, 0, 0, 1021, 1017, 1, 0, 0,
    0, 1021, 1018, 1, 0, 0, 0, 1021, 1019, 1, 0, 0, 0, 1021, 1020, 1, 0, 0, 0,
    1022, 159, 1, 0, 0, 0, 1023, 1024, 3, 196, 98, 0, 1024, 1026, 5, 31, 0, 0,
    1025, 1027, 3, 206, 103, 0, 1026, 1025, 1, 0, 0, 0, 1026, 1027, 1, 0, 0, 0,
    1027, 1028, 1, 0, 0, 0, 1028, 1029, 5, 32, 0, 0, 1029, 161, 1, 0, 0, 0,
    1030, 1031, 3, 208, 104, 0, 1031, 1032, 5, 11, 0, 0, 1032, 1033, 3, 208,
    104, 0, 1033, 163, 1, 0, 0, 0, 1034, 1045, 7, 26, 0, 0, 1035, 1045, 5, 59,
    0, 0, 1036, 1045, 5, 165, 0, 0, 1037, 1045, 5, 166, 0, 0, 1038, 1045, 5,
    160, 0, 0, 1039, 1045, 5, 159, 0, 0, 1040, 1045, 5, 161, 0, 0, 1041, 1045,
    5, 162, 0, 0, 1042, 1045, 3, 208, 104, 0, 1043, 1045, 3, 162, 81, 0, 1044,
    1034, 1, 0, 0, 0, 1044, 1035, 1, 0, 0, 0, 1044, 1036, 1, 0, 0, 0, 1044,
    1037, 1, 0, 0, 0, 1044, 1038, 1, 0, 0, 0, 1044, 1039, 1, 0, 0, 0, 1044,
    1040, 1, 0, 0, 0, 1044, 1041, 1, 0, 0, 0, 1044, 1042, 1, 0, 0, 0, 1044,
    1043, 1, 0, 0, 0, 1045, 165, 1, 0, 0, 0, 1046, 1047, 5, 24, 0, 0, 1047,
    1048, 7, 27, 0, 0, 1048, 1049, 3, 126, 63, 0, 1049, 1050, 5, 15, 0, 0, 1050,
    1051, 3, 126, 63, 0, 1051, 1052, 7, 28, 0, 0, 1052, 167, 1, 0, 0, 0, 1053,
    1055, 5, 25, 0, 0, 1054, 1053, 1, 0, 0, 0, 1054, 1055, 1, 0, 0, 0, 1055,
    1056, 1, 0, 0, 0, 1056, 1066, 5, 14, 0, 0, 1057, 1067, 5, 11, 0, 0, 1058,
    1063, 3, 170, 85, 0, 1059, 1060, 5, 15, 0, 0, 1060, 1062, 3, 170, 85, 0,
    1061, 1059, 1, 0, 0, 0, 1062, 1065, 1, 0, 0, 0, 1063, 1061, 1, 0, 0, 0,
    1063, 1064, 1, 0, 0, 0, 1064, 1067, 1, 0, 0, 0, 1065, 1063, 1, 0, 0, 0,
    1066, 1057, 1, 0, 0, 0, 1066, 1058, 1, 0, 0, 0, 1067, 1068, 1, 0, 0, 0,
    1068, 1069, 5, 16, 0, 0, 1069, 169, 1, 0, 0, 0, 1070, 1071, 3, 196, 98, 0,
    1071, 1072, 5, 11, 0, 0, 1072, 1073, 3, 126, 63, 0, 1073, 171, 1, 0, 0, 0,
    1074, 1075, 3, 42, 21, 0, 1075, 1085, 5, 14, 0, 0, 1076, 1086, 5, 11, 0, 0,
    1077, 1082, 3, 174, 87, 0, 1078, 1079, 5, 15, 0, 0, 1079, 1081, 3, 174, 87,
    0, 1080, 1078, 1, 0, 0, 0, 1081, 1084, 1, 0, 0, 0, 1082, 1080, 1, 0, 0, 0,
    1082, 1083, 1, 0, 0, 0, 1083, 1086, 1, 0, 0, 0, 1084, 1082, 1, 0, 0, 0,
    1085, 1076, 1, 0, 0, 0, 1085, 1077, 1, 0, 0, 0, 1086, 1087, 1, 0, 0, 0,
    1087, 1088, 5, 16, 0, 0, 1088, 173, 1, 0, 0, 0, 1089, 1090, 3, 196, 98, 0,
    1090, 1091, 5, 11, 0, 0, 1091, 1092, 3, 126, 63, 0, 1092, 175, 1, 0, 0, 0,
    1093, 1098, 5, 21, 0, 0, 1094, 1095, 5, 22, 0, 0, 1095, 1096, 3, 40, 20, 0,
    1096, 1097, 5, 23, 0, 0, 1097, 1099, 1, 0, 0, 0, 1098, 1094, 1, 0, 0, 0,
    1098, 1099, 1, 0, 0, 0, 1099, 1101, 1, 0, 0, 0, 1100, 1093, 1, 0, 0, 0,
    1100, 1101, 1, 0, 0, 0, 1101, 1102, 1, 0, 0, 0, 1102, 1111, 5, 14, 0, 0,
    1103, 1108, 3, 126, 63, 0, 1104, 1105, 5, 15, 0, 0, 1105, 1107, 3, 126, 63,
    0, 1106, 1104, 1, 0, 0, 0, 1107, 1110, 1, 0, 0, 0, 1108, 1106, 1, 0, 0, 0,
    1108, 1109, 1, 0, 0, 0, 1109, 1112, 1, 0, 0, 0, 1110, 1108, 1, 0, 0, 0,
    1111, 1103, 1, 0, 0, 0, 1111, 1112, 1, 0, 0, 0, 1112, 1113, 1, 0, 0, 0,
    1113, 1114, 5, 16, 0, 0, 1114, 177, 1, 0, 0, 0, 1115, 1116, 5, 154, 0, 0,
    1116, 1117, 5, 165, 0, 0, 1117, 179, 1, 0, 0, 0, 1118, 1119, 5, 155, 0, 0,
    1119, 1120, 5, 165, 0, 0, 1120, 1121, 5, 19, 0, 0, 1121, 1123, 3, 22, 11, 0,
    1122, 1124, 3, 178, 89, 0, 1123, 1122, 1, 0, 0, 0, 1123, 1124, 1, 0, 0, 0,
    1124, 181, 1, 0, 0, 0, 1125, 1126, 5, 156, 0, 0, 1126, 1127, 5, 14, 0, 0,
    1127, 1132, 3, 180, 90, 0, 1128, 1129, 5, 15, 0, 0, 1129, 1131, 3, 180, 90,
    0, 1130, 1128, 1, 0, 0, 0, 1131, 1134, 1, 0, 0, 0, 1132, 1130, 1, 0, 0, 0,
    1132, 1133, 1, 0, 0, 0, 1133, 1135, 1, 0, 0, 0, 1134, 1132, 1, 0, 0, 0,
    1135, 1137, 5, 16, 0, 0, 1136, 1138, 3, 178, 89, 0, 1137, 1136, 1, 0, 0, 0,
    1137, 1138, 1, 0, 0, 0, 1138, 183, 1, 0, 0, 0, 1139, 1140, 7, 29, 0, 0,
    1140, 185, 1, 0, 0, 0, 1141, 1142, 7, 30, 0, 0, 1142, 187, 1, 0, 0, 0, 1143,
    1144, 7, 31, 0, 0, 1144, 189, 1, 0, 0, 0, 1145, 1146, 7, 32, 0, 0, 1146,
    191, 1, 0, 0, 0, 1147, 1148, 7, 33, 0, 0, 1148, 193, 1, 0, 0, 0, 1149, 1150,
    7, 34, 0, 0, 1150, 195, 1, 0, 0, 0, 1151, 1154, 3, 202, 101, 0, 1152, 1154,
    3, 188, 94, 0, 1153, 1151, 1, 0, 0, 0, 1153, 1152, 1, 0, 0, 0, 1154, 197, 1,
    0, 0, 0, 1155, 1158, 3, 196, 98, 0, 1156, 1158, 3, 194, 97, 0, 1157, 1155,
    1, 0, 0, 0, 1157, 1156, 1, 0, 0, 0, 1158, 199, 1, 0, 0, 0, 1159, 1162, 3,
    202, 101, 0, 1160, 1162, 3, 192, 96, 0, 1161, 1159, 1, 0, 0, 0, 1161, 1160,
    1, 0, 0, 0, 1162, 201, 1, 0, 0, 0, 1163, 1164, 7, 35, 0, 0, 1164, 203, 1, 0,
    0, 0, 1165, 1168, 5, 157, 0, 0, 1166, 1169, 3, 202, 101, 0, 1167, 1169, 5,
    165, 0, 0, 1168, 1166, 1, 0, 0, 0, 1168, 1167, 1, 0, 0, 0, 1169, 205, 1, 0,
    0, 0, 1170, 1175, 3, 126, 63, 0, 1171, 1172, 5, 15, 0, 0, 1172, 1174, 3,
    126, 63, 0, 1173, 1171, 1, 0, 0, 0, 1174, 1177, 1, 0, 0, 0, 1175, 1173, 1,
    0, 0, 0, 1175, 1176, 1, 0, 0, 0, 1176, 207, 1, 0, 0, 0, 1177, 1175, 1, 0, 0,
    0, 1178, 1180, 5, 166, 0, 0, 1179, 1181, 3, 210, 105, 0, 1180, 1179, 1, 0,
    0, 0, 1180, 1181, 1, 0, 0, 0, 1181, 209, 1, 0, 0, 0, 1182, 1186, 3, 128, 64,
    0, 1183, 1186, 3, 132, 66, 0, 1184, 1186, 5, 165, 0, 0, 1185, 1182, 1, 0, 0,
    0, 1185, 1183, 1, 0, 0, 0, 1185, 1184, 1, 0, 0, 0, 1186, 211, 1, 0, 0, 0,
    134, 219, 222, 227, 233, 242, 248, 252, 258, 262, 269, 274, 278, 281, 289,
    292, 300, 303, 312, 320, 327, 336, 339, 350, 355, 360, 377, 384, 408, 423,
    431, 435, 445, 453, 456, 466, 469, 474, 479, 492, 501, 517, 524, 527, 539,
    545, 550, 554, 558, 561, 564, 571, 580, 592, 598, 602, 614, 624, 627, 633,
    640, 650, 668, 670, 675, 692, 708, 726, 741, 749, 756, 758, 768, 779, 828,
    833, 846, 848, 850, 869, 871, 890, 895, 898, 903, 905, 908, 912, 916, 919,
    922, 926, 929, 932, 935, 939, 942, 945, 949, 952, 955, 958, 964, 968, 971,
    975, 978, 982, 986, 988, 1003, 1007, 1012, 1021, 1026, 1044, 1054, 1063,
    1066, 1082, 1085, 1098, 1100, 1108, 1111, 1123, 1132, 1137, 1153, 1157,
    1161, 1168, 1175, 1180, 1185,
  ];

  private static __ATN: antlr.ATN;
  public static get _ATN(): antlr.ATN {
    if (!cqlParser.__ATN) {
      cqlParser.__ATN = new antlr.ATNDeserializer().deserialize(
        cqlParser._serializedATN
      );
    }

    return cqlParser.__ATN;
  }

  private static readonly vocabulary = new antlr.Vocabulary(
    cqlParser.literalNames,
    cqlParser.symbolicNames,
    []
  );

  public override get vocabulary(): antlr.Vocabulary {
    return cqlParser.vocabulary;
  }

  private static readonly decisionsToDFA = cqlParser._ATN.decisionToState.map(
    (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
  );
}

export class DefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public usingDefinition(): UsingDefinitionContext | null {
    return this.getRuleContext(0, UsingDefinitionContext);
  }
  public includeDefinition(): IncludeDefinitionContext | null {
    return this.getRuleContext(0, IncludeDefinitionContext);
  }
  public codesystemDefinition(): CodesystemDefinitionContext | null {
    return this.getRuleContext(0, CodesystemDefinitionContext);
  }
  public valuesetDefinition(): ValuesetDefinitionContext | null {
    return this.getRuleContext(0, ValuesetDefinitionContext);
  }
  public codeDefinition(): CodeDefinitionContext | null {
    return this.getRuleContext(0, CodeDefinitionContext);
  }
  public conceptDefinition(): ConceptDefinitionContext | null {
    return this.getRuleContext(0, ConceptDefinitionContext);
  }
  public parameterDefinition(): ParameterDefinitionContext | null {
    return this.getRuleContext(0, ParameterDefinitionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_definition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDefinition) {
      listener.enterDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDefinition) {
      listener.exitDefinition(this);
    }
  }
}

export class LibraryContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public EOF(): antlr.TerminalNode {
    return this.getToken(cqlParser.EOF, 0)!;
  }
  public libraryDefinition(): LibraryDefinitionContext | null {
    return this.getRuleContext(0, LibraryDefinitionContext);
  }
  public definition(): DefinitionContext[];
  public definition(i: number): DefinitionContext | null;
  public definition(
    i?: number
  ): DefinitionContext[] | DefinitionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(DefinitionContext);
    }

    return this.getRuleContext(i, DefinitionContext);
  }
  public statement(): StatementContext[];
  public statement(i: number): StatementContext | null;
  public statement(i?: number): StatementContext[] | StatementContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    }

    return this.getRuleContext(i, StatementContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_library;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLibrary) {
      listener.enterLibrary(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLibrary) {
      listener.exitLibrary(this);
    }
  }
}

export class LibraryDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public qualifiedIdentifier(): QualifiedIdentifierContext {
    return this.getRuleContext(0, QualifiedIdentifierContext)!;
  }
  public versionSpecifier(): VersionSpecifierContext | null {
    return this.getRuleContext(0, VersionSpecifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_libraryDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLibraryDefinition) {
      listener.enterLibraryDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLibraryDefinition) {
      listener.exitLibraryDefinition(this);
    }
  }
}

export class UsingDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public qualifiedIdentifier(): QualifiedIdentifierContext {
    return this.getRuleContext(0, QualifiedIdentifierContext)!;
  }
  public versionSpecifier(): VersionSpecifierContext | null {
    return this.getRuleContext(0, VersionSpecifierContext);
  }
  public localIdentifier(): LocalIdentifierContext | null {
    return this.getRuleContext(0, LocalIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_usingDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterUsingDefinition) {
      listener.enterUsingDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitUsingDefinition) {
      listener.exitUsingDefinition(this);
    }
  }
}

export class IncludeDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public qualifiedIdentifier(): QualifiedIdentifierContext {
    return this.getRuleContext(0, QualifiedIdentifierContext)!;
  }
  public versionSpecifier(): VersionSpecifierContext | null {
    return this.getRuleContext(0, VersionSpecifierContext);
  }
  public localIdentifier(): LocalIdentifierContext | null {
    return this.getRuleContext(0, LocalIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_includeDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIncludeDefinition) {
      listener.enterIncludeDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIncludeDefinition) {
      listener.exitIncludeDefinition(this);
    }
  }
}

export class LocalIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_localIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLocalIdentifier) {
      listener.enterLocalIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLocalIdentifier) {
      listener.exitLocalIdentifier(this);
    }
  }
}

export class AccessModifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_accessModifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAccessModifier) {
      listener.enterAccessModifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAccessModifier) {
      listener.exitAccessModifier(this);
    }
  }
}

export class ParameterDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public typeSpecifier(): TypeSpecifierContext | null {
    return this.getRuleContext(0, TypeSpecifierContext);
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_parameterDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterParameterDefinition) {
      listener.enterParameterDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitParameterDefinition) {
      listener.exitParameterDefinition(this);
    }
  }
}

export class CodesystemDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public codesystemId(): CodesystemIdContext {
    return this.getRuleContext(0, CodesystemIdContext)!;
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public versionSpecifier(): VersionSpecifierContext | null {
    return this.getRuleContext(0, VersionSpecifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codesystemDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodesystemDefinition) {
      listener.enterCodesystemDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodesystemDefinition) {
      listener.exitCodesystemDefinition(this);
    }
  }
}

export class ValuesetDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public valuesetId(): ValuesetIdContext {
    return this.getRuleContext(0, ValuesetIdContext)!;
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public versionSpecifier(): VersionSpecifierContext | null {
    return this.getRuleContext(0, VersionSpecifierContext);
  }
  public codesystems(): CodesystemsContext | null {
    return this.getRuleContext(0, CodesystemsContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_valuesetDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterValuesetDefinition) {
      listener.enterValuesetDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitValuesetDefinition) {
      listener.exitValuesetDefinition(this);
    }
  }
}

export class CodesystemsContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public codesystemIdentifier(): CodesystemIdentifierContext[];
  public codesystemIdentifier(i: number): CodesystemIdentifierContext | null;
  public codesystemIdentifier(
    i?: number
  ): CodesystemIdentifierContext[] | CodesystemIdentifierContext | null {
    if (i === undefined) {
      return this.getRuleContexts(CodesystemIdentifierContext);
    }

    return this.getRuleContext(i, CodesystemIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codesystems;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodesystems) {
      listener.enterCodesystems(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodesystems) {
      listener.exitCodesystems(this);
    }
  }
}

export class CodesystemIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public libraryIdentifier(): LibraryIdentifierContext | null {
    return this.getRuleContext(0, LibraryIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codesystemIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodesystemIdentifier) {
      listener.enterCodesystemIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodesystemIdentifier) {
      listener.exitCodesystemIdentifier(this);
    }
  }
}

export class LibraryIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_libraryIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLibraryIdentifier) {
      listener.enterLibraryIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLibraryIdentifier) {
      listener.exitLibraryIdentifier(this);
    }
  }
}

export class CodeDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public codeId(): CodeIdContext {
    return this.getRuleContext(0, CodeIdContext)!;
  }
  public codesystemIdentifier(): CodesystemIdentifierContext {
    return this.getRuleContext(0, CodesystemIdentifierContext)!;
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public displayClause(): DisplayClauseContext | null {
    return this.getRuleContext(0, DisplayClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codeDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodeDefinition) {
      listener.enterCodeDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodeDefinition) {
      listener.exitCodeDefinition(this);
    }
  }
}

export class ConceptDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public codeIdentifier(): CodeIdentifierContext[];
  public codeIdentifier(i: number): CodeIdentifierContext | null;
  public codeIdentifier(
    i?: number
  ): CodeIdentifierContext[] | CodeIdentifierContext | null {
    if (i === undefined) {
      return this.getRuleContexts(CodeIdentifierContext);
    }

    return this.getRuleContext(i, CodeIdentifierContext);
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public displayClause(): DisplayClauseContext | null {
    return this.getRuleContext(0, DisplayClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_conceptDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterConceptDefinition) {
      listener.enterConceptDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitConceptDefinition) {
      listener.exitConceptDefinition(this);
    }
  }
}

export class CodeIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public libraryIdentifier(): LibraryIdentifierContext | null {
    return this.getRuleContext(0, LibraryIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codeIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodeIdentifier) {
      listener.enterCodeIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodeIdentifier) {
      listener.exitCodeIdentifier(this);
    }
  }
}

export class CodesystemIdContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codesystemId;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodesystemId) {
      listener.enterCodesystemId(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodesystemId) {
      listener.exitCodesystemId(this);
    }
  }
}

export class ValuesetIdContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_valuesetId;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterValuesetId) {
      listener.enterValuesetId(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitValuesetId) {
      listener.exitValuesetId(this);
    }
  }
}

export class VersionSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_versionSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterVersionSpecifier) {
      listener.enterVersionSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitVersionSpecifier) {
      listener.exitVersionSpecifier(this);
    }
  }
}

export class CodeIdContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codeId;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodeId) {
      listener.enterCodeId(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodeId) {
      listener.exitCodeId(this);
    }
  }
}

export class TypeSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public namedTypeSpecifier(): NamedTypeSpecifierContext | null {
    return this.getRuleContext(0, NamedTypeSpecifierContext);
  }
  public listTypeSpecifier(): ListTypeSpecifierContext | null {
    return this.getRuleContext(0, ListTypeSpecifierContext);
  }
  public intervalTypeSpecifier(): IntervalTypeSpecifierContext | null {
    return this.getRuleContext(0, IntervalTypeSpecifierContext);
  }
  public tupleTypeSpecifier(): TupleTypeSpecifierContext | null {
    return this.getRuleContext(0, TupleTypeSpecifierContext);
  }
  public choiceTypeSpecifier(): ChoiceTypeSpecifierContext | null {
    return this.getRuleContext(0, ChoiceTypeSpecifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_typeSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTypeSpecifier) {
      listener.enterTypeSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTypeSpecifier) {
      listener.exitTypeSpecifier(this);
    }
  }
}

export class NamedTypeSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialOrTypeNameIdentifier(): ReferentialOrTypeNameIdentifierContext {
    return this.getRuleContext(0, ReferentialOrTypeNameIdentifierContext)!;
  }
  public qualifier(): QualifierContext[];
  public qualifier(i: number): QualifierContext | null;
  public qualifier(i?: number): QualifierContext[] | QualifierContext | null {
    if (i === undefined) {
      return this.getRuleContexts(QualifierContext);
    }

    return this.getRuleContext(i, QualifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_namedTypeSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterNamedTypeSpecifier) {
      listener.enterNamedTypeSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitNamedTypeSpecifier) {
      listener.exitNamedTypeSpecifier(this);
    }
  }
}

export class ModelIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_modelIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterModelIdentifier) {
      listener.enterModelIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitModelIdentifier) {
      listener.exitModelIdentifier(this);
    }
  }
}

export class ListTypeSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public typeSpecifier(): TypeSpecifierContext {
    return this.getRuleContext(0, TypeSpecifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_listTypeSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterListTypeSpecifier) {
      listener.enterListTypeSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitListTypeSpecifier) {
      listener.exitListTypeSpecifier(this);
    }
  }
}

export class IntervalTypeSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public typeSpecifier(): TypeSpecifierContext {
    return this.getRuleContext(0, TypeSpecifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_intervalTypeSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIntervalTypeSpecifier) {
      listener.enterIntervalTypeSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIntervalTypeSpecifier) {
      listener.exitIntervalTypeSpecifier(this);
    }
  }
}

export class TupleTypeSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public tupleElementDefinition(): TupleElementDefinitionContext[];
  public tupleElementDefinition(
    i: number
  ): TupleElementDefinitionContext | null;
  public tupleElementDefinition(
    i?: number
  ): TupleElementDefinitionContext[] | TupleElementDefinitionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TupleElementDefinitionContext);
    }

    return this.getRuleContext(i, TupleElementDefinitionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_tupleTypeSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTupleTypeSpecifier) {
      listener.enterTupleTypeSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTupleTypeSpecifier) {
      listener.exitTupleTypeSpecifier(this);
    }
  }
}

export class TupleElementDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public typeSpecifier(): TypeSpecifierContext {
    return this.getRuleContext(0, TypeSpecifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_tupleElementDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTupleElementDefinition) {
      listener.enterTupleElementDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTupleElementDefinition) {
      listener.exitTupleElementDefinition(this);
    }
  }
}

export class ChoiceTypeSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public typeSpecifier(): TypeSpecifierContext[];
  public typeSpecifier(i: number): TypeSpecifierContext | null;
  public typeSpecifier(
    i?: number
  ): TypeSpecifierContext[] | TypeSpecifierContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TypeSpecifierContext);
    }

    return this.getRuleContext(i, TypeSpecifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_choiceTypeSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterChoiceTypeSpecifier) {
      listener.enterChoiceTypeSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitChoiceTypeSpecifier) {
      listener.exitChoiceTypeSpecifier(this);
    }
  }
}

export class StatementContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expressionDefinition(): ExpressionDefinitionContext | null {
    return this.getRuleContext(0, ExpressionDefinitionContext);
  }
  public contextDefinition(): ContextDefinitionContext | null {
    return this.getRuleContext(0, ContextDefinitionContext);
  }
  public functionDefinition(): FunctionDefinitionContext | null {
    return this.getRuleContext(0, FunctionDefinitionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_statement;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
}

export class ExpressionDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_expressionDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterExpressionDefinition) {
      listener.enterExpressionDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitExpressionDefinition) {
      listener.exitExpressionDefinition(this);
    }
  }
}

export class ContextDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public modelIdentifier(): ModelIdentifierContext | null {
    return this.getRuleContext(0, ModelIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_contextDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterContextDefinition) {
      listener.enterContextDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitContextDefinition) {
      listener.exitContextDefinition(this);
    }
  }
}

export class FluentModifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_fluentModifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterFluentModifier) {
      listener.enterFluentModifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitFluentModifier) {
      listener.exitFluentModifier(this);
    }
  }
}

export class FunctionDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext {
    return this.getRuleContext(0, IdentifierOrFunctionIdentifierContext)!;
  }
  public functionBody(): FunctionBodyContext | null {
    return this.getRuleContext(0, FunctionBodyContext);
  }
  public accessModifier(): AccessModifierContext | null {
    return this.getRuleContext(0, AccessModifierContext);
  }
  public fluentModifier(): FluentModifierContext | null {
    return this.getRuleContext(0, FluentModifierContext);
  }
  public operandDefinition(): OperandDefinitionContext[];
  public operandDefinition(i: number): OperandDefinitionContext | null;
  public operandDefinition(
    i?: number
  ): OperandDefinitionContext[] | OperandDefinitionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(OperandDefinitionContext);
    }

    return this.getRuleContext(i, OperandDefinitionContext);
  }
  public typeSpecifier(): TypeSpecifierContext | null {
    return this.getRuleContext(0, TypeSpecifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_functionDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this);
    }
  }
}

export class OperandDefinitionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public typeSpecifier(): TypeSpecifierContext {
    return this.getRuleContext(0, TypeSpecifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_operandDefinition;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterOperandDefinition) {
      listener.enterOperandDefinition(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitOperandDefinition) {
      listener.exitOperandDefinition(this);
    }
  }
}

export class FunctionBodyContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_functionBody;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterFunctionBody) {
      listener.enterFunctionBody(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitFunctionBody) {
      listener.exitFunctionBody(this);
    }
  }
}

export class QuerySourceContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public retrieve(): RetrieveContext | null {
    return this.getRuleContext(0, RetrieveContext);
  }
  public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext | null {
    return this.getRuleContext(0, QualifiedIdentifierExpressionContext);
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_querySource;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQuerySource) {
      listener.enterQuerySource(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQuerySource) {
      listener.exitQuerySource(this);
    }
  }
}

export class AliasedQuerySourceContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public querySource(): QuerySourceContext {
    return this.getRuleContext(0, QuerySourceContext)!;
  }
  public alias(): AliasContext {
    return this.getRuleContext(0, AliasContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_aliasedQuerySource;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAliasedQuerySource) {
      listener.enterAliasedQuerySource(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAliasedQuerySource) {
      listener.exitAliasedQuerySource(this);
    }
  }
}

export class AliasContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_alias;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAlias) {
      listener.enterAlias(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAlias) {
      listener.exitAlias(this);
    }
  }
}

export class QueryInclusionClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public withClause(): WithClauseContext | null {
    return this.getRuleContext(0, WithClauseContext);
  }
  public withoutClause(): WithoutClauseContext | null {
    return this.getRuleContext(0, WithoutClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_queryInclusionClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQueryInclusionClause) {
      listener.enterQueryInclusionClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQueryInclusionClause) {
      listener.exitQueryInclusionClause(this);
    }
  }
}

export class WithClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public aliasedQuerySource(): AliasedQuerySourceContext {
    return this.getRuleContext(0, AliasedQuerySourceContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_withClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterWithClause) {
      listener.enterWithClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitWithClause) {
      listener.exitWithClause(this);
    }
  }
}

export class WithoutClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public aliasedQuerySource(): AliasedQuerySourceContext {
    return this.getRuleContext(0, AliasedQuerySourceContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_withoutClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterWithoutClause) {
      listener.enterWithoutClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitWithoutClause) {
      listener.exitWithoutClause(this);
    }
  }
}

export class RetrieveContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public namedTypeSpecifier(): NamedTypeSpecifierContext {
    return this.getRuleContext(0, NamedTypeSpecifierContext)!;
  }
  public contextIdentifier(): ContextIdentifierContext | null {
    return this.getRuleContext(0, ContextIdentifierContext);
  }
  public terminology(): TerminologyContext | null {
    return this.getRuleContext(0, TerminologyContext);
  }
  public codePath(): CodePathContext | null {
    return this.getRuleContext(0, CodePathContext);
  }
  public codeComparator(): CodeComparatorContext | null {
    return this.getRuleContext(0, CodeComparatorContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_retrieve;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterRetrieve) {
      listener.enterRetrieve(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitRetrieve) {
      listener.exitRetrieve(this);
    }
  }
}

export class ContextIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext {
    return this.getRuleContext(0, QualifiedIdentifierExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_contextIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterContextIdentifier) {
      listener.enterContextIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitContextIdentifier) {
      listener.exitContextIdentifier(this);
    }
  }
}

export class CodePathContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public simplePath(): SimplePathContext {
    return this.getRuleContext(0, SimplePathContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codePath;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodePath) {
      listener.enterCodePath(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodePath) {
      listener.exitCodePath(this);
    }
  }
}

export class CodeComparatorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codeComparator;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodeComparator) {
      listener.enterCodeComparator(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodeComparator) {
      listener.exitCodeComparator(this);
    }
  }
}

export class TerminologyContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext | null {
    return this.getRuleContext(0, QualifiedIdentifierExpressionContext);
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_terminology;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTerminology) {
      listener.enterTerminology(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTerminology) {
      listener.exitTerminology(this);
    }
  }
}

export class QualifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_qualifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifier) {
      listener.enterQualifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifier) {
      listener.exitQualifier(this);
    }
  }
}

export class QueryContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public sourceClause(): SourceClauseContext {
    return this.getRuleContext(0, SourceClauseContext)!;
  }
  public letClause(): LetClauseContext | null {
    return this.getRuleContext(0, LetClauseContext);
  }
  public queryInclusionClause(): QueryInclusionClauseContext[];
  public queryInclusionClause(i: number): QueryInclusionClauseContext | null;
  public queryInclusionClause(
    i?: number
  ): QueryInclusionClauseContext[] | QueryInclusionClauseContext | null {
    if (i === undefined) {
      return this.getRuleContexts(QueryInclusionClauseContext);
    }

    return this.getRuleContext(i, QueryInclusionClauseContext);
  }
  public whereClause(): WhereClauseContext | null {
    return this.getRuleContext(0, WhereClauseContext);
  }
  public aggregateClause(): AggregateClauseContext | null {
    return this.getRuleContext(0, AggregateClauseContext);
  }
  public returnClause(): ReturnClauseContext | null {
    return this.getRuleContext(0, ReturnClauseContext);
  }
  public sortClause(): SortClauseContext | null {
    return this.getRuleContext(0, SortClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_query;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQuery) {
      listener.enterQuery(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQuery) {
      listener.exitQuery(this);
    }
  }
}

export class SourceClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public aliasedQuerySource(): AliasedQuerySourceContext[];
  public aliasedQuerySource(i: number): AliasedQuerySourceContext | null;
  public aliasedQuerySource(
    i?: number
  ): AliasedQuerySourceContext[] | AliasedQuerySourceContext | null {
    if (i === undefined) {
      return this.getRuleContexts(AliasedQuerySourceContext);
    }

    return this.getRuleContext(i, AliasedQuerySourceContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_sourceClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSourceClause) {
      listener.enterSourceClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSourceClause) {
      listener.exitSourceClause(this);
    }
  }
}

export class LetClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public letClauseItem(): LetClauseItemContext[];
  public letClauseItem(i: number): LetClauseItemContext | null;
  public letClauseItem(
    i?: number
  ): LetClauseItemContext[] | LetClauseItemContext | null {
    if (i === undefined) {
      return this.getRuleContexts(LetClauseItemContext);
    }

    return this.getRuleContext(i, LetClauseItemContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_letClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLetClause) {
      listener.enterLetClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLetClause) {
      listener.exitLetClause(this);
    }
  }
}

export class LetClauseItemContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_letClauseItem;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLetClauseItem) {
      listener.enterLetClauseItem(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLetClauseItem) {
      listener.exitLetClauseItem(this);
    }
  }
}

export class WhereClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_whereClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterWhereClause) {
      listener.enterWhereClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitWhereClause) {
      listener.exitWhereClause(this);
    }
  }
}

export class ReturnClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_returnClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterReturnClause) {
      listener.enterReturnClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitReturnClause) {
      listener.exitReturnClause(this);
    }
  }
}

export class AggregateClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public startingClause(): StartingClauseContext | null {
    return this.getRuleContext(0, StartingClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_aggregateClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAggregateClause) {
      listener.enterAggregateClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAggregateClause) {
      listener.exitAggregateClause(this);
    }
  }
}

export class StartingClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public simpleLiteral(): SimpleLiteralContext | null {
    return this.getRuleContext(0, SimpleLiteralContext);
  }
  public quantity(): QuantityContext | null {
    return this.getRuleContext(0, QuantityContext);
  }
  public expression(): ExpressionContext | null {
    return this.getRuleContext(0, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_startingClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterStartingClause) {
      listener.enterStartingClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitStartingClause) {
      listener.exitStartingClause(this);
    }
  }
}

export class SortClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public sortDirection(): SortDirectionContext | null {
    return this.getRuleContext(0, SortDirectionContext);
  }
  public sortByItem(): SortByItemContext[];
  public sortByItem(i: number): SortByItemContext | null;
  public sortByItem(
    i?: number
  ): SortByItemContext[] | SortByItemContext | null {
    if (i === undefined) {
      return this.getRuleContexts(SortByItemContext);
    }

    return this.getRuleContext(i, SortByItemContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_sortClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSortClause) {
      listener.enterSortClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSortClause) {
      listener.exitSortClause(this);
    }
  }
}

export class SortDirectionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_sortDirection;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSortDirection) {
      listener.enterSortDirection(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSortDirection) {
      listener.exitSortDirection(this);
    }
  }
}

export class SortByItemContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public sortDirection(): SortDirectionContext | null {
    return this.getRuleContext(0, SortDirectionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_sortByItem;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSortByItem) {
      listener.enterSortByItem(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSortByItem) {
      listener.exitSortByItem(this);
    }
  }
}

export class QualifiedIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)!;
  }
  public qualifier(): QualifierContext[];
  public qualifier(i: number): QualifierContext | null;
  public qualifier(i?: number): QualifierContext[] | QualifierContext | null {
    if (i === undefined) {
      return this.getRuleContexts(QualifierContext);
    }

    return this.getRuleContext(i, QualifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_qualifiedIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifiedIdentifier) {
      listener.enterQualifiedIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifiedIdentifier) {
      listener.exitQualifiedIdentifier(this);
    }
  }
}

export class QualifiedIdentifierExpressionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public qualifierExpression(): QualifierExpressionContext[];
  public qualifierExpression(i: number): QualifierExpressionContext | null;
  public qualifierExpression(
    i?: number
  ): QualifierExpressionContext[] | QualifierExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(QualifierExpressionContext);
    }

    return this.getRuleContext(i, QualifierExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_qualifiedIdentifierExpression;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifiedIdentifierExpression) {
      listener.enterQualifiedIdentifierExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifiedIdentifierExpression) {
      listener.exitQualifiedIdentifierExpression(this);
    }
  }
}

export class QualifierExpressionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_qualifierExpression;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifierExpression) {
      listener.enterQualifierExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifierExpression) {
      listener.exitQualifierExpression(this);
    }
  }
}

export class SimplePathContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_simplePath;
  }
  public override copyFrom(ctx: SimplePathContext): void {
    super.copyFrom(ctx);
  }
}
export class SimplePathIndexerContext extends SimplePathContext {
  public constructor(ctx: SimplePathContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public simplePath(): SimplePathContext {
    return this.getRuleContext(0, SimplePathContext)!;
  }
  public simpleLiteral(): SimpleLiteralContext {
    return this.getRuleContext(0, SimpleLiteralContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSimplePathIndexer) {
      listener.enterSimplePathIndexer(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSimplePathIndexer) {
      listener.exitSimplePathIndexer(this);
    }
  }
}
export class SimplePathQualifiedIdentifierContext extends SimplePathContext {
  public constructor(ctx: SimplePathContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public simplePath(): SimplePathContext {
    return this.getRuleContext(0, SimplePathContext)!;
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSimplePathQualifiedIdentifier) {
      listener.enterSimplePathQualifiedIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSimplePathQualifiedIdentifier) {
      listener.exitSimplePathQualifiedIdentifier(this);
    }
  }
}
export class SimplePathReferentialIdentifierContext extends SimplePathContext {
  public constructor(ctx: SimplePathContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSimplePathReferentialIdentifier) {
      listener.enterSimplePathReferentialIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSimplePathReferentialIdentifier) {
      listener.exitSimplePathReferentialIdentifier(this);
    }
  }
}

export class SimpleLiteralContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_simpleLiteral;
  }
  public override copyFrom(ctx: SimpleLiteralContext): void {
    super.copyFrom(ctx);
  }
}
export class SimpleNumberLiteralContext extends SimpleLiteralContext {
  public constructor(ctx: SimpleLiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public NUMBER(): antlr.TerminalNode {
    return this.getToken(cqlParser.NUMBER, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSimpleNumberLiteral) {
      listener.enterSimpleNumberLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSimpleNumberLiteral) {
      listener.exitSimpleNumberLiteral(this);
    }
  }
}
export class SimpleStringLiteralContext extends SimpleLiteralContext {
  public constructor(ctx: SimpleLiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSimpleStringLiteral) {
      listener.enterSimpleStringLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSimpleStringLiteral) {
      listener.exitSimpleStringLiteral(this);
    }
  }
}

export class ExpressionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_expression;
  }
  public override copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class DurationBetweenExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
    return this.getRuleContext(0, PluralDateTimePrecisionContext)!;
  }
  public expressionTerm(): ExpressionTermContext[];
  public expressionTerm(i: number): ExpressionTermContext | null;
  public expressionTerm(
    i?: number
  ): ExpressionTermContext[] | ExpressionTermContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionTermContext);
    }

    return this.getRuleContext(i, ExpressionTermContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDurationBetweenExpression) {
      listener.enterDurationBetweenExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDurationBetweenExpression) {
      listener.exitDurationBetweenExpression(this);
    }
  }
}
export class InFixSetExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInFixSetExpression) {
      listener.enterInFixSetExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInFixSetExpression) {
      listener.exitInFixSetExpression(this);
    }
  }
}
export class RetrieveExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public retrieve(): RetrieveContext {
    return this.getRuleContext(0, RetrieveContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterRetrieveExpression) {
      listener.enterRetrieveExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitRetrieveExpression) {
      listener.exitRetrieveExpression(this);
    }
  }
}
export class TimingExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public intervalOperatorPhrase(): IntervalOperatorPhraseContext {
    return this.getRuleContext(0, IntervalOperatorPhraseContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTimingExpression) {
      listener.enterTimingExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTimingExpression) {
      listener.exitTimingExpression(this);
    }
  }
}
export class QueryExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public query(): QueryContext {
    return this.getRuleContext(0, QueryContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQueryExpression) {
      listener.enterQueryExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQueryExpression) {
      listener.exitQueryExpression(this);
    }
  }
}
export class NotExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterNotExpression) {
      listener.enterNotExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitNotExpression) {
      listener.exitNotExpression(this);
    }
  }
}
export class BooleanExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterBooleanExpression) {
      listener.enterBooleanExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitBooleanExpression) {
      listener.exitBooleanExpression(this);
    }
  }
}
export class OrExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterOrExpression) {
      listener.enterOrExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitOrExpression) {
      listener.exitOrExpression(this);
    }
  }
}
export class CastExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public typeSpecifier(): TypeSpecifierContext {
    return this.getRuleContext(0, TypeSpecifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCastExpression) {
      listener.enterCastExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCastExpression) {
      listener.exitCastExpression(this);
    }
  }
}
export class AndExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAndExpression) {
      listener.enterAndExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAndExpression) {
      listener.exitAndExpression(this);
    }
  }
}
export class BetweenExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public expressionTerm(): ExpressionTermContext[];
  public expressionTerm(i: number): ExpressionTermContext | null;
  public expressionTerm(
    i?: number
  ): ExpressionTermContext[] | ExpressionTermContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionTermContext);
    }

    return this.getRuleContext(i, ExpressionTermContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterBetweenExpression) {
      listener.enterBetweenExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitBetweenExpression) {
      listener.exitBetweenExpression(this);
    }
  }
}
export class MembershipExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterMembershipExpression) {
      listener.enterMembershipExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitMembershipExpression) {
      listener.exitMembershipExpression(this);
    }
  }
}
export class DifferenceBetweenExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
    return this.getRuleContext(0, PluralDateTimePrecisionContext)!;
  }
  public expressionTerm(): ExpressionTermContext[];
  public expressionTerm(i: number): ExpressionTermContext | null;
  public expressionTerm(
    i?: number
  ): ExpressionTermContext[] | ExpressionTermContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionTermContext);
    }

    return this.getRuleContext(i, ExpressionTermContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDifferenceBetweenExpression) {
      listener.enterDifferenceBetweenExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDifferenceBetweenExpression) {
      listener.exitDifferenceBetweenExpression(this);
    }
  }
}
export class InequalityExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInequalityExpression) {
      listener.enterInequalityExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInequalityExpression) {
      listener.exitInequalityExpression(this);
    }
  }
}
export class EqualityExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterEqualityExpression) {
      listener.enterEqualityExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitEqualityExpression) {
      listener.exitEqualityExpression(this);
    }
  }
}
export class ExistenceExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterExistenceExpression) {
      listener.enterExistenceExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitExistenceExpression) {
      listener.exitExistenceExpression(this);
    }
  }
}
export class ImpliesExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterImpliesExpression) {
      listener.enterImpliesExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitImpliesExpression) {
      listener.exitImpliesExpression(this);
    }
  }
}
export class TermExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTermExpression) {
      listener.enterTermExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTermExpression) {
      listener.exitTermExpression(this);
    }
  }
}
export class TypeExpressionContext extends ExpressionContext {
  public constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public typeSpecifier(): TypeSpecifierContext {
    return this.getRuleContext(0, TypeSpecifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTypeExpression) {
      listener.enterTypeExpression(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTypeExpression) {
      listener.exitTypeExpression(this);
    }
  }
}

export class DateTimePrecisionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_dateTimePrecision;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDateTimePrecision) {
      listener.enterDateTimePrecision(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDateTimePrecision) {
      listener.exitDateTimePrecision(this);
    }
  }
}

export class DateTimeComponentContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public dateTimePrecision(): DateTimePrecisionContext | null {
    return this.getRuleContext(0, DateTimePrecisionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_dateTimeComponent;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDateTimeComponent) {
      listener.enterDateTimeComponent(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDateTimeComponent) {
      listener.exitDateTimeComponent(this);
    }
  }
}

export class PluralDateTimePrecisionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_pluralDateTimePrecision;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterPluralDateTimePrecision) {
      listener.enterPluralDateTimePrecision(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitPluralDateTimePrecision) {
      listener.exitPluralDateTimePrecision(this);
    }
  }
}

export class ExpressionTermContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_expressionTerm;
  }
  public override copyFrom(ctx: ExpressionTermContext): void {
    super.copyFrom(ctx);
  }
}
export class AdditionExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext[];
  public expressionTerm(i: number): ExpressionTermContext | null;
  public expressionTerm(
    i?: number
  ): ExpressionTermContext[] | ExpressionTermContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionTermContext);
    }

    return this.getRuleContext(i, ExpressionTermContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAdditionExpressionTerm) {
      listener.enterAdditionExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAdditionExpressionTerm) {
      listener.exitAdditionExpressionTerm(this);
    }
  }
}
export class IndexedExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIndexedExpressionTerm) {
      listener.enterIndexedExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIndexedExpressionTerm) {
      listener.exitIndexedExpressionTerm(this);
    }
  }
}
export class WidthExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterWidthExpressionTerm) {
      listener.enterWidthExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitWidthExpressionTerm) {
      listener.exitWidthExpressionTerm(this);
    }
  }
}
export class SetAggregateExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public dateTimePrecision(): DateTimePrecisionContext | null {
    return this.getRuleContext(0, DateTimePrecisionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSetAggregateExpressionTerm) {
      listener.enterSetAggregateExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSetAggregateExpressionTerm) {
      listener.exitSetAggregateExpressionTerm(this);
    }
  }
}
export class TimeUnitExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimeComponent(): DateTimeComponentContext {
    return this.getRuleContext(0, DateTimeComponentContext)!;
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTimeUnitExpressionTerm) {
      listener.enterTimeUnitExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTimeUnitExpressionTerm) {
      listener.exitTimeUnitExpressionTerm(this);
    }
  }
}
export class IfThenElseExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIfThenElseExpressionTerm) {
      listener.enterIfThenElseExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIfThenElseExpressionTerm) {
      listener.exitIfThenElseExpressionTerm(this);
    }
  }
}
export class TimeBoundaryExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTimeBoundaryExpressionTerm) {
      listener.enterTimeBoundaryExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTimeBoundaryExpressionTerm) {
      listener.exitTimeBoundaryExpressionTerm(this);
    }
  }
}
export class ElementExtractorExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterElementExtractorExpressionTerm) {
      listener.enterElementExtractorExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitElementExtractorExpressionTerm) {
      listener.exitElementExtractorExpressionTerm(this);
    }
  }
}
export class ConversionExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public typeSpecifier(): TypeSpecifierContext | null {
    return this.getRuleContext(0, TypeSpecifierContext);
  }
  public unit(): UnitContext | null {
    return this.getRuleContext(0, UnitContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterConversionExpressionTerm) {
      listener.enterConversionExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitConversionExpressionTerm) {
      listener.exitConversionExpressionTerm(this);
    }
  }
}
export class TypeExtentExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public namedTypeSpecifier(): NamedTypeSpecifierContext {
    return this.getRuleContext(0, NamedTypeSpecifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTypeExtentExpressionTerm) {
      listener.enterTypeExtentExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTypeExtentExpressionTerm) {
      listener.exitTypeExtentExpressionTerm(this);
    }
  }
}
export class PredecessorExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterPredecessorExpressionTerm) {
      listener.enterPredecessorExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitPredecessorExpressionTerm) {
      listener.exitPredecessorExpressionTerm(this);
    }
  }
}
export class PointExtractorExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterPointExtractorExpressionTerm) {
      listener.enterPointExtractorExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitPointExtractorExpressionTerm) {
      listener.exitPointExtractorExpressionTerm(this);
    }
  }
}
export class MultiplicationExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext[];
  public expressionTerm(i: number): ExpressionTermContext | null;
  public expressionTerm(
    i?: number
  ): ExpressionTermContext[] | ExpressionTermContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionTermContext);
    }

    return this.getRuleContext(i, ExpressionTermContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterMultiplicationExpressionTerm) {
      listener.enterMultiplicationExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitMultiplicationExpressionTerm) {
      listener.exitMultiplicationExpressionTerm(this);
    }
  }
}
export class AggregateExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterAggregateExpressionTerm) {
      listener.enterAggregateExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitAggregateExpressionTerm) {
      listener.exitAggregateExpressionTerm(this);
    }
  }
}
export class DurationExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
    return this.getRuleContext(0, PluralDateTimePrecisionContext)!;
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDurationExpressionTerm) {
      listener.enterDurationExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDurationExpressionTerm) {
      listener.exitDurationExpressionTerm(this);
    }
  }
}
export class DifferenceExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
    return this.getRuleContext(0, PluralDateTimePrecisionContext)!;
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDifferenceExpressionTerm) {
      listener.enterDifferenceExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDifferenceExpressionTerm) {
      listener.exitDifferenceExpressionTerm(this);
    }
  }
}
export class CaseExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public caseExpressionItem(): CaseExpressionItemContext[];
  public caseExpressionItem(i: number): CaseExpressionItemContext | null;
  public caseExpressionItem(
    i?: number
  ): CaseExpressionItemContext[] | CaseExpressionItemContext | null {
    if (i === undefined) {
      return this.getRuleContexts(CaseExpressionItemContext);
    }

    return this.getRuleContext(i, CaseExpressionItemContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCaseExpressionTerm) {
      listener.enterCaseExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCaseExpressionTerm) {
      listener.exitCaseExpressionTerm(this);
    }
  }
}
export class PowerExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext[];
  public expressionTerm(i: number): ExpressionTermContext | null;
  public expressionTerm(
    i?: number
  ): ExpressionTermContext[] | ExpressionTermContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionTermContext);
    }

    return this.getRuleContext(i, ExpressionTermContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterPowerExpressionTerm) {
      listener.enterPowerExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitPowerExpressionTerm) {
      listener.exitPowerExpressionTerm(this);
    }
  }
}
export class SuccessorExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterSuccessorExpressionTerm) {
      listener.enterSuccessorExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitSuccessorExpressionTerm) {
      listener.exitSuccessorExpressionTerm(this);
    }
  }
}
export class PolarityExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterPolarityExpressionTerm) {
      listener.enterPolarityExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitPolarityExpressionTerm) {
      listener.exitPolarityExpressionTerm(this);
    }
  }
}
export class TermExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public term(): TermContext {
    return this.getRuleContext(0, TermContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTermExpressionTerm) {
      listener.enterTermExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTermExpressionTerm) {
      listener.exitTermExpressionTerm(this);
    }
  }
}
export class InvocationExpressionTermContext extends ExpressionTermContext {
  public constructor(ctx: ExpressionTermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expressionTerm(): ExpressionTermContext {
    return this.getRuleContext(0, ExpressionTermContext)!;
  }
  public qualifiedInvocation(): QualifiedInvocationContext {
    return this.getRuleContext(0, QualifiedInvocationContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInvocationExpressionTerm) {
      listener.enterInvocationExpressionTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInvocationExpressionTerm) {
      listener.exitInvocationExpressionTerm(this);
    }
  }
}

export class CaseExpressionItemContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_caseExpressionItem;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCaseExpressionItem) {
      listener.enterCaseExpressionItem(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCaseExpressionItem) {
      listener.exitCaseExpressionItem(this);
    }
  }
}

export class DateTimePrecisionSpecifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public dateTimePrecision(): DateTimePrecisionContext {
    return this.getRuleContext(0, DateTimePrecisionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_dateTimePrecisionSpecifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDateTimePrecisionSpecifier) {
      listener.enterDateTimePrecisionSpecifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDateTimePrecisionSpecifier) {
      listener.exitDateTimePrecisionSpecifier(this);
    }
  }
}

export class RelativeQualifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_relativeQualifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterRelativeQualifier) {
      listener.enterRelativeQualifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitRelativeQualifier) {
      listener.exitRelativeQualifier(this);
    }
  }
}

export class OffsetRelativeQualifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_offsetRelativeQualifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterOffsetRelativeQualifier) {
      listener.enterOffsetRelativeQualifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitOffsetRelativeQualifier) {
      listener.exitOffsetRelativeQualifier(this);
    }
  }
}

export class ExclusiveRelativeQualifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_exclusiveRelativeQualifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterExclusiveRelativeQualifier) {
      listener.enterExclusiveRelativeQualifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitExclusiveRelativeQualifier) {
      listener.exitExclusiveRelativeQualifier(this);
    }
  }
}

export class QuantityOffsetContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public quantity(): QuantityContext | null {
    return this.getRuleContext(0, QuantityContext);
  }
  public offsetRelativeQualifier(): OffsetRelativeQualifierContext | null {
    return this.getRuleContext(0, OffsetRelativeQualifierContext);
  }
  public exclusiveRelativeQualifier(): ExclusiveRelativeQualifierContext | null {
    return this.getRuleContext(0, ExclusiveRelativeQualifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_quantityOffset;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQuantityOffset) {
      listener.enterQuantityOffset(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQuantityOffset) {
      listener.exitQuantityOffset(this);
    }
  }
}

export class TemporalRelationshipContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_temporalRelationship;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTemporalRelationship) {
      listener.enterTemporalRelationship(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTemporalRelationship) {
      listener.exitTemporalRelationship(this);
    }
  }
}

export class IntervalOperatorPhraseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_intervalOperatorPhrase;
  }
  public override copyFrom(ctx: IntervalOperatorPhraseContext): void {
    super.copyFrom(ctx);
  }
}
export class WithinIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public quantity(): QuantityContext {
    return this.getRuleContext(0, QuantityContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterWithinIntervalOperatorPhrase) {
      listener.enterWithinIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitWithinIntervalOperatorPhrase) {
      listener.exitWithinIntervalOperatorPhrase(this);
    }
  }
}
export class IncludedInIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIncludedInIntervalOperatorPhrase) {
      listener.enterIncludedInIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIncludedInIntervalOperatorPhrase) {
      listener.exitIncludedInIntervalOperatorPhrase(this);
    }
  }
}
export class EndsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterEndsIntervalOperatorPhrase) {
      listener.enterEndsIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitEndsIntervalOperatorPhrase) {
      listener.exitEndsIntervalOperatorPhrase(this);
    }
  }
}
export class ConcurrentWithIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public relativeQualifier(): RelativeQualifierContext | null {
    return this.getRuleContext(0, RelativeQualifierContext);
  }
  public dateTimePrecision(): DateTimePrecisionContext | null {
    return this.getRuleContext(0, DateTimePrecisionContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterConcurrentWithIntervalOperatorPhrase) {
      listener.enterConcurrentWithIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitConcurrentWithIntervalOperatorPhrase) {
      listener.exitConcurrentWithIntervalOperatorPhrase(this);
    }
  }
}
export class OverlapsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterOverlapsIntervalOperatorPhrase) {
      listener.enterOverlapsIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitOverlapsIntervalOperatorPhrase) {
      listener.exitOverlapsIntervalOperatorPhrase(this);
    }
  }
}
export class IncludesIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIncludesIntervalOperatorPhrase) {
      listener.enterIncludesIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIncludesIntervalOperatorPhrase) {
      listener.exitIncludesIntervalOperatorPhrase(this);
    }
  }
}
export class BeforeOrAfterIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public temporalRelationship(): TemporalRelationshipContext {
    return this.getRuleContext(0, TemporalRelationshipContext)!;
  }
  public quantityOffset(): QuantityOffsetContext | null {
    return this.getRuleContext(0, QuantityOffsetContext);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterBeforeOrAfterIntervalOperatorPhrase) {
      listener.enterBeforeOrAfterIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitBeforeOrAfterIntervalOperatorPhrase) {
      listener.exitBeforeOrAfterIntervalOperatorPhrase(this);
    }
  }
}
export class MeetsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterMeetsIntervalOperatorPhrase) {
      listener.enterMeetsIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitMeetsIntervalOperatorPhrase) {
      listener.exitMeetsIntervalOperatorPhrase(this);
    }
  }
}
export class StartsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
  public constructor(ctx: IntervalOperatorPhraseContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | null {
    return this.getRuleContext(0, DateTimePrecisionSpecifierContext);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterStartsIntervalOperatorPhrase) {
      listener.enterStartsIntervalOperatorPhrase(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitStartsIntervalOperatorPhrase) {
      listener.exitStartsIntervalOperatorPhrase(this);
    }
  }
}

export class TermContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_term;
  }
  public override copyFrom(ctx: TermContext): void {
    super.copyFrom(ctx);
  }
}
export class ExternalConstantTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public externalConstant(): ExternalConstantContext {
    return this.getRuleContext(0, ExternalConstantContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterExternalConstantTerm) {
      listener.enterExternalConstantTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitExternalConstantTerm) {
      listener.exitExternalConstantTerm(this);
    }
  }
}
export class TupleSelectorTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public tupleSelector(): TupleSelectorContext {
    return this.getRuleContext(0, TupleSelectorContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTupleSelectorTerm) {
      listener.enterTupleSelectorTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTupleSelectorTerm) {
      listener.exitTupleSelectorTerm(this);
    }
  }
}
export class LiteralTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public literal(): LiteralContext {
    return this.getRuleContext(0, LiteralContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLiteralTerm) {
      listener.enterLiteralTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLiteralTerm) {
      listener.exitLiteralTerm(this);
    }
  }
}
export class ConceptSelectorTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public conceptSelector(): ConceptSelectorContext {
    return this.getRuleContext(0, ConceptSelectorContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterConceptSelectorTerm) {
      listener.enterConceptSelectorTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitConceptSelectorTerm) {
      listener.exitConceptSelectorTerm(this);
    }
  }
}
export class ParenthesizedTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterParenthesizedTerm) {
      listener.enterParenthesizedTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitParenthesizedTerm) {
      listener.exitParenthesizedTerm(this);
    }
  }
}
export class CodeSelectorTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public codeSelector(): CodeSelectorContext {
    return this.getRuleContext(0, CodeSelectorContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodeSelectorTerm) {
      listener.enterCodeSelectorTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodeSelectorTerm) {
      listener.exitCodeSelectorTerm(this);
    }
  }
}
export class InvocationTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public invocation(): InvocationContext {
    return this.getRuleContext(0, InvocationContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInvocationTerm) {
      listener.enterInvocationTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInvocationTerm) {
      listener.exitInvocationTerm(this);
    }
  }
}
export class InstanceSelectorTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public instanceSelector(): InstanceSelectorContext {
    return this.getRuleContext(0, InstanceSelectorContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInstanceSelectorTerm) {
      listener.enterInstanceSelectorTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInstanceSelectorTerm) {
      listener.exitInstanceSelectorTerm(this);
    }
  }
}
export class IntervalSelectorTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public intervalSelector(): IntervalSelectorContext {
    return this.getRuleContext(0, IntervalSelectorContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIntervalSelectorTerm) {
      listener.enterIntervalSelectorTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIntervalSelectorTerm) {
      listener.exitIntervalSelectorTerm(this);
    }
  }
}
export class ListSelectorTermContext extends TermContext {
  public constructor(ctx: TermContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public listSelector(): ListSelectorContext {
    return this.getRuleContext(0, ListSelectorContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterListSelectorTerm) {
      listener.enterListSelectorTerm(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitListSelectorTerm) {
      listener.exitListSelectorTerm(this);
    }
  }
}

export class QualifiedInvocationContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_qualifiedInvocation;
  }
  public override copyFrom(ctx: QualifiedInvocationContext): void {
    super.copyFrom(ctx);
  }
}
export class QualifiedFunctionInvocationContext extends QualifiedInvocationContext {
  public constructor(ctx: QualifiedInvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public qualifiedFunction(): QualifiedFunctionContext {
    return this.getRuleContext(0, QualifiedFunctionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifiedFunctionInvocation) {
      listener.enterQualifiedFunctionInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifiedFunctionInvocation) {
      listener.exitQualifiedFunctionInvocation(this);
    }
  }
}
export class QualifiedMemberInvocationContext extends QualifiedInvocationContext {
  public constructor(ctx: QualifiedInvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifiedMemberInvocation) {
      listener.enterQualifiedMemberInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifiedMemberInvocation) {
      listener.exitQualifiedMemberInvocation(this);
    }
  }
}

export class QualifiedFunctionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext {
    return this.getRuleContext(0, IdentifierOrFunctionIdentifierContext)!;
  }
  public paramList(): ParamListContext | null {
    return this.getRuleContext(0, ParamListContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_qualifiedFunction;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQualifiedFunction) {
      listener.enterQualifiedFunction(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQualifiedFunction) {
      listener.exitQualifiedFunction(this);
    }
  }
}

export class InvocationContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_invocation;
  }
  public override copyFrom(ctx: InvocationContext): void {
    super.copyFrom(ctx);
  }
}
export class TotalInvocationContext extends InvocationContext {
  public constructor(ctx: InvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTotalInvocation) {
      listener.enterTotalInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTotalInvocation) {
      listener.exitTotalInvocation(this);
    }
  }
}
export class ThisInvocationContext extends InvocationContext {
  public constructor(ctx: InvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterThisInvocation) {
      listener.enterThisInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitThisInvocation) {
      listener.exitThisInvocation(this);
    }
  }
}
export class IndexInvocationContext extends InvocationContext {
  public constructor(ctx: InvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIndexInvocation) {
      listener.enterIndexInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIndexInvocation) {
      listener.exitIndexInvocation(this);
    }
  }
}
export class FunctionInvocationContext extends InvocationContext {
  public constructor(ctx: InvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public function(): FunctionContext {
    return this.getRuleContext(0, FunctionContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterFunctionInvocation) {
      listener.enterFunctionInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitFunctionInvocation) {
      listener.exitFunctionInvocation(this);
    }
  }
}
export class MemberInvocationContext extends InvocationContext {
  public constructor(ctx: InvocationContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterMemberInvocation) {
      listener.enterMemberInvocation(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitMemberInvocation) {
      listener.exitMemberInvocation(this);
    }
  }
}

export class FunctionContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public paramList(): ParamListContext | null {
    return this.getRuleContext(0, ParamListContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_function;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this);
    }
  }
}

export class RatioContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public quantity(): QuantityContext[];
  public quantity(i: number): QuantityContext | null;
  public quantity(i?: number): QuantityContext[] | QuantityContext | null {
    if (i === undefined) {
      return this.getRuleContexts(QuantityContext);
    }

    return this.getRuleContext(i, QuantityContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_ratio;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterRatio) {
      listener.enterRatio(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitRatio) {
      listener.exitRatio(this);
    }
  }
}

export class LiteralContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_literal;
  }
  public override copyFrom(ctx: LiteralContext): void {
    super.copyFrom(ctx);
  }
}
export class TimeLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public TIME(): antlr.TerminalNode {
    return this.getToken(cqlParser.TIME, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTimeLiteral) {
      listener.enterTimeLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTimeLiteral) {
      listener.exitTimeLiteral(this);
    }
  }
}
export class NullLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterNullLiteral) {
      listener.enterNullLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitNullLiteral) {
      listener.exitNullLiteral(this);
    }
  }
}
export class RatioLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ratio(): RatioContext {
    return this.getRuleContext(0, RatioContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterRatioLiteral) {
      listener.enterRatioLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitRatioLiteral) {
      listener.exitRatioLiteral(this);
    }
  }
}
export class DateTimeLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public DATETIME(): antlr.TerminalNode {
    return this.getToken(cqlParser.DATETIME, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDateTimeLiteral) {
      listener.enterDateTimeLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDateTimeLiteral) {
      listener.exitDateTimeLiteral(this);
    }
  }
}
export class StringLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterStringLiteral) {
      listener.enterStringLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitStringLiteral) {
      listener.exitStringLiteral(this);
    }
  }
}
export class DateLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public DATE(): antlr.TerminalNode {
    return this.getToken(cqlParser.DATE, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDateLiteral) {
      listener.enterDateLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDateLiteral) {
      listener.exitDateLiteral(this);
    }
  }
}
export class BooleanLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterBooleanLiteral) {
      listener.enterBooleanLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitBooleanLiteral) {
      listener.exitBooleanLiteral(this);
    }
  }
}
export class NumberLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public NUMBER(): antlr.TerminalNode {
    return this.getToken(cqlParser.NUMBER, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterNumberLiteral) {
      listener.enterNumberLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitNumberLiteral) {
      listener.exitNumberLiteral(this);
    }
  }
}
export class LongNumberLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LONGNUMBER(): antlr.TerminalNode {
    return this.getToken(cqlParser.LONGNUMBER, 0)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterLongNumberLiteral) {
      listener.enterLongNumberLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitLongNumberLiteral) {
      listener.exitLongNumberLiteral(this);
    }
  }
}
export class QuantityLiteralContext extends LiteralContext {
  public constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public quantity(): QuantityContext {
    return this.getRuleContext(0, QuantityContext)!;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQuantityLiteral) {
      listener.enterQuantityLiteral(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQuantityLiteral) {
      listener.exitQuantityLiteral(this);
    }
  }
}

export class IntervalSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_intervalSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIntervalSelector) {
      listener.enterIntervalSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIntervalSelector) {
      listener.exitIntervalSelector(this);
    }
  }
}

export class TupleSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public tupleElementSelector(): TupleElementSelectorContext[];
  public tupleElementSelector(i: number): TupleElementSelectorContext | null;
  public tupleElementSelector(
    i?: number
  ): TupleElementSelectorContext[] | TupleElementSelectorContext | null {
    if (i === undefined) {
      return this.getRuleContexts(TupleElementSelectorContext);
    }

    return this.getRuleContext(i, TupleElementSelectorContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_tupleSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTupleSelector) {
      listener.enterTupleSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTupleSelector) {
      listener.exitTupleSelector(this);
    }
  }
}

export class TupleElementSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_tupleElementSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTupleElementSelector) {
      listener.enterTupleElementSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTupleElementSelector) {
      listener.exitTupleElementSelector(this);
    }
  }
}

export class InstanceSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public namedTypeSpecifier(): NamedTypeSpecifierContext {
    return this.getRuleContext(0, NamedTypeSpecifierContext)!;
  }
  public instanceElementSelector(): InstanceElementSelectorContext[];
  public instanceElementSelector(
    i: number
  ): InstanceElementSelectorContext | null;
  public instanceElementSelector(
    i?: number
  ): InstanceElementSelectorContext[] | InstanceElementSelectorContext | null {
    if (i === undefined) {
      return this.getRuleContexts(InstanceElementSelectorContext);
    }

    return this.getRuleContext(i, InstanceElementSelectorContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_instanceSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInstanceSelector) {
      listener.enterInstanceSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInstanceSelector) {
      listener.exitInstanceSelector(this);
    }
  }
}

export class InstanceElementSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext {
    return this.getRuleContext(0, ReferentialIdentifierContext)!;
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_instanceElementSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterInstanceElementSelector) {
      listener.enterInstanceElementSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitInstanceElementSelector) {
      listener.exitInstanceElementSelector(this);
    }
  }
}

export class ListSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public typeSpecifier(): TypeSpecifierContext | null {
    return this.getRuleContext(0, TypeSpecifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_listSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterListSelector) {
      listener.enterListSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitListSelector) {
      listener.exitListSelector(this);
    }
  }
}

export class DisplayClauseContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_displayClause;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterDisplayClause) {
      listener.enterDisplayClause(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitDisplayClause) {
      listener.exitDisplayClause(this);
    }
  }
}

export class CodeSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public STRING(): antlr.TerminalNode {
    return this.getToken(cqlParser.STRING, 0)!;
  }
  public codesystemIdentifier(): CodesystemIdentifierContext {
    return this.getRuleContext(0, CodesystemIdentifierContext)!;
  }
  public displayClause(): DisplayClauseContext | null {
    return this.getRuleContext(0, DisplayClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_codeSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterCodeSelector) {
      listener.enterCodeSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitCodeSelector) {
      listener.exitCodeSelector(this);
    }
  }
}

export class ConceptSelectorContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public codeSelector(): CodeSelectorContext[];
  public codeSelector(i: number): CodeSelectorContext | null;
  public codeSelector(
    i?: number
  ): CodeSelectorContext[] | CodeSelectorContext | null {
    if (i === undefined) {
      return this.getRuleContexts(CodeSelectorContext);
    }

    return this.getRuleContext(i, CodeSelectorContext);
  }
  public displayClause(): DisplayClauseContext | null {
    return this.getRuleContext(0, DisplayClauseContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_conceptSelector;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterConceptSelector) {
      listener.enterConceptSelector(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitConceptSelector) {
      listener.exitConceptSelector(this);
    }
  }
}

export class KeywordContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_keyword;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterKeyword) {
      listener.enterKeyword(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitKeyword) {
      listener.exitKeyword(this);
    }
  }
}

export class ReservedWordContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_reservedWord;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterReservedWord) {
      listener.enterReservedWord(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitReservedWord) {
      listener.exitReservedWord(this);
    }
  }
}

export class KeywordIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_keywordIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterKeywordIdentifier) {
      listener.enterKeywordIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitKeywordIdentifier) {
      listener.exitKeywordIdentifier(this);
    }
  }
}

export class ObsoleteIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_obsoleteIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterObsoleteIdentifier) {
      listener.enterObsoleteIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitObsoleteIdentifier) {
      listener.exitObsoleteIdentifier(this);
    }
  }
}

export class FunctionIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_functionIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterFunctionIdentifier) {
      listener.enterFunctionIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitFunctionIdentifier) {
      listener.exitFunctionIdentifier(this);
    }
  }
}

export class TypeNameIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_typeNameIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterTypeNameIdentifier) {
      listener.enterTypeNameIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitTypeNameIdentifier) {
      listener.exitTypeNameIdentifier(this);
    }
  }
}

export class ReferentialIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext | null {
    return this.getRuleContext(0, IdentifierContext);
  }
  public keywordIdentifier(): KeywordIdentifierContext | null {
    return this.getRuleContext(0, KeywordIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_referentialIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterReferentialIdentifier) {
      listener.enterReferentialIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitReferentialIdentifier) {
      listener.exitReferentialIdentifier(this);
    }
  }
}

export class ReferentialOrTypeNameIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public referentialIdentifier(): ReferentialIdentifierContext | null {
    return this.getRuleContext(0, ReferentialIdentifierContext);
  }
  public typeNameIdentifier(): TypeNameIdentifierContext | null {
    return this.getRuleContext(0, TypeNameIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_referentialOrTypeNameIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterReferentialOrTypeNameIdentifier) {
      listener.enterReferentialOrTypeNameIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitReferentialOrTypeNameIdentifier) {
      listener.exitReferentialOrTypeNameIdentifier(this);
    }
  }
}

export class IdentifierOrFunctionIdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext | null {
    return this.getRuleContext(0, IdentifierContext);
  }
  public functionIdentifier(): FunctionIdentifierContext | null {
    return this.getRuleContext(0, FunctionIdentifierContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_identifierOrFunctionIdentifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIdentifierOrFunctionIdentifier) {
      listener.enterIdentifierOrFunctionIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIdentifierOrFunctionIdentifier) {
      listener.exitIdentifierOrFunctionIdentifier(this);
    }
  }
}

export class IdentifierContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public IDENTIFIER(): antlr.TerminalNode | null {
    return this.getToken(cqlParser.IDENTIFIER, 0);
  }
  public DELIMITEDIDENTIFIER(): antlr.TerminalNode | null {
    return this.getToken(cqlParser.DELIMITEDIDENTIFIER, 0);
  }
  public QUOTEDIDENTIFIER(): antlr.TerminalNode | null {
    return this.getToken(cqlParser.QUOTEDIDENTIFIER, 0);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_identifier;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
}

export class ExternalConstantContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public identifier(): IdentifierContext | null {
    return this.getRuleContext(0, IdentifierContext);
  }
  public STRING(): antlr.TerminalNode | null {
    return this.getToken(cqlParser.STRING, 0);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_externalConstant;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterExternalConstant) {
      listener.enterExternalConstant(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitExternalConstant) {
      listener.exitExternalConstant(this);
    }
  }
}

export class ParamListContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext | null;
  public expression(
    i?: number
  ): ExpressionContext[] | ExpressionContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    }

    return this.getRuleContext(i, ExpressionContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_paramList;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterParamList) {
      listener.enterParamList(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitParamList) {
      listener.exitParamList(this);
    }
  }
}

export class QuantityContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public NUMBER(): antlr.TerminalNode {
    return this.getToken(cqlParser.NUMBER, 0)!;
  }
  public unit(): UnitContext | null {
    return this.getRuleContext(0, UnitContext);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_quantity;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterQuantity) {
      listener.enterQuantity(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitQuantity) {
      listener.exitQuantity(this);
    }
  }
}

export class UnitContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public dateTimePrecision(): DateTimePrecisionContext | null {
    return this.getRuleContext(0, DateTimePrecisionContext);
  }
  public pluralDateTimePrecision(): PluralDateTimePrecisionContext | null {
    return this.getRuleContext(0, PluralDateTimePrecisionContext);
  }
  public STRING(): antlr.TerminalNode | null {
    return this.getToken(cqlParser.STRING, 0);
  }
  public override get ruleIndex(): number {
    return cqlParser.RULE_unit;
  }
  public override enterRule(listener: cqlListener): void {
    if (listener.enterUnit) {
      listener.enterUnit(this);
    }
  }
  public override exitRule(listener: cqlListener): void {
    if (listener.exitUnit) {
      listener.exitUnit(this);
    }
  }
}
