// Closure
undefined
let i=1;
const fun = ()=>{

console.log(i);
}
undefined
fun();
VM525:4 1
undefined
var i=1;
const fun = ()=>{

console.log(i);
}
VM580:1 Uncaught SyntaxError: Identifier 'fun' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM580:1
var i=1;
const fun1 = ()=>{

console.log(i);
}
VM595:1 Uncaught SyntaxError: Identifier 'i' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM595:1

const fun1 = ()=>{

console.log(i);
}
VM617:1 Uncaught SyntaxError: Identifier 'fun1' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM617:1
var addTo = function (passed){
 var inner =2;
 return passed + inner;
}
undefined
addTo();
NaN
addTo(undefined);
NaN
addTo(NaN);
NaN
addTo(Infinity);
Infinity
addTo("2");
"22"
addTo("0");
"02"
addTo(12);
14
addTo
ƒ (passed){
 var inner =2;
 return passed + inner;
}
console.log(addTo);
VM1689:1 ƒ (passed){
 var inner =2;
 return passed + inner;
}
undefined
console.log(addTo());
VM1704:1 NaN
undefined
console.log(addTo(12));
VM1717:1 14
undefined
console.dir(addTo(12));
VM1755:1 14
undefined
console.dir(addTo);
VM1780:1 ƒ addTo(passed)length: 1name: "addTo"arguments: nullcaller: nullprototype: {constructor: ƒ}constructor: ƒ (passed)__proto__: Object__proto__: ƒ ()arguments: (...)caller: (...)length: 0name: ""constructor: ƒ Function()apply: ƒ apply()bind: ƒ bind()call: ƒ call()arguments: (...)caller: (...)length: 1name: "call"__proto__: ƒ ()[[Scopes]]: Scopes[0]toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()__proto__: Object[[FunctionLocation]]: <unknown>[[Scopes]]: Scopes[0][[FunctionLocation]]: VM1211:1[[Scopes]]: Scopes[2]0: Script {i: 1, fun: ƒ}1: Globaldocument: documentname: ""customElements: CustomElementRegistry {}history: History {length: 2, scrollRestoration: "auto", state: null}locationbar: BarProp {visible: true}menubar: BarProp {visible: true}personalbar: BarProp {visible: true}scrollbars: BarProp {visible: true}statusbar: BarProp {visible: true}toolbar: BarProp {visible: true}status: ""frameElement: nullnavigator: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 4, …}origin: "null"external: External {}screen: Screen {availWidth: 1440, availHeight: 900, width: 1440, height: 900, colorDepth: 24, …}innerWidth: 1440innerHeight: 150scrollX: 0pageXOffset: 0scrollY: 0pageYOffset: 0visualViewport: VisualViewport {offsetLeft: 0, offsetTop: 0, pageLeft: 0, pageTop: 0, width: 1440, …}screenX: 0screenY: 0outerWidth: 1440outerHeight: 900devicePixelRatio: 1clientInformation: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 4, …}screenLeft: 0screenTop: 0defaultStatus: ""defaultstatus: ""styleMedia: StyleMedia {type: "screen"}onsearch: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkittransitionend: nullisSecureContext: falseonabort: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncuechange: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpause: nullonplay: nullonplaying: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonseeked: nullonseeking: nullonselect: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwheel: nullonauxclick: nullongotpointercapture: nullonlostpointercapture: nullonpointerdown: nullonpointermove: nullonpointerup: nullonpointercancel: nullonpointerover: nullonpointerout: nullonpointerenter: nullonpointerleave: nullonselectstart: nullonselectionchange: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullontransitionend: nullonafterprint: nullonbeforeprint: nullonbeforeunload: nullonhashchange: nullonlanguagechange: nullonmessage: nullonmessageerror: nullonoffline: nullononline: nullonpagehide: nullonpageshow: nullonpopstate: nullonrejectionhandled: nullonstorage: nullonunhandledrejection: nullonunload: nullperformance: Performance {timeOrigin: 1582788021500.695, onresourcetimingbufferfull: null, memory: MemoryInfo, navigation: PerformanceNavigation, timing: PerformanceTiming}onappinstalled: nullonbeforeinstallprompt: nullcrypto: Crypto {}indexedDB: IDBFactory {}webkitStorageInfo: DeprecatedStorageInfo {}sessionStorage: (...)localStorage: (...)onformdata: nullonpointerrawupdate: nullspeechSynthesis: SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}event: undefinedoffscreenBuffering: trueparent: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}opener: nulltop: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}length: 0frames: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}closed: falselocation: Location {href: "about:blank", ancestorOrigins: DOMStringList, origin: "null", protocol: "about:", host: "", …}self: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}window: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}stop: ƒ stop()open: ƒ open()alert: ƒ alert()confirm: ƒ confirm()prompt: ƒ prompt()print: ƒ print()queueMicrotask: ƒ queueMicrotask()requestAnimationFrame: ƒ requestAnimationFrame()cancelAnimationFrame: ƒ cancelAnimationFrame()captureEvents: ƒ captureEvents()releaseEvents: ƒ releaseEvents()requestIdleCallback: ƒ requestIdleCallback()cancelIdleCallback: ƒ cancelIdleCallback()getComputedStyle: ƒ getComputedStyle()matchMedia: ƒ matchMedia()moveTo: ƒ moveTo()moveBy: ƒ moveBy()resizeTo: ƒ resizeTo()resizeBy: ƒ resizeBy()scroll: ƒ scroll()scrollTo: ƒ scrollTo()scrollBy: ƒ scrollBy()getSelection: ƒ getSelection()find: ƒ find()webkitRequestAnimationFrame: ƒ webkitRequestAnimationFrame()webkitCancelAnimationFrame: ƒ webkitCancelAnimationFrame()fetch: ƒ fetch()btoa: ƒ btoa()atob: ƒ atob()setTimeout: ƒ setTimeout()clearTimeout: ƒ clearTimeout()setInterval: ƒ setInterval()clearInterval: ƒ clearInterval()createImageBitmap: ƒ createImageBitmap()close: ƒ close()focus: ƒ focus()blur: ƒ blur()postMessage: ƒ postMessage()chrome: {loadTimes: ƒ, csi: ƒ}webkitRequestFileSystem: ƒ ()webkitResolveLocalFileSystemURL: ƒ ()openDatabase: ƒ ()__REACT_DEVTOOLS_COMPONENT_FILTERS__: [{…}]__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__: trueaddTo: ƒ (passed)Object: ƒ Object()Function: ƒ Function()Array: ƒ Array()Number: ƒ Number()parseFloat: ƒ parseFloat()parseInt: ƒ parseInt()Infinity: InfinityNaN: NaNundefined: undefinedBoolean: ƒ Boolean()String: ƒ String()Symbol: ƒ Symbol()Date: ƒ Date()Promise: ƒ Promise()RegExp: ƒ RegExp()Error: ƒ Error()EvalError: ƒ EvalError()RangeError: ƒ RangeError()ReferenceError: ƒ ReferenceError()SyntaxError: ƒ SyntaxError()TypeError: ƒ TypeError()URIError: ƒ URIError()globalThis: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}JSON: JSON {Symbol(Symbol.toStringTag): "JSON", parse: ƒ, stringify: ƒ}Math: Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}console: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}Intl: {getCanonicalLocales: ƒ, DateTimeFormat: ƒ, NumberFormat: ƒ, Collator: ƒ, v8BreakIterator: ƒ, …}ArrayBuffer: ƒ ArrayBuffer()Uint8Array: ƒ Uint8Array()Int8Array: ƒ Int8Array()Uint16Array: ƒ Uint16Array()Int16Array: ƒ Int16Array()Uint32Array: ƒ Uint32Array()Int32Array: ƒ Int32Array()Float32Array: ƒ Float32Array()Float64Array: ƒ Float64Array()Uint8ClampedArray: ƒ Uint8ClampedArray()BigUint64Array: ƒ BigUint64Array()BigInt64Array: ƒ BigInt64Array()DataView: ƒ DataView()Map: ƒ Map()BigInt: ƒ BigInt()Set: ƒ Set()WeakMap: ƒ WeakMap()WeakSet: ƒ WeakSet()Proxy: ƒ Proxy()Reflect: {defineProperty: ƒ, deleteProperty: ƒ, apply: ƒ, construct: ƒ, get: ƒ, …}decodeURI: ƒ decodeURI()decodeURIComponent: ƒ decodeURIComponent()encodeURI: ƒ encodeURI()encodeURIComponent: ƒ encodeURIComponent()escape: ƒ escape()unescape: ƒ unescape()eval: ƒ eval()isFinite: ƒ isFinite()isNaN: ƒ isNaN()webkitRTCPeerConnection: ƒ RTCPeerConnection()webkitMediaStream: ƒ MediaStream()WebSocket: ƒ WebSocket()WebGLVertexArrayObject: ƒ WebGLVertexArrayObject()WebGLUniformLocation: ƒ WebGLUniformLocation()WebGLTransformFeedback: ƒ WebGLTransformFeedback()WebGLTexture: ƒ WebGLTexture()WebGLSync: ƒ WebGLSync()WebGLShaderPrecisionFormat: ƒ WebGLShaderPrecisionFormat()WebGLShader: ƒ WebGLShader()WebGLSampler: ƒ WebGLSampler()WebGLRenderingContext: ƒ WebGLRenderingContext()WebGLRenderbuffer: ƒ WebGLRenderbuffer()WebGLQuery: ƒ WebGLQuery()WebGLProgram: ƒ WebGLProgram()WebGLFramebuffer: ƒ WebGLFramebuffer()WebGLContextEvent: ƒ WebGLContextEvent()WebGLBuffer: ƒ WebGLBuffer()WebGLActiveInfo: ƒ WebGLActiveInfo()WebGL2RenderingContext: ƒ WebGL2RenderingContext()WaveShaperNode: ƒ WaveShaperNode()TextEncoderStream: ƒ TextEncoderStream()TextEncoder: ƒ TextEncoder()TextDecoderStream: ƒ TextDecoderStream()TextDecoder: ƒ TextDecoder()SyncManager: ƒ SyncManager()SubtleCrypto: ƒ SubtleCrypto()StorageEvent: ƒ StorageEvent()Storage: ƒ Storage()StereoPannerNode: ƒ StereoPannerNode()SourceBufferList: ƒ SourceBufferList()SourceBuffer: ƒ SourceBuffer()ScriptProcessorNode: ƒ ScriptProcessorNode()ScreenOrientation: ƒ ScreenOrientation()RTCTrackEvent: ƒ RTCTrackEvent()RTCStatsReport: ƒ RTCStatsReport()RTCSessionDescription: ƒ RTCSessionDescription()RTCRtpTransceiver: ƒ RTCRtpTransceiver()RTCRtpSender: ƒ RTCRtpSender()RTCRtpReceiver: ƒ RTCRtpReceiver()RTCPeerConnectionIceEvent: ƒ RTCPeerConnectionIceEvent()RTCPeerConnectionIceErrorEvent: ƒ RTCPeerConnectionIceErrorEvent()RTCPeerConnection: ƒ RTCPeerConnection()RTCIceCandidate: ƒ RTCIceCandidate()RTCErrorEvent: ƒ RTCErrorEvent()RTCError: ƒ RTCError()RTCDataChannelEvent: ƒ RTCDataChannelEvent()RTCDataChannel: ƒ RTCDataChannel()RTCDTMFToneChangeEvent: ƒ RTCDTMFToneChangeEvent()RTCDTMFSender: ƒ RTCDTMFSender()RTCCertificate: ƒ RTCCertificate()Plugin: ƒ Plugin()PluginArray: ƒ PluginArray()PhotoCapabilities: ƒ PhotoCapabilities()PeriodicWave: ƒ PeriodicWave()Path2D: ƒ Path2D()PannerNode: ƒ PannerNode()OverconstrainedError: ƒ OverconstrainedError()OscillatorNode: ƒ OscillatorNode()OfflineAudioContext: ƒ OfflineAudioContext()OfflineAudioCompletionEvent: ƒ OfflineAudioCompletionEvent()NetworkInformation: ƒ NetworkInformation()MimeType: ƒ MimeType()MimeTypeArray: ƒ MimeTypeArray()MediaStreamTrackEvent: ƒ MediaStreamTrackEvent()MediaStreamTrack: ƒ MediaStreamTrack()MediaStreamEvent: ƒ MediaStreamEvent()MediaStream: ƒ MediaStream()MediaStreamAudioSourceNode: ƒ MediaStreamAudioSourceNode()MediaStreamAudioDestinationNode: ƒ MediaStreamAudioDestinationNode()MediaSettingsRange: ƒ MediaSettingsRange()MediaRecorder: ƒ MediaRecorder()MediaEncryptedEvent: ƒ MediaEncryptedEvent()MediaElementAudioSourceNode: ƒ MediaElementAudioSourceNode()MediaCapabilities: ƒ MediaCapabilities()InputDeviceInfo: ƒ InputDeviceInfo()ImageCapture: ƒ ImageCapture()ImageBitmapRenderingContext: ƒ ImageBitmapRenderingContext()IIRFilterNode: ƒ IIRFilterNode()IDBVersionChangeEvent: ƒ IDBVersionChangeEvent()IDBTransaction: ƒ IDBTransaction()IDBRequest: ƒ IDBRequest()IDBOpenDBRequest: ƒ IDBOpenDBRequest()IDBObjectStore: ƒ IDBObjectStore()IDBKeyRange: ƒ IDBKeyRange()IDBIndex: ƒ IDBIndex()IDBFactory: ƒ IDBFactory()IDBDatabase: ƒ IDBDatabase()IDBCursorWithValue: ƒ IDBCursorWithValue()IDBCursor: ƒ IDBCursor()GeolocationPositionError: ƒ GeolocationPositionError()GeolocationPosition: ƒ GeolocationPosition()GeolocationCoordinates: ƒ GeolocationCoordinates()Geolocation: ƒ Geolocation()GamepadHapticActuator: ƒ GamepadHapticActuator()GamepadEvent: ƒ GamepadEvent()Gamepad: ƒ Gamepad()GamepadButton: ƒ GamepadButton()GainNode: ƒ GainNode()EventSource: ƒ EventSource()DynamicsCompressorNode: ƒ DynamicsCompressorNode()DelayNode: ƒ DelayNode()DOMError: ƒ DOMError()CryptoKey: ƒ CryptoKey()Crypto: ƒ Crypto()ConvolverNode: ƒ ConvolverNode()ConstantSourceNode: ƒ ConstantSourceNode()CloseEvent: ƒ CloseEvent()ChannelSplitterNode: ƒ ChannelSplitterNode()ChannelMergerNode: ƒ ChannelMergerNode()CanvasRenderingContext2D: ƒ CanvasRenderingContext2D()CanvasPattern: ƒ CanvasPattern()CanvasGradient: ƒ CanvasGradient()CanvasCaptureMediaStreamTrack: ƒ CanvasCaptureMediaStreamTrack()BroadcastChannel: ƒ BroadcastChannel()BlobEvent: ƒ BlobEvent()BiquadFilterNode: ƒ BiquadFilterNode()BeforeInstallPromptEvent: ƒ BeforeInstallPromptEvent()BatteryManager: ƒ BatteryManager()BaseAudioContext: ƒ BaseAudioContext()AudioWorkletNode: ƒ AudioWorkletNode()AudioScheduledSourceNode: ƒ AudioScheduledSourceNode()AudioProcessingEvent: ƒ AudioProcessingEvent()AudioParamMap: ƒ AudioParamMap()AudioParam: ƒ AudioParam()AudioNode: ƒ AudioNode()AudioListener: ƒ AudioListener()AudioDestinationNode: ƒ AudioDestinationNode()AudioContext: ƒ AudioContext()AudioBufferSourceNode: ƒ AudioBufferSourceNode()AudioBuffer: ƒ AudioBuffer()AnalyserNode: ƒ AnalyserNode()XPathResult: ƒ XPathResult()XPathExpression: ƒ XPathExpression()XPathEvaluator: ƒ XPathEvaluator()XMLSerializer: ƒ XMLSerializer()XMLHttpRequestUpload: ƒ XMLHttpRequestUpload()XMLHttpRequestEventTarget: ƒ XMLHttpRequestEventTarget()XMLHttpRequest: ƒ XMLHttpRequest()XMLDocument: ƒ XMLDocument()WritableStreamDefaultWriter: ƒ WritableStreamDefaultWriter()WritableStream: ƒ WritableStream()Worker: ƒ Worker()Window: ƒ Window()WheelEvent: ƒ WheelEvent()VisualViewport: ƒ VisualViewport()ValidityState: ƒ ValidityState()VTTCue: ƒ VTTCue()URLSearchParams: ƒ URLSearchParams()URL: ƒ URL()UIEvent: ƒ UIEvent()TreeWalker: ƒ TreeWalker()TransitionEvent: ƒ TransitionEvent()TransformStream: ƒ TransformStream()TrackEvent: ƒ TrackEvent()TouchList: ƒ TouchList()TouchEvent: ƒ TouchEvent()Touch: ƒ Touch()TimeRanges: ƒ TimeRanges()TextTrackList: ƒ TextTrackList()TextTrackCueList: ƒ TextTrackCueList()TextTrackCue: ƒ TextTrackCue()TextTrack: ƒ TextTrack()TextMetrics: ƒ TextMetrics()TextEvent: ƒ TextEvent()Text: ƒ Text()TaskAttributionTiming: ƒ TaskAttributionTiming()StyleSheetList: ƒ StyleSheetList()StyleSheet: ƒ StyleSheet()StylePropertyMapReadOnly: ƒ StylePropertyMapReadOnly()StylePropertyMap: ƒ StylePropertyMap()StaticRange: ƒ StaticRange()ShadowRoot: ƒ ShadowRoot()Selection: ƒ Selection()SecurityPolicyViolationEvent: ƒ SecurityPolicyViolationEvent()Screen: ƒ Screen()SVGViewElement: ƒ SVGViewElement()SVGUseElement: ƒ SVGUseElement()SVGUnitTypes: ƒ SVGUnitTypes()SVGTransformList: ƒ SVGTransformList()SVGTransform: ƒ SVGTransform()SVGTitleElement: ƒ SVGTitleElement()SVGTextPositioningElement: ƒ SVGTextPositioningElement()SVGTextPathElement: ƒ SVGTextPathElement()SVGTextElement: ƒ SVGTextElement()SVGTextContentElement: ƒ SVGTextContentElement()SVGTSpanElement: ƒ SVGTSpanElement()SVGSymbolElement: ƒ SVGSymbolElement()SVGSwitchElement: ƒ SVGSwitchElement()SVGStyleElement: ƒ SVGStyleElement()SVGStringList: ƒ SVGStringList()SVGStopElement: ƒ SVGStopElement()SVGSetElement: ƒ SVGSetElement()SVGScriptElement: ƒ SVGScriptElement()SVGSVGElement: ƒ SVGSVGElement()SVGRectElement: ƒ SVGRectElement()SVGRect: ƒ SVGRect()SVGRadialGradientElement: ƒ SVGRadialGradientElement()SVGPreserveAspectRatio: ƒ SVGPreserveAspectRatio()SVGPolylineElement: ƒ SVGPolylineElement()SVGPolygonElement: ƒ SVGPolygonElement()SVGPointList: ƒ SVGPointList()SVGPoint: ƒ SVGPoint()SVGPatternElement: ƒ SVGPatternElement()SVGPathElement: ƒ SVGPathElement()SVGNumberList: ƒ SVGNumberList()SVGNumber: ƒ SVGNumber()SVGMetadataElement: ƒ SVGMetadataElement()SVGMatrix: ƒ SVGMatrix()SVGMaskElement: ƒ SVGMaskElement()SVGMarkerElement: ƒ SVGMarkerElement()SVGMPathElement: ƒ SVGMPathElement()SVGLinearGradientElement: ƒ SVGLinearGradientElement()SVGLineElement: ƒ SVGLineElement()SVGLengthList: ƒ SVGLengthList()SVGLength: ƒ SVGLength()SVGImageElement: ƒ SVGImageElement()SVGGraphicsElement: ƒ SVGGraphicsElement()SVGGradientElement: ƒ SVGGradientElement()SVGGeometryElement: ƒ SVGGeometryElement()SVGGElement: ƒ SVGGElement()SVGForeignObjectElement: ƒ SVGForeignObjectElement()SVGFilterElement: ƒ SVGFilterElement()SVGFETurbulenceElement: ƒ SVGFETurbulenceElement()SVGFETileElement: ƒ SVGFETileElement()SVGFESpotLightElement: ƒ SVGFESpotLightElement()SVGFESpecularLightingElement: ƒ SVGFESpecularLightingElement()SVGFEPointLightElement: ƒ SVGFEPointLightElement()SVGFEOffsetElement: ƒ SVGFEOffsetElement()SVGFEMorphologyElement: ƒ SVGFEMorphologyElement()SVGFEMergeNodeElement: ƒ SVGFEMergeNodeElement()SVGFEMergeElement: ƒ SVGFEMergeElement()SVGFEImageElement: ƒ SVGFEImageElement()SVGFEGaussianBlurElement: ƒ SVGFEGaussianBlurElement()SVGFEFuncRElement: ƒ SVGFEFuncRElement()SVGFEFuncGElement: ƒ SVGFEFuncGElement()SVGFEFuncBElement: ƒ SVGFEFuncBElement()SVGFEFuncAElement: ƒ SVGFEFuncAElement()SVGFEFloodElement: ƒ SVGFEFloodElement()SVGFEDropShadowElement: ƒ SVGFEDropShadowElement()SVGFEDistantLightElement: ƒ SVGFEDistantLightElement()SVGFEDisplacementMapElement: ƒ SVGFEDisplacementMapElement()SVGFEDiffuseLightingElement: ƒ SVGFEDiffuseLightingElement()SVGFEConvolveMatrixElement: ƒ SVGFEConvolveMatrixElement()SVGFECompositeElement: ƒ SVGFECompositeElement()SVGFEComponentTransferElement: ƒ SVGFEComponentTransferElement()SVGFEColorMatrixElement: ƒ SVGFEColorMatrixElement()SVGFEBlendElement: ƒ SVGFEBlendElement()SVGEllipseElement: ƒ SVGEllipseElement()SVGElement: ƒ SVGElement()SVGDiscardElement: ƒ SVGDiscardElement()SVGDescElement: ƒ SVGDescElement()SVGDefsElement: ƒ SVGDefsElement()SVGComponentTransferFunctionElement: ƒ SVGComponentTransferFunctionElement()SVGClipPathElement: ƒ SVGClipPathElement()SVGCircleElement: ƒ SVGCircleElement()SVGAnimationElement: ƒ SVGAnimationElement()SVGAnimatedTransformList: ƒ SVGAnimatedTransformList()SVGAnimatedString: ƒ SVGAnimatedString()SVGAnimatedRect: ƒ SVGAnimatedRect()SVGAnimatedPreserveAspectRatio: ƒ SVGAnimatedPreserveAspectRatio()SVGAnimatedNumberList: ƒ SVGAnimatedNumberList()SVGAnimatedNumber: ƒ SVGAnimatedNumber()SVGAnimatedLengthList: ƒ SVGAnimatedLengthList()SVGAnimatedLength: ƒ SVGAnimatedLength()SVGAnimatedInteger: ƒ SVGAnimatedInteger()SVGAnimatedEnumeration: ƒ SVGAnimatedEnumeration()SVGAnimatedBoolean: ƒ SVGAnimatedBoolean()SVGAnimatedAngle: ƒ SVGAnimatedAngle()SVGAnimateTransformElement: ƒ SVGAnimateTransformElement()SVGAnimateMotionElement: ƒ SVGAnimateMotionElement()SVGAnimateElement: ƒ SVGAnimateElement()SVGAngle: ƒ SVGAngle()SVGAElement: ƒ SVGAElement()Response: ƒ Response()ResizeObserverEntry: ƒ ResizeObserverEntry()ResizeObserver: ƒ ResizeObserver()Request: ƒ Request()ReportingObserver: ƒ ReportingObserver()ReadableStreamDefaultReader: ƒ ReadableStreamDefaultReader()ReadableStream: ƒ ReadableStream()Range: ƒ Range()RadioNodeList: ƒ RadioNodeList()PromiseRejectionEvent: ƒ PromiseRejectionEvent()ProgressEvent: ƒ ProgressEvent()ProcessingInstruction: ƒ ProcessingInstruction()PopStateEvent: ƒ PopStateEvent()PointerEvent: ƒ PointerEvent()PerformanceTiming: ƒ PerformanceTiming()PerformanceServerTiming: ƒ PerformanceServerTiming()PerformanceResourceTiming: ƒ PerformanceResourceTiming()PerformancePaintTiming: ƒ PerformancePaintTiming()PerformanceObserverEntryList: ƒ PerformanceObserverEntryList()PerformanceObserver: ƒ PerformanceObserver()PerformanceNavigationTiming: ƒ PerformanceNavigationTiming()PerformanceNavigation: ƒ PerformanceNavigation()PerformanceMeasure: ƒ PerformanceMeasure()PerformanceMark: ƒ PerformanceMark()PerformanceLongTaskTiming: ƒ PerformanceLongTaskTiming()PerformanceEventTiming: ƒ PerformanceEventTiming()PerformanceEntry: ƒ PerformanceEntry()PerformanceElementTiming: ƒ PerformanceElementTiming()Performance: ƒ Performance()PageTransitionEvent: ƒ PageTransitionEvent()NodeList: ƒ NodeList()NodeIterator: ƒ NodeIterator()NodeFilter: ƒ NodeFilter()Node: ƒ Node()Navigator: ƒ Navigator()NamedNodeMap: ƒ NamedNodeMap()MutationRecord: ƒ MutationRecord()MutationObserver: ƒ MutationObserver()MutationEvent: ƒ MutationEvent()MouseEvent: ƒ MouseEvent()MessagePort: ƒ MessagePort()MessageEvent: ƒ MessageEvent()MessageChannel: ƒ MessageChannel()MediaQueryListEvent: ƒ MediaQueryListEvent()MediaQueryList: ƒ MediaQueryList()MediaList: ƒ MediaList()MediaError: ƒ MediaError()Location: ƒ Location()LayoutShift: ƒ LayoutShift()LargestContentfulPaint: ƒ LargestContentfulPaint()KeyframeEffect: ƒ KeyframeEffect()KeyboardEvent: ƒ KeyboardEvent()IntersectionObserverEntry: ƒ IntersectionObserverEntry()IntersectionObserver: ƒ IntersectionObserver()InputEvent: ƒ InputEvent()InputDeviceCapabilities: ƒ InputDeviceCapabilities()ImageData: ƒ ImageData()ImageBitmap: ƒ ImageBitmap()IdleDeadline: ƒ IdleDeadline()History: ƒ History()Headers: ƒ Headers()HashChangeEvent: ƒ HashChangeEvent()HTMLVideoElement: ƒ HTMLVideoElement()HTMLUnknownElement: ƒ HTMLUnknownElement()HTMLUListElement: ƒ HTMLUListElement()HTMLTrackElement: ƒ HTMLTrackElement()HTMLTitleElement: ƒ HTMLTitleElement()HTMLTimeElement: ƒ HTMLTimeElement()HTMLTextAreaElement: ƒ HTMLTextAreaElement()HTMLTemplateElement: ƒ HTMLTemplateElement()HTMLTableSectionElement: ƒ HTMLTableSectionElement()HTMLTableRowElement: ƒ HTMLTableRowElement()HTMLTableElement: ƒ HTMLTableElement()HTMLTableColElement: ƒ HTMLTableColElement()HTMLTableCellElement: ƒ HTMLTableCellElement()HTMLTableCaptionElement: ƒ HTMLTableCaptionElement()HTMLStyleElement: ƒ HTMLStyleElement()HTMLSpanElement: ƒ HTMLSpanElement()HTMLSourceElement: ƒ HTMLSourceElement()HTMLSlotElement: ƒ HTMLSlotElement()HTMLShadowElement: ƒ HTMLShadowElement()HTMLSelectElement: ƒ HTMLSelectElement()HTMLScriptElement: ƒ HTMLScriptElement()HTMLQuoteElement: ƒ HTMLQuoteElement()HTMLProgressElement: ƒ HTMLProgressElement()HTMLPreElement: ƒ HTMLPreElement()HTMLPictureElement: ƒ HTMLPictureElement()HTMLParamElement: ƒ HTMLParamElement()HTMLParagraphElement: ƒ HTMLParagraphElement()HTMLOutputElement: ƒ HTMLOutputElement()HTMLOptionsCollection: ƒ HTMLOptionsCollection()Option: ƒ Option()HTMLOptionElement: ƒ HTMLOptionElement()HTMLOptGroupElement: ƒ HTMLOptGroupElement()HTMLObjectElement: ƒ HTMLObjectElement()HTMLOListElement: ƒ HTMLOListElement()HTMLModElement: ƒ HTMLModElement()HTMLMeterElement: ƒ HTMLMeterElement()HTMLMetaElement: ƒ HTMLMetaElement()HTMLMenuElement: ƒ HTMLMenuElement()HTMLMediaElement: ƒ HTMLMediaElement()HTMLMarqueeElement: ƒ HTMLMarqueeElement()HTMLMapElement: ƒ HTMLMapElement()HTMLLinkElement: ƒ HTMLLinkElement()HTMLLegendElement: ƒ HTMLLegendElement()HTMLLabelElement: ƒ HTMLLabelElement()HTMLLIElement: ƒ HTMLLIElement()HTMLInputElement: ƒ HTMLInputElement()Image: ƒ Image()HTMLImageElement: ƒ HTMLImageElement()HTMLIFrameElement: ƒ HTMLIFrameElement()HTMLHtmlElement: ƒ HTMLHtmlElement()HTMLHeadingElement: ƒ HTMLHeadingElement()HTMLHeadElement: ƒ HTMLHeadElement()HTMLHRElement: ƒ HTMLHRElement()HTMLFrameSetElement: ƒ HTMLFrameSetElement()HTMLFrameElement: ƒ HTMLFrameElement()HTMLFormElement: ƒ HTMLFormElement()HTMLFormControlsCollection: ƒ HTMLFormControlsCollection()HTMLFontElement: ƒ HTMLFontElement()HTMLFieldSetElement: ƒ HTMLFieldSetElement()HTMLEmbedElement: ƒ HTMLEmbedElement()HTMLElement: ƒ HTMLElement()HTMLDocument: ƒ HTMLDocument()HTMLDivElement: ƒ HTMLDivElement()HTMLDirectoryElement: ƒ HTMLDirectoryElement()HTMLDialogElement: ƒ HTMLDialogElement()HTMLDetailsElement: ƒ HTMLDetailsElement()HTMLDataListElement: ƒ HTMLDataListElement()HTMLDataElement: ƒ HTMLDataElement()HTMLDListElement: ƒ HTMLDListElement()HTMLContentElement: ƒ HTMLContentElement()HTMLCollection: ƒ HTMLCollection()HTMLCanvasElement: ƒ HTMLCanvasElement()HTMLButtonElement: ƒ HTMLButtonElement()HTMLBodyElement: ƒ HTMLBodyElement()HTMLBaseElement: ƒ HTMLBaseElement()HTMLBRElement: ƒ HTMLBRElement()Audio: ƒ Audio()HTMLAudioElement: ƒ HTMLAudioElement()HTMLAreaElement: ƒ HTMLAreaElement()HTMLAnchorElement: ƒ HTMLAnchorElement()HTMLAllCollection: ƒ HTMLAllCollection()FormData: ƒ FormData()FontFaceSetLoadEvent: ƒ FontFaceSetLoadEvent()FontFace: ƒ FontFace()FocusEvent: ƒ FocusEvent()FileReader: ƒ FileReader()FileList: ƒ FileList()File: ƒ File()External: ƒ External()EventTarget: ƒ EventTarget()Event: ƒ Event()ErrorEvent: ƒ ErrorEvent()Element: ƒ Element()DragEvent: ƒ DragEvent()DocumentType: ƒ DocumentType()DocumentFragment: ƒ DocumentFragment()Document: ƒ Document()DataTransferItemList: ƒ DataTransferItemList()DataTransferItem: ƒ DataTransferItem()DataTransfer: ƒ DataTransfer()DOMTokenList: ƒ DOMTokenList()DOMStringMap: ƒ DOMStringMap()DOMStringList: ƒ DOMStringList()DOMRectReadOnly: ƒ DOMRectReadOnly()DOMRectList: ƒ DOMRectList()DOMRect: ƒ DOMRect()DOMQuad: ƒ DOMQuad()DOMPointReadOnly: ƒ DOMPointReadOnly()DOMPoint: ƒ DOMPoint()DOMParser: ƒ DOMParser()DOMMatrixReadOnly: ƒ DOMMatrixReadOnly()DOMMatrix: ƒ DOMMatrix()DOMImplementation: ƒ DOMImplementation()DOMException: ƒ DOMException()CustomEvent: ƒ CustomEvent()CustomElementRegistry: ƒ CustomElementRegistry()CountQueuingStrategy: ƒ CountQueuingStrategy()CompositionEvent: ƒ CompositionEvent()Comment: ƒ Comment()ClipboardEvent: ƒ ClipboardEvent()CharacterData: ƒ CharacterData()CSSVariableReferenceValue: ƒ CSSVariableReferenceValue()CSSUnparsedValue: ƒ CSSUnparsedValue()CSSUnitValue: ƒ CSSUnitValue()CSSTranslate: ƒ CSSTranslate()CSSTransformValue: ƒ CSSTransformValue()CSSTransformComponent: ƒ CSSTransformComponent()CSSSupportsRule: ƒ CSSSupportsRule()CSSStyleValue: ƒ CSSStyleValue()CSSStyleSheet: ƒ CSSStyleSheet()CSSStyleRule: ƒ CSSStyleRule()CSSStyleDeclaration: ƒ CSSStyleDeclaration()CSSSkewY: ƒ CSSSkewY()CSSSkewX: ƒ CSSSkewX()CSSSkew: ƒ CSSSkew()CSSScale: ƒ CSSScale()CSSRuleList: ƒ CSSRuleList()CSSRule: ƒ CSSRule()CSSRotate: ƒ CSSRotate()CSSPositionValue: ƒ CSSPositionValue()CSSPerspective: ƒ CSSPerspective()CSSPageRule: ƒ CSSPageRule()CSSNumericValue: ƒ CSSNumericValue()CSSNumericArray: ƒ CSSNumericArray()CSSNamespaceRule: ƒ CSSNamespaceRule()CSSMediaRule: ƒ CSSMediaRule()CSSMatrixComponent: ƒ CSSMatrixComponent()CSSMathValue: ƒ CSSMathValue()CSSMathSum: ƒ CSSMathSum()CSSMathProduct: ƒ CSSMathProduct()CSSMathNegate: ƒ CSSMathNegate()CSSMathMin: ƒ CSSMathMin()CSSMathMax: ƒ CSSMathMax()CSSMathInvert: ƒ CSSMathInvert()CSSKeywordValue: ƒ CSSKeywordValue()CSSKeyframesRule: ƒ CSSKeyframesRule()CSSKeyframeRule: ƒ CSSKeyframeRule()CSSImportRule: ƒ CSSImportRule()CSSImageValue: ƒ CSSImageValue()CSSGroupingRule: ƒ CSSGroupingRule()CSSFontFaceRule: ƒ CSSFontFaceRule()CSS: ƒ CSS()CSSConditionRule: ƒ CSSConditionRule()CDATASection: ƒ CDATASection()ByteLengthQueuingStrategy: ƒ ByteLengthQueuingStrategy()Blob: ƒ Blob()BeforeUnloadEvent: ƒ BeforeUnloadEvent()BarProp: ƒ BarProp()Attr: ƒ Attr()AnimationEvent: ƒ AnimationEvent()AnimationEffect: ƒ AnimationEffect()Animation: ƒ Animation()AbortSignal: ƒ AbortSignal()AbortController: ƒ AbortController()WebKitCSSMatrix: ƒ DOMMatrix()WebKitMutationObserver: ƒ MutationObserver()webkitURL: ƒ URL()SharedArrayBuffer: ƒ SharedArrayBuffer()Atomics: Atomics {load: ƒ, store: ƒ, add: ƒ, sub: ƒ, and: ƒ, …}WebAssembly: WebAssembly {compile: ƒ, validate: ƒ, instantiate: ƒ, compileStreaming: ƒ, instantiateStreaming: ƒ, …}ElementInternals: ƒ ElementInternals()FormDataEvent: ƒ FormDataEvent()SharedWorker: ƒ SharedWorker()OffscreenCanvas: ƒ OffscreenCanvas()UserActivation: ƒ UserActivation()XSLTProcessor: ƒ XSLTProcessor()ClipboardItem: ƒ ClipboardItem()BackgroundFetchManager: ƒ BackgroundFetchManager()BackgroundFetchRecord: ƒ BackgroundFetchRecord()BackgroundFetchRegistration: ƒ BackgroundFetchRegistration()MediaMetadata: ƒ MediaMetadata()MediaSession: ƒ MediaSession()MediaSource: ƒ MediaSource()Notification: ƒ Notification()PaymentInstruments: ƒ PaymentInstruments()PaymentManager: ƒ PaymentManager()PaymentRequestUpdateEvent: ƒ PaymentRequestUpdateEvent()Permissions: ƒ Permissions()PermissionStatus: ƒ PermissionStatus()EnterPictureInPictureEvent: ƒ EnterPictureInPictureEvent()PictureInPictureWindow: ƒ PictureInPictureWindow()PushManager: ƒ PushManager()PushSubscription: ƒ PushSubscription()PushSubscriptionOptions: ƒ PushSubscriptionOptions()RTCDtlsTransport: ƒ RTCDtlsTransport()RTCSctpTransport: ƒ RTCSctpTransport()RemotePlayback: ƒ RemotePlayback()webkitSpeechGrammar: ƒ SpeechGrammar()webkitSpeechGrammarList: ƒ SpeechGrammarList()webkitSpeechRecognition: ƒ SpeechRecognition()webkitSpeechRecognitionError: ƒ SpeechRecognitionErrorEvent()webkitSpeechRecognitionEvent: ƒ SpeechRecognitionEvent()SpeechSynthesisErrorEvent: ƒ SpeechSynthesisErrorEvent()SpeechSynthesisEvent: ƒ SpeechSynthesisEvent()SpeechSynthesisUtterance: ƒ SpeechSynthesisUtterance()OffscreenCanvasRenderingContext2D: ƒ OffscreenCanvasRenderingContext2D()BluetoothUUID: ƒ BluetoothUUID()get sessionStorage: ƒ sessionStorage()get localStorage: ƒ localStorage()__proto__: Window
undefined
var passed=12;
undefined
console.dir(addTo);
VM1952:1 ƒ addTo(passed)length: 1name: "addTo"arguments: nullcaller: nullprototype: {constructor: ƒ}__proto__: ƒ ()arguments: (...)caller: (...)length: 0name: ""constructor: ƒ Function()apply: ƒ apply()bind: ƒ bind()call: ƒ call()toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()__proto__: Object[[FunctionLocation]]: <unknown>[[Scopes]]: Scopes[0]No properties[[FunctionLocation]]: VM1211:1[[Scopes]]: Scopes[2]0: Script {i: 1, fun: ƒ}1: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
undefined
addTo();
NaN
addTo();
NaN
var addTo = function (passed){
 var add = function(inner){
  return passed+inner;
};
return add;
}
undefined
addTo(1);
ƒ (inner){
  return passed+inner;
}
addTo(4);
ƒ (inner){
  return passed+inner;
}
var addTo = function (passed){
 var add = function(inner){
  return passed+inner;
};
return add;
};
undefined
addTo(4);
ƒ (inner){
  return passed+inner;
}
var addto = new addTo(12);
undefined
addto;
ƒ (inner){
  return passed+inner;
}
var closure = function (passed){
 var add = function(inner){
  return passed+inner;
};
return add;
};
undefined
closure(12);
ƒ (inner){
  return passed+inner;
}
let j=1;
const fun =()=>{
console.log(j);
}
VM3032:1 Uncaught SyntaxError: Identifier 'fun' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM3032:1
let j=1;
const closefun =()=>{
console.log(j);
}
undefined
closefun();
VM3056:3 1
undefined
closefun(12);
VM3056:3 1
undefined
let j=1;
const closefun =(args)=>{
console.log(j+args);
}
VM3146:1 Uncaught SyntaxError: Identifier 'j' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM3146:1
let g = ()=>{
let i=8;
 return ()=>{
 console.log(i);
 }
};
undefined
console.log(g);
VM3562:1 ()=>{
let i=8;
 return ()=>{
 console.log(i);
 }
}
undefined
console.log(g());
VM3581:1 ()=>{
 console.log(i);
 }
undefined
console.dir(g());
VM3644:1 anonymous()arguments: (...)caller: (...)length: 0name: ""__proto__: ƒ ()[[FunctionLocation]]: VM3509:3[[Scopes]]: Scopes[3]0: Closure (g) {i: 8}i: 81: Script {i: 1, j: 1, fun: ƒ, closefun: ƒ, g: ƒ}i: 1fun: ()=>{  console.log(i); }j: 1closefun: ()=>{ console.log(j); }g: ()=>{ let i=8;  return ()=>{  console.log(i);  } }2: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
undefined
// Inside a loop
undefined
for(let i=0;i<3;i++){
const closef = ()=>{
 console.log(i*2);
}
closef();
}
VM3971:3 0
VM3971:3 2
VM3971:3 4
undefined
for(let i=0;i<3;i++){
const closef = ()=>{
 console.log(i*2);
}
setTimeout(closef(),2000);
}
VM4046:3 0
VM4046:3 2
VM4046:3 4
3
for(let i=0;i<3;i++){
const closef = ()=>{
 console.log(i*2);
}
setTimeout(closef(),5000);
}
VM4067:3 0
VM4067:3 2
VM4067:3 4
6
for(let i=0;i<3;i++){
// const closef =
setTimeout(()=>{
 console.log(i*2);
},5000);
}
9
VM4146:4 0
VM4146:4 2
VM4146:4 4
i=0__f(c:i(0));
VM4272:1 Uncaught SyntaxError: Numeric separator can not be used after leading 0.
i=0_f(c:i(0));
VM4346:1 Uncaught SyntaxError: Numeric separator can not be used after leading 0.
for(var i=0;i<3;i++){
// const closef =
((i)=>{
 setTimeout(()=> {console.log(i*2)},1000);
})(i);
}
VM4589:1 Uncaught SyntaxError: Identifier 'i' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM4589:1
for(var k=0;k<3;k++){
// const closef =
((k)=>{
 setTimeout(()=> {console.log(k*2)},1000);
})(k);
}
undefined
VM4692:4 0
VM4692:4 2
VM4692:4 4
for(var k=0;k<3;k++){
// const closef =
((k)=>{
 setTimeout(()=> {console.log(k*2)},5000);
})(k);
}
undefined
VM4724:4 0
VM4724:4 2
VM4724:4 4
// A B C
undefined
var obj = {num:2};
undefined
var addTothis = function(a){
 return this.num+a;
}
undefined
addTothis.call(obj,12);
14
addTothis.apply(obj,12);
VM5277:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:11
(anonymous) @ VM5277:1
addTothis.bind(obj,12);
ƒ (a){
 return this.num+a;
}
var addTothis2 = function(a,b,c){
 return this.num+a;
}
undefined
addTothis2.call(obj,12,12,12);
14
var addTothis2 = function(a,b,c){
 return this.num+a+b+c;
}
undefined
addTothis2.call(obj,12,12,12);
38
var arr = [1,2,3,4];
undefined
addTothis.call(obj,arr);
"21,2,3,4"
addTothis.apply(obj,arr);
3
addTothis.bind(obj,arr);
ƒ (a){
 return this.num+a;
}
console.dir(addTothis.bind(obj,arr));
VM6395:1 ƒ bound addTothis()arguments: (...)caller: (...)length: 0name: "bound addTothis"__proto__: ƒ ()[[TargetFunction]]: ƒ (a)length: 1name: "addTothis"arguments: nullcaller: nullprototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM5144:1[[Scopes]]: Scopes[2]0: Script {i: 1, j: 1, fun: ƒ, closefun: ƒ, g: ƒ}1: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}[[BoundThis]]: Objectnum: 2__proto__: Object[[BoundArgs]]: Array(1)0: (4) [1, 2, 3, 4]length: 1__proto__: Array(0)
undefined
addTothis2.apply(obj[arr]);
NaN
addTothis2.apply(obj[arr,arr1,arr2]);
VM6575:1 Uncaught ReferenceError: arr1 is not defined
    at <anonymous>:1:26
(anonymous) @ VM6575:1
addTothis2.apply(obj[1,2,3]);
NaN
function teststack(){
    {
   var test =[];
}

}
undefined
function teststack()
    {
   var test =[];
  for(var z=0;z<5;z++){ test[z] = function(){return z;};}
  return test;
}


undefined
var test = teststack();
undefined
test[4]()
5
test
(5) [ƒ, ƒ, ƒ, ƒ, ƒ]0: ƒ ()1: ƒ ()2: ƒ ()3: ƒ ()4: ƒ ()length: 5__proto__: Array(0)
test[1]
ƒ (){return z;}
var x =4,
 obj = {x:3,bar:function(){
 var x=2;
 setTimeout(function(){var x=1; alert(this.x);},1000);
}};
undefined
x;
4
obj;
{x: 3, bar: ƒ}x: 3bar: ƒ ()__proto__: Object
obj.bar();
undefined
[1,2,3].map(parseInt);
(3) [1, NaN, NaN]
[1,2,3].map((i)=>{return parseInt(i)});
(3) [1, 2, 3]
[1,2,3].map((i)=>{return parseInt(i,10)});
(3) [1, 2, 3]
function bar(){
 return foo;
 foo = 10;
 function foo(){}
 var foo = 11;

}
undefined
typeof bar();
"function"
foo();
VM22118:1 Uncaught ReferenceError: foo is not defined
    at <anonymous>:1:1
(anonymous) @ VM22118:1
bar.prototype.hasOwnProperty.apply(obj);
false
bar.prototype
{constructor: ƒ}constructor: ƒ bar()__proto__: Object
bar();
ƒ foo(){}
var foo = bar();
undefined
foo();
undefined
typeof foo;
"function"
var result = (function (x) {delete x; return x;})(0);
undefined
result;
0
var d =1l
VM22798:1 Uncaught SyntaxError: Invalid or unexpected token
var d =1;
undefined
d;
1
delete d;
false
d;
1
return d;
VM22887:1 Uncaught SyntaxError: Illegal return statement
window
Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
window.localStorage.db='Jatin is heavy DB';
VM24831:1 Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
    at <anonymous>:1:8
(anonymous) @ VM24831:1
window.localStorage.db:'Jatin is heavy DB';
VM24845:1 Uncaught SyntaxError: Unexpected token ':'
localStorage
VM24874:1 Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
    at <anonymous>:1:1
(anonymous) @ VM24874:1
window.localStorage;
VM24944:1 Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
    at <anonymous>:1:8
(anonymous) @ VM24944:1
window.localStorage();
VM24963:1 Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
    at <anonymous>:1:8
(anonymous) @ VM24963:1
sessionStorage
VM24987:1 Uncaught DOMException: Failed to read the 'sessionStorage' property from 'Window': Access is denied for this document.
    at <anonymous>:1:1
(anonymous) @ VM24987:1
