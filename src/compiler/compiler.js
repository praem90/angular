'use strict';function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var runtime_compiler_1 = require("./runtime_compiler");
var template_compiler_1 = require('./template_compiler');
exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
var directive_metadata_1 = require('./directive_metadata');
exports.CompileDirectiveMetadata = directive_metadata_1.CompileDirectiveMetadata;
exports.CompileTypeMetadata = directive_metadata_1.CompileTypeMetadata;
exports.CompileTemplateMetadata = directive_metadata_1.CompileTemplateMetadata;
var source_module_1 = require('./source_module');
exports.SourceModule = source_module_1.SourceModule;
exports.SourceWithImports = source_module_1.SourceWithImports;
var platform_directives_and_pipes_1 = require('angular2/src/core/platform_directives_and_pipes');
exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
__export(require('angular2/src/compiler/template_ast'));
var template_parser_1 = require('angular2/src/compiler/template_parser');
exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var template_parser_2 = require('angular2/src/compiler/template_parser');
var html_parser_1 = require('angular2/src/compiler/html_parser');
var template_normalizer_1 = require('angular2/src/compiler/template_normalizer');
var runtime_metadata_1 = require('angular2/src/compiler/runtime_metadata');
var change_detector_compiler_1 = require('angular2/src/compiler/change_detector_compiler');
var style_compiler_1 = require('angular2/src/compiler/style_compiler');
var command_compiler_1 = require('angular2/src/compiler/command_compiler');
var template_compiler_2 = require('angular2/src/compiler/template_compiler');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var compiler_1 = require('angular2/src/core/linker/compiler');
var runtime_compiler_2 = require('angular2/src/compiler/runtime_compiler');
var element_schema_registry_1 = require('angular2/src/compiler/schema/element_schema_registry');
var dom_element_schema_registry_1 = require('angular2/src/compiler/schema/dom_element_schema_registry');
var url_resolver_1 = require('angular2/src/compiler/url_resolver');
var change_detection_2 = require('angular2/src/core/change_detection/change_detection');
function _createChangeDetectorGenConfig() {
    return new change_detection_1.ChangeDetectorGenConfig(lang_1.assertionsEnabled(), false, true);
}
exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
    change_detection_2.Lexer,
    change_detection_2.Parser,
    html_parser_1.HtmlParser,
    template_parser_2.TemplateParser,
    template_normalizer_1.TemplateNormalizer,
    runtime_metadata_1.RuntimeMetadataResolver,
    url_resolver_1.DEFAULT_PACKAGE_URL_PROVIDER,
    style_compiler_1.StyleCompiler,
    command_compiler_1.CommandCompiler,
    change_detector_compiler_1.ChangeDetectionCompiler,
    new di_1.Provider(change_detection_1.ChangeDetectorGenConfig, { useFactory: _createChangeDetectorGenConfig, deps: [] }),
    template_compiler_2.TemplateCompiler,
    new di_1.Provider(runtime_compiler_2.RuntimeCompiler, { useClass: runtime_compiler_1.RuntimeCompiler_ }),
    new di_1.Provider(compiler_1.Compiler, { useExisting: runtime_compiler_2.RuntimeCompiler }),
    dom_element_schema_registry_1.DomElementSchemaRegistry,
    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
    url_resolver_1.UrlResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOlsiX2NyZWF0ZUNoYW5nZURldGVjdG9yR2VuQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBK0Isb0JBQW9CLENBQUMsQ0FBQTtBQUNwRCxrQ0FBK0IscUJBQXFCLENBQUM7QUFBN0MsZ0VBQTZDO0FBQ3JELG1DQUlPLHNCQUFzQixDQUFDO0FBSDVCLGlGQUF3QjtBQUN4Qix1RUFBbUI7QUFDbkIsK0VBQzRCO0FBQzlCLDhCQUE4QyxpQkFBaUIsQ0FBQztBQUF4RCxvREFBWTtBQUFFLDhEQUEwQztBQUNoRSw4Q0FBa0QsaURBQWlELENBQUM7QUFBNUYsa0ZBQW1CO0FBQUUsd0VBQXVFO0FBQ3BHLGlCQUFjLG9DQUFvQyxDQUFDLEVBQUE7QUFDbkQsZ0NBQWtDLHVDQUF1QyxDQUFDO0FBQWxFLG9FQUFrRTtBQUMxRSxxQkFBa0QsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RSxtQkFBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNyRSw0QkFBeUIsbUNBQW1DLENBQUMsQ0FBQTtBQUM3RCxvQ0FBaUMsMkNBQTJDLENBQUMsQ0FBQTtBQUM3RSxpQ0FBc0Msd0NBQXdDLENBQUMsQ0FBQTtBQUMvRSx5Q0FBc0MsZ0RBQWdELENBQUMsQ0FBQTtBQUN2RiwrQkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNuRSxpQ0FBOEIsd0NBQXdDLENBQUMsQ0FBQTtBQUN2RSxrQ0FBK0IseUNBQXlDLENBQUMsQ0FBQTtBQUN6RSxpQ0FBc0MscURBQXFELENBQUMsQ0FBQTtBQUM1Rix5QkFBdUIsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRCxpQ0FBOEIsd0NBQXdDLENBQUMsQ0FBQTtBQUN2RSx3Q0FBb0Msc0RBQXNELENBQUMsQ0FBQTtBQUMzRiw0Q0FBdUMsMERBQTBELENBQUMsQ0FBQTtBQUNsRyw2QkFBd0Qsb0NBQW9DLENBQUMsQ0FBQTtBQUM3RixpQ0FBNEIscURBQXFELENBQUMsQ0FBQTtBQUVsRjtJQUNFQSxNQUFNQSxDQUFDQSxJQUFJQSwwQ0FBdUJBLENBQUNBLHdCQUFpQkEsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkVBLENBQUNBO0FBRVksMEJBQWtCLEdBQW1DLGlCQUFVLENBQUM7SUFDM0Usd0JBQUs7SUFDTCx5QkFBTTtJQUNOLHdCQUFVO0lBQ1YsZ0NBQWM7SUFDZCx3Q0FBa0I7SUFDbEIsMENBQXVCO0lBQ3ZCLDJDQUE0QjtJQUM1Qiw4QkFBYTtJQUNiLGtDQUFlO0lBQ2Ysa0RBQXVCO0lBQ3ZCLElBQUksYUFBUSxDQUFDLDBDQUF1QixFQUFFLEVBQUMsVUFBVSxFQUFFLDhCQUE4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUM3RixvQ0FBZ0I7SUFDaEIsSUFBSSxhQUFRLENBQUMsa0NBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxtQ0FBZ0IsRUFBQyxDQUFDO0lBQzNELElBQUksYUFBUSxDQUFDLG1CQUFRLEVBQUUsRUFBQyxXQUFXLEVBQUUsa0NBQWUsRUFBQyxDQUFDO0lBQ3RELHNEQUF3QjtJQUN4QixJQUFJLGFBQVEsQ0FBQywrQ0FBcUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxzREFBd0IsRUFBQyxDQUFDO0lBQzVFLDBCQUFXO0NBQ1osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSdW50aW1lQ29tcGlsZXJffSBmcm9tIFwiLi9ydW50aW1lX2NvbXBpbGVyXCI7XG5leHBvcnQge1RlbXBsYXRlQ29tcGlsZXJ9IGZyb20gJy4vdGVtcGxhdGVfY29tcGlsZXInO1xuZXhwb3J0IHtcbiAgQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICBDb21waWxlVHlwZU1ldGFkYXRhLFxuICBDb21waWxlVGVtcGxhdGVNZXRhZGF0YVxufSBmcm9tICcuL2RpcmVjdGl2ZV9tZXRhZGF0YSc7XG5leHBvcnQge1NvdXJjZU1vZHVsZSwgU291cmNlV2l0aEltcG9ydHN9IGZyb20gJy4vc291cmNlX21vZHVsZSc7XG5leHBvcnQge1BMQVRGT1JNX0RJUkVDVElWRVMsIFBMQVRGT1JNX1BJUEVTfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9wbGF0Zm9ybV9kaXJlY3RpdmVzX2FuZF9waXBlcyc7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfYXN0JztcbmV4cG9ydCB7VEVNUExBVEVfVFJBTlNGT1JNU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX3BhcnNlcic7XG5pbXBvcnQge2Fzc2VydGlvbnNFbmFibGVkLCBUeXBlLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtUZW1wbGF0ZVBhcnNlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX3BhcnNlcic7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge1RlbXBsYXRlTm9ybWFsaXplcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtSdW50aW1lTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3J1bnRpbWVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25Db21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NoYW5nZV9kZXRlY3Rvcl9jb21waWxlcic7XG5pbXBvcnQge1N0eWxlQ29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9zdHlsZV9jb21waWxlcic7XG5pbXBvcnQge0NvbW1hbmRDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NvbW1hbmRfY29tcGlsZXInO1xuaW1wb3J0IHtUZW1wbGF0ZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfY29tcGlsZXInO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9jb21waWxlcic7XG5pbXBvcnQge1J1bnRpbWVDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3J1bnRpbWVfY29tcGlsZXInO1xuaW1wb3J0IHtFbGVtZW50U2NoZW1hUmVnaXN0cnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9zY2hlbWEvZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtEb21FbGVtZW50U2NoZW1hUmVnaXN0cnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9zY2hlbWEvZG9tX2VsZW1lbnRfc2NoZW1hX3JlZ2lzdHJ5JztcbmltcG9ydCB7VXJsUmVzb2x2ZXIsIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci91cmxfcmVzb2x2ZXInO1xuaW1wb3J0IHtQYXJzZXIsIExleGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuXG5mdW5jdGlvbiBfY3JlYXRlQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWcoKSB7XG4gIHJldHVybiBuZXcgQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWcoYXNzZXJ0aW9uc0VuYWJsZWQoKSwgZmFsc2UsIHRydWUpO1xufVxuXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTOiBBcnJheTxUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXT4gPSBDT05TVF9FWFBSKFtcbiAgTGV4ZXIsXG4gIFBhcnNlcixcbiAgSHRtbFBhcnNlcixcbiAgVGVtcGxhdGVQYXJzZXIsXG4gIFRlbXBsYXRlTm9ybWFsaXplcixcbiAgUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIsXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIFN0eWxlQ29tcGlsZXIsXG4gIENvbW1hbmRDb21waWxlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uQ29tcGlsZXIsXG4gIG5ldyBQcm92aWRlcihDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZywge3VzZUZhY3Rvcnk6IF9jcmVhdGVDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZywgZGVwczogW119KSxcbiAgVGVtcGxhdGVDb21waWxlcixcbiAgbmV3IFByb3ZpZGVyKFJ1bnRpbWVDb21waWxlciwge3VzZUNsYXNzOiBSdW50aW1lQ29tcGlsZXJffSksXG4gIG5ldyBQcm92aWRlcihDb21waWxlciwge3VzZUV4aXN0aW5nOiBSdW50aW1lQ29tcGlsZXJ9KSxcbiAgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICBuZXcgUHJvdmlkZXIoRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB7dXNlRXhpc3Rpbmc6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0pLFxuICBVcmxSZXNvbHZlclxuXSk7XG4iXX0=