/*!
 * Ported from: https://github.com/jshttp/mime-db and licensed as:
 *
 * (The MIT License)
 *
 * Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
 * Copyright (c) 2020 the Deno authors
 * Copyright (c) 2020 the oak authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
export const db = JSON.parse(`{
  "application/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/3gpp-ims+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/3gpphal+json": {
    "source": "iana",
    "compressible": true
  },
  "application/3gpphalforms+json": {
    "source": "iana",
    "compressible": true
  },
  "application/a2l": {
    "source": "iana"
  },
  "application/activemessage": {
    "source": "iana"
  },
  "application/activity+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-costmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-costmapfilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-directory+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointcost+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointcostparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointprop+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointpropparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-error+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-networkmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-networkmapfilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-updatestreamcontrol+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-updatestreamparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/aml": {
    "source": "iana"
  },
  "application/andrew-inset": {
    "source": "iana",
    "extensions": ["ez"]
  },
  "application/applefile": {
    "source": "iana"
  },
  "application/applixware": {
    "source": "apache",
    "extensions": ["aw"]
  },
  "application/atf": {
    "source": "iana"
  },
  "application/atfx": {
    "source": "iana"
  },
  "application/atom+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atom"]
  },
  "application/atomcat+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomcat"]
  },
  "application/atomdeleted+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomdeleted"]
  },
  "application/atomicmail": {
    "source": "iana"
  },
  "application/atomsvc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomsvc"]
  },
  "application/atsc-dwd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dwd"]
  },
  "application/atsc-dynamic-event-message": {
    "source": "iana"
  },
  "application/atsc-held+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["held"]
  },
  "application/atsc-rdt+json": {
    "source": "iana",
    "compressible": true
  },
  "application/atsc-rsat+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rsat"]
  },
  "application/atxml": {
    "source": "iana"
  },
  "application/auth-policy+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/bacnet-xdd+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/batch-smtp": {
    "source": "iana"
  },
  "application/bdoc": {
    "compressible": false,
    "extensions": ["bdoc"]
  },
  "application/beep+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/calendar+json": {
    "source": "iana",
    "compressible": true
  },
  "application/calendar+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xcs"]
  },
  "application/call-completion": {
    "source": "iana"
  },
  "application/cals-1840": {
    "source": "iana"
  },
  "application/captive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cbor": {
    "source": "iana"
  },
  "application/cbor-seq": {
    "source": "iana"
  },
  "application/cccex": {
    "source": "iana"
  },
  "application/ccmp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ccxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ccxml"]
  },
  "application/cdfx+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cdfx"]
  },
  "application/cdmi-capability": {
    "source": "iana",
    "extensions": ["cdmia"]
  },
  "application/cdmi-container": {
    "source": "iana",
    "extensions": ["cdmic"]
  },
  "application/cdmi-domain": {
    "source": "iana",
    "extensions": ["cdmid"]
  },
  "application/cdmi-object": {
    "source": "iana",
    "extensions": ["cdmio"]
  },
  "application/cdmi-queue": {
    "source": "iana",
    "extensions": ["cdmiq"]
  },
  "application/cdni": {
    "source": "iana"
  },
  "application/cea": {
    "source": "iana"
  },
  "application/cea-2018+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cellml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cfw": {
    "source": "iana"
  },
  "application/clr": {
    "source": "iana"
  },
  "application/clue+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/clue_info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cms": {
    "source": "iana"
  },
  "application/cnrp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/coap-group+json": {
    "source": "iana",
    "compressible": true
  },
  "application/coap-payload": {
    "source": "iana"
  },
  "application/commonground": {
    "source": "iana"
  },
  "application/conference-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cose": {
    "source": "iana"
  },
  "application/cose-key": {
    "source": "iana"
  },
  "application/cose-key-set": {
    "source": "iana"
  },
  "application/cpl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/csrattrs": {
    "source": "iana"
  },
  "application/csta+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cstadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/csvm+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cu-seeme": {
    "source": "apache",
    "extensions": ["cu"]
  },
  "application/cwt": {
    "source": "iana"
  },
  "application/cybercash": {
    "source": "iana"
  },
  "application/dart": {
    "compressible": true
  },
  "application/dash+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpd"]
  },
  "application/dashdelta": {
    "source": "iana"
  },
  "application/davmount+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["davmount"]
  },
  "application/dca-rft": {
    "source": "iana"
  },
  "application/dcd": {
    "source": "iana"
  },
  "application/dec-dx": {
    "source": "iana"
  },
  "application/dialog-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dicom": {
    "source": "iana"
  },
  "application/dicom+json": {
    "source": "iana",
    "compressible": true
  },
  "application/dicom+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dii": {
    "source": "iana"
  },
  "application/dit": {
    "source": "iana"
  },
  "application/dns": {
    "source": "iana"
  },
  "application/dns+json": {
    "source": "iana",
    "compressible": true
  },
  "application/dns-message": {
    "source": "iana"
  },
  "application/docbook+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["dbk"]
  },
  "application/dots+cbor": {
    "source": "iana"
  },
  "application/dskpp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dssc+der": {
    "source": "iana",
    "extensions": ["dssc"]
  },
  "application/dssc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdssc"]
  },
  "application/dvcs": {
    "source": "iana"
  },
  "application/ecmascript": {
    "source": "iana",
    "compressible": true,
    "extensions": ["es","ecma"]
  },
  "application/edi-consent": {
    "source": "iana"
  },
  "application/edi-x12": {
    "source": "iana",
    "compressible": false
  },
  "application/edifact": {
    "source": "iana",
    "compressible": false
  },
  "application/efi": {
    "source": "iana"
  },
  "application/elm+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/elm+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.cap+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/emergencycalldata.comment+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.deviceinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.ecall.msd": {
    "source": "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.serviceinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.veds+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emma+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["emma"]
  },
  "application/emotionml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["emotionml"]
  },
  "application/encaprtp": {
    "source": "iana"
  },
  "application/epp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/epub+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["epub"]
  },
  "application/eshop": {
    "source": "iana"
  },
  "application/exi": {
    "source": "iana",
    "extensions": ["exi"]
  },
  "application/expect-ct-report+json": {
    "source": "iana",
    "compressible": true
  },
  "application/fastinfoset": {
    "source": "iana"
  },
  "application/fastsoap": {
    "source": "iana"
  },
  "application/fdt+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["fdt"]
  },
  "application/fhir+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/fhir+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/fido.trusted-apps+json": {
    "compressible": true
  },
  "application/fits": {
    "source": "iana"
  },
  "application/flexfec": {
    "source": "iana"
  },
  "application/font-sfnt": {
    "source": "iana"
  },
  "application/font-tdpfr": {
    "source": "iana",
    "extensions": ["pfr"]
  },
  "application/font-woff": {
    "source": "iana",
    "compressible": false
  },
  "application/framework-attributes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/geo+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["geojson"]
  },
  "application/geo+json-seq": {
    "source": "iana"
  },
  "application/geopackage+sqlite3": {
    "source": "iana"
  },
  "application/geoxacml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/gltf-buffer": {
    "source": "iana"
  },
  "application/gml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["gml"]
  },
  "application/gpx+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["gpx"]
  },
  "application/gxf": {
    "source": "apache",
    "extensions": ["gxf"]
  },
  "application/gzip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gz"]
  },
  "application/h224": {
    "source": "iana"
  },
  "application/held+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/hjson": {
    "extensions": ["hjson"]
  },
  "application/http": {
    "source": "iana"
  },
  "application/hyperstudio": {
    "source": "iana",
    "extensions": ["stk"]
  },
  "application/ibe-key-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ibe-pkg-reply+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ibe-pp-data": {
    "source": "iana"
  },
  "application/iges": {
    "source": "iana"
  },
  "application/im-iscomposing+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/index": {
    "source": "iana"
  },
  "application/index.cmd": {
    "source": "iana"
  },
  "application/index.obj": {
    "source": "iana"
  },
  "application/index.response": {
    "source": "iana"
  },
  "application/index.vnd": {
    "source": "iana"
  },
  "application/inkml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ink","inkml"]
  },
  "application/iotp": {
    "source": "iana"
  },
  "application/ipfix": {
    "source": "iana",
    "extensions": ["ipfix"]
  },
  "application/ipp": {
    "source": "iana"
  },
  "application/isup": {
    "source": "iana"
  },
  "application/its+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["its"]
  },
  "application/java-archive": {
    "source": "apache",
    "compressible": false,
    "extensions": ["jar","war","ear"]
  },
  "application/java-serialized-object": {
    "source": "apache",
    "compressible": false,
    "extensions": ["ser"]
  },
  "application/java-vm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["class"]
  },
  "application/javascript": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["js","mjs"]
  },
  "application/jf2feed+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jose": {
    "source": "iana"
  },
  "application/jose+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jrd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jscalendar+json": {
    "source": "iana",
    "compressible": true
  },
  "application/json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["json","map"]
  },
  "application/json-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/json-seq": {
    "source": "iana"
  },
  "application/json5": {
    "extensions": ["json5"]
  },
  "application/jsonml+json": {
    "source": "apache",
    "compressible": true,
    "extensions": ["jsonml"]
  },
  "application/jwk+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jwk-set+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jwt": {
    "source": "iana"
  },
  "application/kpml-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/kpml-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ld+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["jsonld"]
  },
  "application/lgr+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lgr"]
  },
  "application/link-format": {
    "source": "iana"
  },
  "application/load-control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/lost+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lostxml"]
  },
  "application/lostsync+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/lpf+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/lxf": {
    "source": "iana"
  },
  "application/mac-binhex40": {
    "source": "iana",
    "extensions": ["hqx"]
  },
  "application/mac-compactpro": {
    "source": "apache",
    "extensions": ["cpt"]
  },
  "application/macwriteii": {
    "source": "iana"
  },
  "application/mads+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mads"]
  },
  "application/manifest+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["webmanifest"]
  },
  "application/marc": {
    "source": "iana",
    "extensions": ["mrc"]
  },
  "application/marcxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mrcx"]
  },
  "application/mathematica": {
    "source": "iana",
    "extensions": ["ma","nb","mb"]
  },
  "application/mathml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mathml"]
  },
  "application/mathml-content+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mathml-presentation+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-associated-procedure-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-deregister+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-envelope+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-msk+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-msk-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-protection-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-reception-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-register+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-register-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-schedule+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-user-service-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbox": {
    "source": "iana",
    "extensions": ["mbox"]
  },
  "application/media-policy-dataset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/media_control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mediaservercontrol+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mscml"]
  },
  "application/merge-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/metalink+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["metalink"]
  },
  "application/metalink4+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["meta4"]
  },
  "application/mets+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mets"]
  },
  "application/mf4": {
    "source": "iana"
  },
  "application/mikey": {
    "source": "iana"
  },
  "application/mipc": {
    "source": "iana"
  },
  "application/missing-blocks+cbor-seq": {
    "source": "iana"
  },
  "application/mmt-aei+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["maei"]
  },
  "application/mmt-usd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["musd"]
  },
  "application/mods+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mods"]
  },
  "application/moss-keys": {
    "source": "iana"
  },
  "application/moss-signature": {
    "source": "iana"
  },
  "application/mosskey-data": {
    "source": "iana"
  },
  "application/mosskey-request": {
    "source": "iana"
  },
  "application/mp21": {
    "source": "iana",
    "extensions": ["m21","mp21"]
  },
  "application/mp4": {
    "source": "iana",
    "extensions": ["mp4s","m4p"]
  },
  "application/mpeg4-generic": {
    "source": "iana"
  },
  "application/mpeg4-iod": {
    "source": "iana"
  },
  "application/mpeg4-iod-xmt": {
    "source": "iana"
  },
  "application/mrb-consumer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mrb-publish+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/msc-ivr+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/msc-mixer+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/msword": {
    "source": "iana",
    "compressible": false,
    "extensions": ["doc","dot"]
  },
  "application/mud+json": {
    "source": "iana",
    "compressible": true
  },
  "application/multipart-core": {
    "source": "iana"
  },
  "application/mxf": {
    "source": "iana",
    "extensions": ["mxf"]
  },
  "application/n-quads": {
    "source": "iana",
    "extensions": ["nq"]
  },
  "application/n-triples": {
    "source": "iana",
    "extensions": ["nt"]
  },
  "application/nasdata": {
    "source": "iana"
  },
  "application/news-checkgroups": {
    "source": "iana",
    "charset": "US-ASCII"
  },
  "application/news-groupinfo": {
    "source": "iana",
    "charset": "US-ASCII"
  },
  "application/news-transmission": {
    "source": "iana"
  },
  "application/nlsml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/node": {
    "source": "iana",
    "extensions": ["cjs"]
  },
  "application/nss": {
    "source": "iana"
  },
  "application/oauth-authz-req+jwt": {
    "source": "iana"
  },
  "application/ocsp-request": {
    "source": "iana"
  },
  "application/ocsp-response": {
    "source": "iana"
  },
  "application/octet-stream": {
    "source": "iana",
    "compressible": false,
    "extensions": ["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]
  },
  "application/oda": {
    "source": "iana",
    "extensions": ["oda"]
  },
  "application/odm+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/odx": {
    "source": "iana"
  },
  "application/oebps-package+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["opf"]
  },
  "application/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ogx"]
  },
  "application/omdoc+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["omdoc"]
  },
  "application/onenote": {
    "source": "apache",
    "extensions": ["onetoc","onetoc2","onetmp","onepkg"]
  },
  "application/opc-nodeset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/oscore": {
    "source": "iana"
  },
  "application/oxps": {
    "source": "iana",
    "extensions": ["oxps"]
  },
  "application/p21+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/p2p-overlay+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["relo"]
  },
  "application/parityfec": {
    "source": "iana"
  },
  "application/passport": {
    "source": "iana"
  },
  "application/patch-ops-error+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xer"]
  },
  "application/pdf": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pdf"]
  },
  "application/pdx": {
    "source": "iana"
  },
  "application/pem-certificate-chain": {
    "source": "iana"
  },
  "application/pgp-encrypted": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pgp"]
  },
  "application/pgp-keys": {
    "source": "iana"
  },
  "application/pgp-signature": {
    "source": "iana",
    "extensions": ["asc","sig"]
  },
  "application/pics-rules": {
    "source": "apache",
    "extensions": ["prf"]
  },
  "application/pidf+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/pidf-diff+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/pkcs10": {
    "source": "iana",
    "extensions": ["p10"]
  },
  "application/pkcs12": {
    "source": "iana"
  },
  "application/pkcs7-mime": {
    "source": "iana",
    "extensions": ["p7m","p7c"]
  },
  "application/pkcs7-signature": {
    "source": "iana",
    "extensions": ["p7s"]
  },
  "application/pkcs8": {
    "source": "iana",
    "extensions": ["p8"]
  },
  "application/pkcs8-encrypted": {
    "source": "iana"
  },
  "application/pkix-attr-cert": {
    "source": "iana",
    "extensions": ["ac"]
  },
  "application/pkix-cert": {
    "source": "iana",
    "extensions": ["cer"]
  },
  "application/pkix-crl": {
    "source": "iana",
    "extensions": ["crl"]
  },
  "application/pkix-pkipath": {
    "source": "iana",
    "extensions": ["pkipath"]
  },
  "application/pkixcmp": {
    "source": "iana",
    "extensions": ["pki"]
  },
  "application/pls+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["pls"]
  },
  "application/poc-settings+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/postscript": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ai","eps","ps"]
  },
  "application/ppsp-tracker+json": {
    "source": "iana",
    "compressible": true
  },
  "application/problem+json": {
    "source": "iana",
    "compressible": true
  },
  "application/problem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/provenance+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["provx"]
  },
  "application/prs.alvestrand.titrax-sheet": {
    "source": "iana"
  },
  "application/prs.cww": {
    "source": "iana",
    "extensions": ["cww"]
  },
  "application/prs.cyn": {
    "source": "iana",
    "charset": "7-BIT"
  },
  "application/prs.hpub+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/prs.nprend": {
    "source": "iana"
  },
  "application/prs.plucker": {
    "source": "iana"
  },
  "application/prs.rdf-xml-crypt": {
    "source": "iana"
  },
  "application/prs.xsf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/pskc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["pskcxml"]
  },
  "application/pvd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/qsig": {
    "source": "iana"
  },
  "application/raml+yaml": {
    "compressible": true,
    "extensions": ["raml"]
  },
  "application/raptorfec": {
    "source": "iana"
  },
  "application/rdap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/rdf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rdf","owl"]
  },
  "application/reginfo+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rif"]
  },
  "application/relax-ng-compact-syntax": {
    "source": "iana",
    "extensions": ["rnc"]
  },
  "application/remote-printing": {
    "source": "iana"
  },
  "application/reputon+json": {
    "source": "iana",
    "compressible": true
  },
  "application/resource-lists+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rl"]
  },
  "application/resource-lists-diff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rld"]
  },
  "application/rfc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/riscos": {
    "source": "iana"
  },
  "application/rlmi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/rls-services+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rs"]
  },
  "application/route-apd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rapd"]
  },
  "application/route-s-tsid+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sls"]
  },
  "application/route-usd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rusd"]
  },
  "application/rpki-ghostbusters": {
    "source": "iana",
    "extensions": ["gbr"]
  },
  "application/rpki-manifest": {
    "source": "iana",
    "extensions": ["mft"]
  },
  "application/rpki-publication": {
    "source": "iana"
  },
  "application/rpki-roa": {
    "source": "iana",
    "extensions": ["roa"]
  },
  "application/rpki-updown": {
    "source": "iana"
  },
  "application/rsd+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["rsd"]
  },
  "application/rss+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["rss"]
  },
  "application/rtf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtf"]
  },
  "application/rtploopback": {
    "source": "iana"
  },
  "application/rtx": {
    "source": "iana"
  },
  "application/samlassertion+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/samlmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sarif+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sarif-external-properties+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sbe": {
    "source": "iana"
  },
  "application/sbml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sbml"]
  },
  "application/scaip+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/scim+json": {
    "source": "iana",
    "compressible": true
  },
  "application/scvp-cv-request": {
    "source": "iana",
    "extensions": ["scq"]
  },
  "application/scvp-cv-response": {
    "source": "iana",
    "extensions": ["scs"]
  },
  "application/scvp-vp-request": {
    "source": "iana",
    "extensions": ["spq"]
  },
  "application/scvp-vp-response": {
    "source": "iana",
    "extensions": ["spp"]
  },
  "application/sdp": {
    "source": "iana",
    "extensions": ["sdp"]
  },
  "application/secevent+jwt": {
    "source": "iana"
  },
  "application/senml+cbor": {
    "source": "iana"
  },
  "application/senml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/senml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["senmlx"]
  },
  "application/senml-etch+cbor": {
    "source": "iana"
  },
  "application/senml-etch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/senml-exi": {
    "source": "iana"
  },
  "application/sensml+cbor": {
    "source": "iana"
  },
  "application/sensml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sensml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sensmlx"]
  },
  "application/sensml-exi": {
    "source": "iana"
  },
  "application/sep+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sep-exi": {
    "source": "iana"
  },
  "application/session-info": {
    "source": "iana"
  },
  "application/set-payment": {
    "source": "iana"
  },
  "application/set-payment-initiation": {
    "source": "iana",
    "extensions": ["setpay"]
  },
  "application/set-registration": {
    "source": "iana"
  },
  "application/set-registration-initiation": {
    "source": "iana",
    "extensions": ["setreg"]
  },
  "application/sgml": {
    "source": "iana"
  },
  "application/sgml-open-catalog": {
    "source": "iana"
  },
  "application/shf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["shf"]
  },
  "application/sieve": {
    "source": "iana",
    "extensions": ["siv","sieve"]
  },
  "application/simple-filter+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/simple-message-summary": {
    "source": "iana"
  },
  "application/simplesymbolcontainer": {
    "source": "iana"
  },
  "application/sipc": {
    "source": "iana"
  },
  "application/slate": {
    "source": "iana"
  },
  "application/smil": {
    "source": "iana"
  },
  "application/smil+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["smi","smil"]
  },
  "application/smpte336m": {
    "source": "iana"
  },
  "application/soap+fastinfoset": {
    "source": "iana"
  },
  "application/soap+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sparql-query": {
    "source": "iana",
    "extensions": ["rq"]
  },
  "application/sparql-results+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["srx"]
  },
  "application/spirits-event+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sql": {
    "source": "iana"
  },
  "application/srgs": {
    "source": "iana",
    "extensions": ["gram"]
  },
  "application/srgs+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["grxml"]
  },
  "application/sru+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sru"]
  },
  "application/ssdl+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ssdl"]
  },
  "application/ssml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ssml"]
  },
  "application/stix+json": {
    "source": "iana",
    "compressible": true
  },
  "application/swid+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["swidtag"]
  },
  "application/tamp-apex-update": {
    "source": "iana"
  },
  "application/tamp-apex-update-confirm": {
    "source": "iana"
  },
  "application/tamp-community-update": {
    "source": "iana"
  },
  "application/tamp-community-update-confirm": {
    "source": "iana"
  },
  "application/tamp-error": {
    "source": "iana"
  },
  "application/tamp-sequence-adjust": {
    "source": "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    "source": "iana"
  },
  "application/tamp-status-query": {
    "source": "iana"
  },
  "application/tamp-status-response": {
    "source": "iana"
  },
  "application/tamp-update": {
    "source": "iana"
  },
  "application/tamp-update-confirm": {
    "source": "iana"
  },
  "application/tar": {
    "compressible": true
  },
  "application/taxii+json": {
    "source": "iana",
    "compressible": true
  },
  "application/td+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tei+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tei","teicorpus"]
  },
  "application/tetra_isi": {
    "source": "iana"
  },
  "application/thraud+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tfi"]
  },
  "application/timestamp-query": {
    "source": "iana"
  },
  "application/timestamp-reply": {
    "source": "iana"
  },
  "application/timestamped-data": {
    "source": "iana",
    "extensions": ["tsd"]
  },
  "application/tlsrpt+gzip": {
    "source": "iana"
  },
  "application/tlsrpt+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tnauthlist": {
    "source": "iana"
  },
  "application/toml": {
    "compressible": true,
    "extensions": ["toml"]
  },
  "application/trickle-ice-sdpfrag": {
    "source": "iana"
  },
  "application/trig": {
    "source": "iana",
    "extensions": ["trig"]
  },
  "application/ttml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ttml"]
  },
  "application/tve-trigger": {
    "source": "iana"
  },
  "application/tzif": {
    "source": "iana"
  },
  "application/tzif-leap": {
    "source": "iana"
  },
  "application/ubjson": {
    "compressible": false,
    "extensions": ["ubj"]
  },
  "application/ulpfec": {
    "source": "iana"
  },
  "application/urc-grpsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/urc-ressheet+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rsheet"]
  },
  "application/urc-targetdesc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["td"]
  },
  "application/urc-uisocketdesc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vcard+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vcard+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vemmi": {
    "source": "iana"
  },
  "application/vividence.scriptfile": {
    "source": "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["1km"]
  },
  "application/vnd.3gpp-prose+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    "source": "iana"
  },
  "application/vnd.3gpp.5gnas": {
    "source": "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.bsf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.gmop+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.gtpc": {
    "source": "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    "source": "iana"
  },
  "application/vnd.3gpp.lpp": {
    "source": "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-payload": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-signalling": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mid-call+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.ngap": {
    "source": "iana"
  },
  "application/vnd.3gpp.pfcp": {
    "source": "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    "source": "iana",
    "extensions": ["plb"]
  },
  "application/vnd.3gpp.pic-bw-small": {
    "source": "iana",
    "extensions": ["psb"]
  },
  "application/vnd.3gpp.pic-bw-var": {
    "source": "iana",
    "extensions": ["pvb"]
  },
  "application/vnd.3gpp.s1ap": {
    "source": "iana"
  },
  "application/vnd.3gpp.sms": {
    "source": "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.ussd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp2.sms": {
    "source": "iana"
  },
  "application/vnd.3gpp2.tcap": {
    "source": "iana",
    "extensions": ["tcap"]
  },
  "application/vnd.3lightssoftware.imagescal": {
    "source": "iana"
  },
  "application/vnd.3m.post-it-notes": {
    "source": "iana",
    "extensions": ["pwn"]
  },
  "application/vnd.accpac.simply.aso": {
    "source": "iana",
    "extensions": ["aso"]
  },
  "application/vnd.accpac.simply.imp": {
    "source": "iana",
    "extensions": ["imp"]
  },
  "application/vnd.acucobol": {
    "source": "iana",
    "extensions": ["acu"]
  },
  "application/vnd.acucorp": {
    "source": "iana",
    "extensions": ["atc","acutc"]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    "source": "apache",
    "compressible": false,
    "extensions": ["air"]
  },
  "application/vnd.adobe.flash.movie": {
    "source": "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    "source": "iana",
    "extensions": ["fcdt"]
  },
  "application/vnd.adobe.fxp": {
    "source": "iana",
    "extensions": ["fxp","fxpl"]
  },
  "application/vnd.adobe.partial-upload": {
    "source": "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdp"]
  },
  "application/vnd.adobe.xfdf": {
    "source": "iana",
    "extensions": ["xfdf"]
  },
  "application/vnd.aether.imp": {
    "source": "iana"
  },
  "application/vnd.afpc.afplinedata": {
    "source": "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    "source": "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-charset": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    "source": "iana"
  },
  "application/vnd.afpc.modca": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    "source": "iana"
  },
  "application/vnd.ah-barcode": {
    "source": "iana"
  },
  "application/vnd.ahead.space": {
    "source": "iana",
    "extensions": ["ahead"]
  },
  "application/vnd.airzip.filesecure.azf": {
    "source": "iana",
    "extensions": ["azf"]
  },
  "application/vnd.airzip.filesecure.azs": {
    "source": "iana",
    "extensions": ["azs"]
  },
  "application/vnd.amadeus+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.amazon.ebook": {
    "source": "apache",
    "extensions": ["azw"]
  },
  "application/vnd.amazon.mobi8-ebook": {
    "source": "iana"
  },
  "application/vnd.americandynamics.acc": {
    "source": "iana",
    "extensions": ["acc"]
  },
  "application/vnd.amiga.ami": {
    "source": "iana",
    "extensions": ["ami"]
  },
  "application/vnd.amundsen.maze+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.android.ota": {
    "source": "iana"
  },
  "application/vnd.android.package-archive": {
    "source": "apache",
    "compressible": false,
    "extensions": ["apk"]
  },
  "application/vnd.anki": {
    "source": "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    "source": "iana",
    "extensions": ["cii"]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    "source": "apache",
    "extensions": ["fti"]
  },
  "application/vnd.antix.game-component": {
    "source": "iana",
    "extensions": ["atx"]
  },
  "application/vnd.apache.arrow.file": {
    "source": "iana"
  },
  "application/vnd.apache.arrow.stream": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.binary": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.compact": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.json": {
    "source": "iana"
  },
  "application/vnd.api+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.aplextor.warrp+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.apothekende.reservation+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.apple.installer+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpkg"]
  },
  "application/vnd.apple.keynote": {
    "source": "iana",
    "extensions": ["key"]
  },
  "application/vnd.apple.mpegurl": {
    "source": "iana",
    "extensions": ["m3u8"]
  },
  "application/vnd.apple.numbers": {
    "source": "iana",
    "extensions": ["numbers"]
  },
  "application/vnd.apple.pages": {
    "source": "iana",
    "extensions": ["pages"]
  },
  "application/vnd.apple.pkpass": {
    "compressible": false,
    "extensions": ["pkpass"]
  },
  "application/vnd.arastra.swi": {
    "source": "iana"
  },
  "application/vnd.aristanetworks.swi": {
    "source": "iana",
    "extensions": ["swi"]
  },
  "application/vnd.artisan+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.artsquare": {
    "source": "iana"
  },
  "application/vnd.astraea-software.iota": {
    "source": "iana",
    "extensions": ["iota"]
  },
  "application/vnd.audiograph": {
    "source": "iana",
    "extensions": ["aep"]
  },
  "application/vnd.autopackage": {
    "source": "iana"
  },
  "application/vnd.avalon+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.avistar+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.balsamiq.bmml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["bmml"]
  },
  "application/vnd.balsamiq.bmpr": {
    "source": "iana"
  },
  "application/vnd.banana-accounting": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.error": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.msg": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.bekitzur-stech+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.bint.med-content": {
    "source": "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.blink-idb-value-wrapper": {
    "source": "iana"
  },
  "application/vnd.blueice.multipass": {
    "source": "iana",
    "extensions": ["mpm"]
  },
  "application/vnd.bluetooth.ep.oob": {
    "source": "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    "source": "iana"
  },
  "application/vnd.bmi": {
    "source": "iana",
    "extensions": ["bmi"]
  },
  "application/vnd.bpf": {
    "source": "iana"
  },
  "application/vnd.bpf3": {
    "source": "iana"
  },
  "application/vnd.businessobjects": {
    "source": "iana",
    "extensions": ["rep"]
  },
  "application/vnd.byu.uapi+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cab-jscript": {
    "source": "iana"
  },
  "application/vnd.canon-cpdl": {
    "source": "iana"
  },
  "application/vnd.canon-lips": {
    "source": "iana"
  },
  "application/vnd.capasystems-pg+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    "source": "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    "source": "iana"
  },
  "application/vnd.chemdraw+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cdxml"]
  },
  "application/vnd.chess-pgn": {
    "source": "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    "source": "iana",
    "extensions": ["mmd"]
  },
  "application/vnd.ciedi": {
    "source": "iana"
  },
  "application/vnd.cinderella": {
    "source": "iana",
    "extensions": ["cdy"]
  },
  "application/vnd.cirpack.isdn-ext": {
    "source": "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["csl"]
  },
  "application/vnd.claymore": {
    "source": "iana",
    "extensions": ["cla"]
  },
  "application/vnd.cloanto.rp9": {
    "source": "iana",
    "extensions": ["rp9"]
  },
  "application/vnd.clonk.c4group": {
    "source": "iana",
    "extensions": ["c4g","c4d","c4f","c4p","c4u"]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    "source": "iana",
    "extensions": ["c11amc"]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    "source": "iana",
    "extensions": ["c11amz"]
  },
  "application/vnd.coffeescript": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    "source": "iana"
  },
  "application/vnd.collection+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.collection.doc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.collection.next+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.comicbook+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.comicbook-rar": {
    "source": "iana"
  },
  "application/vnd.commerce-battelle": {
    "source": "iana"
  },
  "application/vnd.commonspace": {
    "source": "iana",
    "extensions": ["csp"]
  },
  "application/vnd.contact.cmsg": {
    "source": "iana",
    "extensions": ["cdbcmsg"]
  },
  "application/vnd.coreos.ignition+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cosmocaller": {
    "source": "iana",
    "extensions": ["cmc"]
  },
  "application/vnd.crick.clicker": {
    "source": "iana",
    "extensions": ["clkx"]
  },
  "application/vnd.crick.clicker.keyboard": {
    "source": "iana",
    "extensions": ["clkk"]
  },
  "application/vnd.crick.clicker.palette": {
    "source": "iana",
    "extensions": ["clkp"]
  },
  "application/vnd.crick.clicker.template": {
    "source": "iana",
    "extensions": ["clkt"]
  },
  "application/vnd.crick.clicker.wordbank": {
    "source": "iana",
    "extensions": ["clkw"]
  },
  "application/vnd.criticaltools.wbs+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wbs"]
  },
  "application/vnd.cryptii.pipe+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.crypto-shade-file": {
    "source": "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    "source": "iana"
  },
  "application/vnd.cryptomator.vault": {
    "source": "iana"
  },
  "application/vnd.ctc-posml": {
    "source": "iana",
    "extensions": ["pml"]
  },
  "application/vnd.ctct.ws+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cups-pdf": {
    "source": "iana"
  },
  "application/vnd.cups-postscript": {
    "source": "iana"
  },
  "application/vnd.cups-ppd": {
    "source": "iana",
    "extensions": ["ppd"]
  },
  "application/vnd.cups-raster": {
    "source": "iana"
  },
  "application/vnd.cups-raw": {
    "source": "iana"
  },
  "application/vnd.curl": {
    "source": "iana"
  },
  "application/vnd.curl.car": {
    "source": "apache",
    "extensions": ["car"]
  },
  "application/vnd.curl.pcurl": {
    "source": "apache",
    "extensions": ["pcurl"]
  },
  "application/vnd.cyan.dean.root+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cybank": {
    "source": "iana"
  },
  "application/vnd.cyclonedx+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cyclonedx+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.d3m-dataset": {
    "source": "iana"
  },
  "application/vnd.d3m-problem": {
    "source": "iana"
  },
  "application/vnd.dart": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dart"]
  },
  "application/vnd.data-vision.rdz": {
    "source": "iana",
    "extensions": ["rdz"]
  },
  "application/vnd.datapackage+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dataresource+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dbf": {
    "source": "iana",
    "extensions": ["dbf"]
  },
  "application/vnd.debian.binary-package": {
    "source": "iana"
  },
  "application/vnd.dece.data": {
    "source": "iana",
    "extensions": ["uvf","uvvf","uvd","uvvd"]
  },
  "application/vnd.dece.ttml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uvt","uvvt"]
  },
  "application/vnd.dece.unspecified": {
    "source": "iana",
    "extensions": ["uvx","uvvx"]
  },
  "application/vnd.dece.zip": {
    "source": "iana",
    "extensions": ["uvz","uvvz"]
  },
  "application/vnd.denovo.fcselayout-link": {
    "source": "iana",
    "extensions": ["fe_launch"]
  },
  "application/vnd.desmume.movie": {
    "source": "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    "source": "iana"
  },
  "application/vnd.dm.delegation+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dna": {
    "source": "iana",
    "extensions": ["dna"]
  },
  "application/vnd.document+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dolby.mlp": {
    "source": "apache",
    "extensions": ["mlp"]
  },
  "application/vnd.dolby.mobile.1": {
    "source": "iana"
  },
  "application/vnd.dolby.mobile.2": {
    "source": "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    "source": "iana"
  },
  "application/vnd.dpgraph": {
    "source": "iana",
    "extensions": ["dpg"]
  },
  "application/vnd.dreamfactory": {
    "source": "iana",
    "extensions": ["dfac"]
  },
  "application/vnd.drive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ds-keypoint": {
    "source": "apache",
    "extensions": ["kpxx"]
  },
  "application/vnd.dtg.local": {
    "source": "iana"
  },
  "application/vnd.dtg.local.flash": {
    "source": "iana"
  },
  "application/vnd.dtg.local.html": {
    "source": "iana"
  },
  "application/vnd.dvb.ait": {
    "source": "iana",
    "extensions": ["ait"]
  },
  "application/vnd.dvb.dvbisl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.dvbj": {
    "source": "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    "source": "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    "source": "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    "source": "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-container+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-generic+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-init+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.pfr": {
    "source": "iana"
  },
  "application/vnd.dvb.service": {
    "source": "iana",
    "extensions": ["svc"]
  },
  "application/vnd.dxr": {
    "source": "iana"
  },
  "application/vnd.dynageo": {
    "source": "iana",
    "extensions": ["geo"]
  },
  "application/vnd.dzr": {
    "source": "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    "source": "iana"
  },
  "application/vnd.ecdis-update": {
    "source": "iana"
  },
  "application/vnd.ecip.rlp": {
    "source": "iana"
  },
  "application/vnd.ecowin.chart": {
    "source": "iana",
    "extensions": ["mag"]
  },
  "application/vnd.ecowin.filerequest": {
    "source": "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    "source": "iana"
  },
  "application/vnd.ecowin.series": {
    "source": "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    "source": "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    "source": "iana"
  },
  "application/vnd.efi.img": {
    "source": "iana"
  },
  "application/vnd.efi.iso": {
    "source": "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.enliven": {
    "source": "iana",
    "extensions": ["nml"]
  },
  "application/vnd.enphase.envoy": {
    "source": "iana"
  },
  "application/vnd.eprints.data+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.epson.esf": {
    "source": "iana",
    "extensions": ["esf"]
  },
  "application/vnd.epson.msf": {
    "source": "iana",
    "extensions": ["msf"]
  },
  "application/vnd.epson.quickanime": {
    "source": "iana",
    "extensions": ["qam"]
  },
  "application/vnd.epson.salt": {
    "source": "iana",
    "extensions": ["slt"]
  },
  "application/vnd.epson.ssf": {
    "source": "iana",
    "extensions": ["ssf"]
  },
  "application/vnd.ericsson.quickcall": {
    "source": "iana"
  },
  "application/vnd.espass-espass+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.eszigno3+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["es3","et3"]
  },
  "application/vnd.etsi.aoc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.asic-e+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.etsi.asic-s+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.etsi.cug+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvcommand+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvservice+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsync+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.mcid+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.mheg5": {
    "source": "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.pstn+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.sci+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.simservs+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.timestamp-token": {
    "source": "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.tsl.der": {
    "source": "iana"
  },
  "application/vnd.eudora.data": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    "source": "iana"
  },
  "application/vnd.exstream-empower+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.exstream-package": {
    "source": "iana"
  },
  "application/vnd.ezpix-album": {
    "source": "iana",
    "extensions": ["ez2"]
  },
  "application/vnd.ezpix-package": {
    "source": "iana",
    "extensions": ["ez3"]
  },
  "application/vnd.f-secure.mobile": {
    "source": "iana"
  },
  "application/vnd.fastcopy-disk-image": {
    "source": "iana"
  },
  "application/vnd.fdf": {
    "source": "iana",
    "extensions": ["fdf"]
  },
  "application/vnd.fdsn.mseed": {
    "source": "iana",
    "extensions": ["mseed"]
  },
  "application/vnd.fdsn.seed": {
    "source": "iana",
    "extensions": ["seed","dataless"]
  },
  "application/vnd.ffsns": {
    "source": "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.filmit.zfc": {
    "source": "iana"
  },
  "application/vnd.fints": {
    "source": "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    "source": "iana"
  },
  "application/vnd.flographit": {
    "source": "iana",
    "extensions": ["gph"]
  },
  "application/vnd.fluxtime.clip": {
    "source": "iana",
    "extensions": ["ftc"]
  },
  "application/vnd.font-fontforge-sfd": {
    "source": "iana"
  },
  "application/vnd.framemaker": {
    "source": "iana",
    "extensions": ["fm","frame","maker","book"]
  },
  "application/vnd.frogans.fnc": {
    "source": "iana",
    "extensions": ["fnc"]
  },
  "application/vnd.frogans.ltf": {
    "source": "iana",
    "extensions": ["ltf"]
  },
  "application/vnd.fsc.weblaunch": {
    "source": "iana",
    "extensions": ["fsc"]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.fujitsu.oasys": {
    "source": "iana",
    "extensions": ["oas"]
  },
  "application/vnd.fujitsu.oasys2": {
    "source": "iana",
    "extensions": ["oa2"]
  },
  "application/vnd.fujitsu.oasys3": {
    "source": "iana",
    "extensions": ["oa3"]
  },
  "application/vnd.fujitsu.oasysgp": {
    "source": "iana",
    "extensions": ["fg5"]
  },
  "application/vnd.fujitsu.oasysprs": {
    "source": "iana",
    "extensions": ["bh2"]
  },
  "application/vnd.fujixerox.art-ex": {
    "source": "iana"
  },
  "application/vnd.fujixerox.art4": {
    "source": "iana"
  },
  "application/vnd.fujixerox.ddd": {
    "source": "iana",
    "extensions": ["ddd"]
  },
  "application/vnd.fujixerox.docuworks": {
    "source": "iana",
    "extensions": ["xdw"]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    "source": "iana",
    "extensions": ["xbd"]
  },
  "application/vnd.fujixerox.docuworks.container": {
    "source": "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    "source": "iana"
  },
  "application/vnd.fut-misnet": {
    "source": "iana"
  },
  "application/vnd.futoin+cbor": {
    "source": "iana"
  },
  "application/vnd.futoin+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.fuzzysheet": {
    "source": "iana",
    "extensions": ["fzs"]
  },
  "application/vnd.genomatix.tuxedo": {
    "source": "iana",
    "extensions": ["txd"]
  },
  "application/vnd.gentics.grd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.geo+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.geocube+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.geogebra.file": {
    "source": "iana",
    "extensions": ["ggb"]
  },
  "application/vnd.geogebra.slides": {
    "source": "iana"
  },
  "application/vnd.geogebra.tool": {
    "source": "iana",
    "extensions": ["ggt"]
  },
  "application/vnd.geometry-explorer": {
    "source": "iana",
    "extensions": ["gex","gre"]
  },
  "application/vnd.geonext": {
    "source": "iana",
    "extensions": ["gxt"]
  },
  "application/vnd.geoplan": {
    "source": "iana",
    "extensions": ["g2w"]
  },
  "application/vnd.geospace": {
    "source": "iana",
    "extensions": ["g3w"]
  },
  "application/vnd.gerber": {
    "source": "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    "source": "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    "source": "iana"
  },
  "application/vnd.gmx": {
    "source": "iana",
    "extensions": ["gmx"]
  },
  "application/vnd.google-apps.document": {
    "compressible": false,
    "extensions": ["gdoc"]
  },
  "application/vnd.google-apps.presentation": {
    "compressible": false,
    "extensions": ["gslides"]
  },
  "application/vnd.google-apps.spreadsheet": {
    "compressible": false,
    "extensions": ["gsheet"]
  },
  "application/vnd.google-earth.kml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["kml"]
  },
  "application/vnd.google-earth.kmz": {
    "source": "iana",
    "compressible": false,
    "extensions": ["kmz"]
  },
  "application/vnd.gov.sk.e-form+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gov.sk.e-form+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.grafeq": {
    "source": "iana",
    "extensions": ["gqf","gqs"]
  },
  "application/vnd.gridmp": {
    "source": "iana"
  },
  "application/vnd.groove-account": {
    "source": "iana",
    "extensions": ["gac"]
  },
  "application/vnd.groove-help": {
    "source": "iana",
    "extensions": ["ghf"]
  },
  "application/vnd.groove-identity-message": {
    "source": "iana",
    "extensions": ["gim"]
  },
  "application/vnd.groove-injector": {
    "source": "iana",
    "extensions": ["grv"]
  },
  "application/vnd.groove-tool-message": {
    "source": "iana",
    "extensions": ["gtm"]
  },
  "application/vnd.groove-tool-template": {
    "source": "iana",
    "extensions": ["tpl"]
  },
  "application/vnd.groove-vcard": {
    "source": "iana",
    "extensions": ["vcg"]
  },
  "application/vnd.hal+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hal+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["hal"]
  },
  "application/vnd.handheld-entertainment+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["zmm"]
  },
  "application/vnd.hbci": {
    "source": "iana",
    "extensions": ["hbci"]
  },
  "application/vnd.hc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hcl-bireports": {
    "source": "iana"
  },
  "application/vnd.hdt": {
    "source": "iana"
  },
  "application/vnd.heroku+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hhe.lesson-player": {
    "source": "iana",
    "extensions": ["les"]
  },
  "application/vnd.hp-hpgl": {
    "source": "iana",
    "extensions": ["hpgl"]
  },
  "application/vnd.hp-hpid": {
    "source": "iana",
    "extensions": ["hpid"]
  },
  "application/vnd.hp-hps": {
    "source": "iana",
    "extensions": ["hps"]
  },
  "application/vnd.hp-jlyt": {
    "source": "iana",
    "extensions": ["jlt"]
  },
  "application/vnd.hp-pcl": {
    "source": "iana",
    "extensions": ["pcl"]
  },
  "application/vnd.hp-pclxl": {
    "source": "iana",
    "extensions": ["pclxl"]
  },
  "application/vnd.httphone": {
    "source": "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    "source": "iana",
    "extensions": ["sfd-hdstx"]
  },
  "application/vnd.hyper+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hyper-item+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hyperdrive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hzn-3d-crossword": {
    "source": "iana"
  },
  "application/vnd.ibm.afplinedata": {
    "source": "iana"
  },
  "application/vnd.ibm.electronic-media": {
    "source": "iana"
  },
  "application/vnd.ibm.minipay": {
    "source": "iana",
    "extensions": ["mpy"]
  },
  "application/vnd.ibm.modcap": {
    "source": "iana",
    "extensions": ["afp","listafp","list3820"]
  },
  "application/vnd.ibm.rights-management": {
    "source": "iana",
    "extensions": ["irm"]
  },
  "application/vnd.ibm.secure-container": {
    "source": "iana",
    "extensions": ["sc"]
  },
  "application/vnd.iccprofile": {
    "source": "iana",
    "extensions": ["icc","icm"]
  },
  "application/vnd.ieee.1905": {
    "source": "iana"
  },
  "application/vnd.igloader": {
    "source": "iana",
    "extensions": ["igl"]
  },
  "application/vnd.imagemeter.folder+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.imagemeter.image+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.immervision-ivp": {
    "source": "iana",
    "extensions": ["ivp"]
  },
  "application/vnd.immervision-ivu": {
    "source": "iana",
    "extensions": ["ivu"]
  },
  "application/vnd.ims.imsccv1p1": {
    "source": "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    "source": "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    "source": "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.informedcontrol.rms+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.informix-visionary": {
    "source": "iana"
  },
  "application/vnd.infotech.project": {
    "source": "iana"
  },
  "application/vnd.infotech.project+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.innopath.wamp.notification": {
    "source": "iana"
  },
  "application/vnd.insors.igm": {
    "source": "iana",
    "extensions": ["igm"]
  },
  "application/vnd.intercon.formnet": {
    "source": "iana",
    "extensions": ["xpw","xpx"]
  },
  "application/vnd.intergeo": {
    "source": "iana",
    "extensions": ["i2g"]
  },
  "application/vnd.intertrust.digibox": {
    "source": "iana"
  },
  "application/vnd.intertrust.nncp": {
    "source": "iana"
  },
  "application/vnd.intu.qbo": {
    "source": "iana",
    "extensions": ["qbo"]
  },
  "application/vnd.intu.qfx": {
    "source": "iana",
    "extensions": ["qfx"]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ipunplugged.rcprofile": {
    "source": "iana",
    "extensions": ["rcprofile"]
  },
  "application/vnd.irepository.package+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["irp"]
  },
  "application/vnd.is-xpr": {
    "source": "iana",
    "extensions": ["xpr"]
  },
  "application/vnd.isac.fcs": {
    "source": "iana",
    "extensions": ["fcs"]
  },
  "application/vnd.iso11783-10+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.jam": {
    "source": "iana",
    "extensions": ["jam"]
  },
  "application/vnd.japannet-directory-service": {
    "source": "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-registration": {
    "source": "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-verification": {
    "source": "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    "source": "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    "source": "iana",
    "extensions": ["rms"]
  },
  "application/vnd.jisp": {
    "source": "iana",
    "extensions": ["jisp"]
  },
  "application/vnd.joost.joda-archive": {
    "source": "iana",
    "extensions": ["joda"]
  },
  "application/vnd.jsk.isdn-ngn": {
    "source": "iana"
  },
  "application/vnd.kahootz": {
    "source": "iana",
    "extensions": ["ktz","ktr"]
  },
  "application/vnd.kde.karbon": {
    "source": "iana",
    "extensions": ["karbon"]
  },
  "application/vnd.kde.kchart": {
    "source": "iana",
    "extensions": ["chrt"]
  },
  "application/vnd.kde.kformula": {
    "source": "iana",
    "extensions": ["kfo"]
  },
  "application/vnd.kde.kivio": {
    "source": "iana",
    "extensions": ["flw"]
  },
  "application/vnd.kde.kontour": {
    "source": "iana",
    "extensions": ["kon"]
  },
  "application/vnd.kde.kpresenter": {
    "source": "iana",
    "extensions": ["kpr","kpt"]
  },
  "application/vnd.kde.kspread": {
    "source": "iana",
    "extensions": ["ksp"]
  },
  "application/vnd.kde.kword": {
    "source": "iana",
    "extensions": ["kwd","kwt"]
  },
  "application/vnd.kenameaapp": {
    "source": "iana",
    "extensions": ["htke"]
  },
  "application/vnd.kidspiration": {
    "source": "iana",
    "extensions": ["kia"]
  },
  "application/vnd.kinar": {
    "source": "iana",
    "extensions": ["kne","knp"]
  },
  "application/vnd.koan": {
    "source": "iana",
    "extensions": ["skp","skd","skt","skm"]
  },
  "application/vnd.kodak-descriptor": {
    "source": "iana",
    "extensions": ["sse"]
  },
  "application/vnd.las": {
    "source": "iana"
  },
  "application/vnd.las.las+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.las.las+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lasxml"]
  },
  "application/vnd.laszip": {
    "source": "iana"
  },
  "application/vnd.leap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.liberty-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    "source": "iana",
    "extensions": ["lbd"]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lbe"]
  },
  "application/vnd.logipipe.circuit+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.loom": {
    "source": "iana"
  },
  "application/vnd.lotus-1-2-3": {
    "source": "iana",
    "extensions": ["123"]
  },
  "application/vnd.lotus-approach": {
    "source": "iana",
    "extensions": ["apr"]
  },
  "application/vnd.lotus-freelance": {
    "source": "iana",
    "extensions": ["pre"]
  },
  "application/vnd.lotus-notes": {
    "source": "iana",
    "extensions": ["nsf"]
  },
  "application/vnd.lotus-organizer": {
    "source": "iana",
    "extensions": ["org"]
  },
  "application/vnd.lotus-screencam": {
    "source": "iana",
    "extensions": ["scm"]
  },
  "application/vnd.lotus-wordpro": {
    "source": "iana",
    "extensions": ["lwp"]
  },
  "application/vnd.macports.portpkg": {
    "source": "iana",
    "extensions": ["portpkg"]
  },
  "application/vnd.mapbox-vector-tile": {
    "source": "iana",
    "extensions": ["mvt"]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.license+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.mdcf": {
    "source": "iana"
  },
  "application/vnd.mason+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.maxmind.maxmind-db": {
    "source": "iana"
  },
  "application/vnd.mcd": {
    "source": "iana",
    "extensions": ["mcd"]
  },
  "application/vnd.medcalcdata": {
    "source": "iana",
    "extensions": ["mc1"]
  },
  "application/vnd.mediastation.cdkey": {
    "source": "iana",
    "extensions": ["cdkey"]
  },
  "application/vnd.meridian-slingshot": {
    "source": "iana"
  },
  "application/vnd.mfer": {
    "source": "iana",
    "extensions": ["mwf"]
  },
  "application/vnd.mfmp": {
    "source": "iana",
    "extensions": ["mfm"]
  },
  "application/vnd.micro+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.micrografx.flo": {
    "source": "iana",
    "extensions": ["flo"]
  },
  "application/vnd.micrografx.igx": {
    "source": "iana",
    "extensions": ["igx"]
  },
  "application/vnd.microsoft.portable-executable": {
    "source": "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    "source": "iana"
  },
  "application/vnd.miele+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.mif": {
    "source": "iana",
    "extensions": ["mif"]
  },
  "application/vnd.minisoft-hp3000-save": {
    "source": "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    "source": "iana"
  },
  "application/vnd.mobius.daf": {
    "source": "iana",
    "extensions": ["daf"]
  },
  "application/vnd.mobius.dis": {
    "source": "iana",
    "extensions": ["dis"]
  },
  "application/vnd.mobius.mbk": {
    "source": "iana",
    "extensions": ["mbk"]
  },
  "application/vnd.mobius.mqy": {
    "source": "iana",
    "extensions": ["mqy"]
  },
  "application/vnd.mobius.msl": {
    "source": "iana",
    "extensions": ["msl"]
  },
  "application/vnd.mobius.plc": {
    "source": "iana",
    "extensions": ["plc"]
  },
  "application/vnd.mobius.txf": {
    "source": "iana",
    "extensions": ["txf"]
  },
  "application/vnd.mophun.application": {
    "source": "iana",
    "extensions": ["mpn"]
  },
  "application/vnd.mophun.certificate": {
    "source": "iana",
    "extensions": ["mpc"]
  },
  "application/vnd.motorola.flexsuite": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    "source": "iana"
  },
  "application/vnd.motorola.iprm": {
    "source": "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xul"]
  },
  "application/vnd.ms-3mfdocument": {
    "source": "iana"
  },
  "application/vnd.ms-artgalry": {
    "source": "iana",
    "extensions": ["cil"]
  },
  "application/vnd.ms-asf": {
    "source": "iana"
  },
  "application/vnd.ms-cab-compressed": {
    "source": "iana",
    "extensions": ["cab"]
  },
  "application/vnd.ms-color.iccprofile": {
    "source": "apache"
  },
  "application/vnd.ms-excel": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xls","xlm","xla","xlc","xlt","xlw"]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlam"]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlsb"]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlsm"]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["xltm"]
  },
  "application/vnd.ms-fontobject": {
    "source": "iana",
    "compressible": true,
    "extensions": ["eot"]
  },
  "application/vnd.ms-htmlhelp": {
    "source": "iana",
    "extensions": ["chm"]
  },
  "application/vnd.ms-ims": {
    "source": "iana",
    "extensions": ["ims"]
  },
  "application/vnd.ms-lrm": {
    "source": "iana",
    "extensions": ["lrm"]
  },
  "application/vnd.ms-office.activex+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-officetheme": {
    "source": "iana",
    "extensions": ["thmx"]
  },
  "application/vnd.ms-opentype": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.ms-outlook": {
    "compressible": false,
    "extensions": ["msg"]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    "source": "apache"
  },
  "application/vnd.ms-pki.seccat": {
    "source": "apache",
    "extensions": ["cat"]
  },
  "application/vnd.ms-pki.stl": {
    "source": "apache",
    "extensions": ["stl"]
  },
  "application/vnd.ms-playready.initiator+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-powerpoint": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ppt","pps","pot"]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    "source": "iana",
    "extensions": ["ppam"]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    "source": "iana",
    "extensions": ["pptm"]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    "source": "iana",
    "extensions": ["sldm"]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    "source": "iana",
    "extensions": ["ppsm"]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["potm"]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-printing.printticket+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.ms-printschematicket+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-project": {
    "source": "iana",
    "extensions": ["mpp","mpt"]
  },
  "application/vnd.ms-tnef": {
    "source": "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    "source": "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    "source": "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    "source": "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    "source": "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    "source": "iana",
    "extensions": ["docm"]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["dotm"]
  },
  "application/vnd.ms-works": {
    "source": "iana",
    "extensions": ["wps","wks","wcm","wdb"]
  },
  "application/vnd.ms-wpl": {
    "source": "iana",
    "extensions": ["wpl"]
  },
  "application/vnd.ms-xpsdocument": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xps"]
  },
  "application/vnd.msa-disk-image": {
    "source": "iana"
  },
  "application/vnd.mseq": {
    "source": "iana",
    "extensions": ["mseq"]
  },
  "application/vnd.msign": {
    "source": "iana"
  },
  "application/vnd.multiad.creator": {
    "source": "iana"
  },
  "application/vnd.multiad.creator.cif": {
    "source": "iana"
  },
  "application/vnd.music-niff": {
    "source": "iana"
  },
  "application/vnd.musician": {
    "source": "iana",
    "extensions": ["mus"]
  },
  "application/vnd.muvee.style": {
    "source": "iana",
    "extensions": ["msty"]
  },
  "application/vnd.mynfc": {
    "source": "iana",
    "extensions": ["taglet"]
  },
  "application/vnd.ncd.control": {
    "source": "iana"
  },
  "application/vnd.ncd.reference": {
    "source": "iana"
  },
  "application/vnd.nearst.inv+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nebumind.line": {
    "source": "iana"
  },
  "application/vnd.nervana": {
    "source": "iana"
  },
  "application/vnd.netfpx": {
    "source": "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    "source": "iana",
    "extensions": ["nlu"]
  },
  "application/vnd.nimn": {
    "source": "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    "source": "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    "source": "iana"
  },
  "application/vnd.nitf": {
    "source": "iana",
    "extensions": ["ntf","nitf"]
  },
  "application/vnd.noblenet-directory": {
    "source": "iana",
    "extensions": ["nnd"]
  },
  "application/vnd.noblenet-sealer": {
    "source": "iana",
    "extensions": ["nns"]
  },
  "application/vnd.noblenet-web": {
    "source": "iana",
    "extensions": ["nnw"]
  },
  "application/vnd.nokia.catalogs": {
    "source": "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.conml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.iptv.config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.isds-radio-presets": {
    "source": "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ac"]
  },
  "application/vnd.nokia.n-gage.data": {
    "source": "iana",
    "extensions": ["ngdat"]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    "source": "iana",
    "extensions": ["n-gage"]
  },
  "application/vnd.nokia.ncd": {
    "source": "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.radio-preset": {
    "source": "iana",
    "extensions": ["rpst"]
  },
  "application/vnd.nokia.radio-presets": {
    "source": "iana",
    "extensions": ["rpss"]
  },
  "application/vnd.novadigm.edm": {
    "source": "iana",
    "extensions": ["edm"]
  },
  "application/vnd.novadigm.edx": {
    "source": "iana",
    "extensions": ["edx"]
  },
  "application/vnd.novadigm.ext": {
    "source": "iana",
    "extensions": ["ext"]
  },
  "application/vnd.ntt-local.content-share": {
    "source": "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    "source": "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    "source": "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    "source": "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    "source": "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    "source": "iana",
    "extensions": ["odc"]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    "source": "iana",
    "extensions": ["otc"]
  },
  "application/vnd.oasis.opendocument.database": {
    "source": "iana",
    "extensions": ["odb"]
  },
  "application/vnd.oasis.opendocument.formula": {
    "source": "iana",
    "extensions": ["odf"]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    "source": "iana",
    "extensions": ["odft"]
  },
  "application/vnd.oasis.opendocument.graphics": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odg"]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    "source": "iana",
    "extensions": ["otg"]
  },
  "application/vnd.oasis.opendocument.image": {
    "source": "iana",
    "extensions": ["odi"]
  },
  "application/vnd.oasis.opendocument.image-template": {
    "source": "iana",
    "extensions": ["oti"]
  },
  "application/vnd.oasis.opendocument.presentation": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odp"]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    "source": "iana",
    "extensions": ["otp"]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ods"]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    "source": "iana",
    "extensions": ["ots"]
  },
  "application/vnd.oasis.opendocument.text": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odt"]
  },
  "application/vnd.oasis.opendocument.text-master": {
    "source": "iana",
    "extensions": ["odm"]
  },
  "application/vnd.oasis.opendocument.text-template": {
    "source": "iana",
    "extensions": ["ott"]
  },
  "application/vnd.oasis.opendocument.text-web": {
    "source": "iana",
    "extensions": ["oth"]
  },
  "application/vnd.obn": {
    "source": "iana"
  },
  "application/vnd.ocf+cbor": {
    "source": "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oftn.l10n+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.cspg-hexbinary": {
    "source": "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.pae.gem": {
    "source": "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.spdlist+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.ueprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.userprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.olpc-sugar": {
    "source": "iana",
    "extensions": ["xo"]
  },
  "application/vnd.oma-scws-config": {
    "source": "iana"
  },
  "application/vnd.oma-scws-http-request": {
    "source": "iana"
  },
  "application/vnd.oma-scws-http-response": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.imd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.ltkm": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.sgdu": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.sprov+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.stkm": {
    "source": "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-pcc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.dcd": {
    "source": "iana"
  },
  "application/vnd.oma.dcdc": {
    "source": "iana"
  },
  "application/vnd.oma.dd2+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dd2"]
  },
  "application/vnd.oma.drm.risd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.group-usage-list+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.lwm2m+cbor": {
    "source": "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.lwm2m+tlv": {
    "source": "iana"
  },
  "application/vnd.oma.pal+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.final-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.groups+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.push": {
    "source": "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.xcap-directory+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.omads-email+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omads-file+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omads-folder+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omaloc-supl-init": {
    "source": "iana"
  },
  "application/vnd.onepager": {
    "source": "iana"
  },
  "application/vnd.onepagertamp": {
    "source": "iana"
  },
  "application/vnd.onepagertamx": {
    "source": "iana"
  },
  "application/vnd.onepagertat": {
    "source": "iana"
  },
  "application/vnd.onepagertatp": {
    "source": "iana"
  },
  "application/vnd.onepagertatx": {
    "source": "iana"
  },
  "application/vnd.openblox.game+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["obgx"]
  },
  "application/vnd.openblox.game-binary": {
    "source": "iana"
  },
  "application/vnd.openeye.oeb": {
    "source": "iana"
  },
  "application/vnd.openofficeorg.extension": {
    "source": "apache",
    "extensions": ["oxt"]
  },
  "application/vnd.openstreetmap.data+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["osm"]
  },
  "application/vnd.opentimestamps.ots": {
    "source": "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pptx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    "source": "iana",
    "extensions": ["sldx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    "source": "iana",
    "extensions": ["ppsx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    "source": "iana",
    "extensions": ["potx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xlsx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    "source": "iana",
    "extensions": ["xltx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    "source": "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    "source": "iana",
    "compressible": false,
    "extensions": ["docx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    "source": "iana",
    "extensions": ["dotx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oracle.resource+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.orange.indata": {
    "source": "iana"
  },
  "application/vnd.osa.netdeploy": {
    "source": "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    "source": "iana",
    "extensions": ["mgp"]
  },
  "application/vnd.osgi.bundle": {
    "source": "iana"
  },
  "application/vnd.osgi.dp": {
    "source": "iana",
    "extensions": ["dp"]
  },
  "application/vnd.osgi.subsystem": {
    "source": "iana",
    "extensions": ["esa"]
  },
  "application/vnd.otps.ct-kip+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oxli.countgraph": {
    "source": "iana"
  },
  "application/vnd.pagerduty+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.palm": {
    "source": "iana",
    "extensions": ["pdb","pqa","oprc"]
  },
  "application/vnd.panoply": {
    "source": "iana"
  },
  "application/vnd.paos.xml": {
    "source": "iana"
  },
  "application/vnd.patentdive": {
    "source": "iana"
  },
  "application/vnd.patientecommsdoc": {
    "source": "iana"
  },
  "application/vnd.pawaafile": {
    "source": "iana",
    "extensions": ["paw"]
  },
  "application/vnd.pcos": {
    "source": "iana"
  },
  "application/vnd.pg.format": {
    "source": "iana",
    "extensions": ["str"]
  },
  "application/vnd.pg.osasli": {
    "source": "iana",
    "extensions": ["ei6"]
  },
  "application/vnd.piaccess.application-licence": {
    "source": "iana"
  },
  "application/vnd.picsel": {
    "source": "iana",
    "extensions": ["efif"]
  },
  "application/vnd.pmi.widget": {
    "source": "iana",
    "extensions": ["wg"]
  },
  "application/vnd.poc.group-advertisement+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.pocketlearn": {
    "source": "iana",
    "extensions": ["plf"]
  },
  "application/vnd.powerbuilder6": {
    "source": "iana",
    "extensions": ["pbd"]
  },
  "application/vnd.powerbuilder6-s": {
    "source": "iana"
  },
  "application/vnd.powerbuilder7": {
    "source": "iana"
  },
  "application/vnd.powerbuilder7-s": {
    "source": "iana"
  },
  "application/vnd.powerbuilder75": {
    "source": "iana"
  },
  "application/vnd.powerbuilder75-s": {
    "source": "iana"
  },
  "application/vnd.preminet": {
    "source": "iana"
  },
  "application/vnd.previewsystems.box": {
    "source": "iana",
    "extensions": ["box"]
  },
  "application/vnd.proteus.magazine": {
    "source": "iana",
    "extensions": ["mgz"]
  },
  "application/vnd.psfs": {
    "source": "iana"
  },
  "application/vnd.publishare-delta-tree": {
    "source": "iana",
    "extensions": ["qps"]
  },
  "application/vnd.pvi.ptid1": {
    "source": "iana",
    "extensions": ["ptid"]
  },
  "application/vnd.pwg-multiplexed": {
    "source": "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.qualcomm.brew-app-res": {
    "source": "iana"
  },
  "application/vnd.quarantainenet": {
    "source": "iana"
  },
  "application/vnd.quark.quarkxpress": {
    "source": "iana",
    "extensions": ["qxd","qxt","qwd","qwt","qxl","qxb"]
  },
  "application/vnd.quobject-quoxdocument": {
    "source": "iana"
  },
  "application/vnd.radisys.moml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-conf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.rainstor.data": {
    "source": "iana"
  },
  "application/vnd.rapid": {
    "source": "iana"
  },
  "application/vnd.rar": {
    "source": "iana",
    "extensions": ["rar"]
  },
  "application/vnd.realvnc.bed": {
    "source": "iana",
    "extensions": ["bed"]
  },
  "application/vnd.recordare.musicxml": {
    "source": "iana",
    "extensions": ["mxl"]
  },
  "application/vnd.recordare.musicxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["musicxml"]
  },
  "application/vnd.renlearn.rlprint": {
    "source": "iana"
  },
  "application/vnd.resilient.logic": {
    "source": "iana"
  },
  "application/vnd.restful+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.rig.cryptonote": {
    "source": "iana",
    "extensions": ["cryptonote"]
  },
  "application/vnd.rim.cod": {
    "source": "apache",
    "extensions": ["cod"]
  },
  "application/vnd.rn-realmedia": {
    "source": "apache",
    "extensions": ["rm"]
  },
  "application/vnd.rn-realmedia-vbr": {
    "source": "apache",
    "extensions": ["rmvb"]
  },
  "application/vnd.route66.link66+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["link66"]
  },
  "application/vnd.rs-274x": {
    "source": "iana"
  },
  "application/vnd.ruckus.download": {
    "source": "iana"
  },
  "application/vnd.s3sms": {
    "source": "iana"
  },
  "application/vnd.sailingtracker.track": {
    "source": "iana",
    "extensions": ["st"]
  },
  "application/vnd.sar": {
    "source": "iana"
  },
  "application/vnd.sbm.cid": {
    "source": "iana"
  },
  "application/vnd.sbm.mid2": {
    "source": "iana"
  },
  "application/vnd.scribus": {
    "source": "iana"
  },
  "application/vnd.sealed.3df": {
    "source": "iana"
  },
  "application/vnd.sealed.csf": {
    "source": "iana"
  },
  "application/vnd.sealed.doc": {
    "source": "iana"
  },
  "application/vnd.sealed.eml": {
    "source": "iana"
  },
  "application/vnd.sealed.mht": {
    "source": "iana"
  },
  "application/vnd.sealed.net": {
    "source": "iana"
  },
  "application/vnd.sealed.ppt": {
    "source": "iana"
  },
  "application/vnd.sealed.tiff": {
    "source": "iana"
  },
  "application/vnd.sealed.xls": {
    "source": "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    "source": "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    "source": "iana"
  },
  "application/vnd.seemail": {
    "source": "iana",
    "extensions": ["see"]
  },
  "application/vnd.seis+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.sema": {
    "source": "iana",
    "extensions": ["sema"]
  },
  "application/vnd.semd": {
    "source": "iana",
    "extensions": ["semd"]
  },
  "application/vnd.semf": {
    "source": "iana",
    "extensions": ["semf"]
  },
  "application/vnd.shade-save-file": {
    "source": "iana"
  },
  "application/vnd.shana.informed.formdata": {
    "source": "iana",
    "extensions": ["ifm"]
  },
  "application/vnd.shana.informed.formtemplate": {
    "source": "iana",
    "extensions": ["itp"]
  },
  "application/vnd.shana.informed.interchange": {
    "source": "iana",
    "extensions": ["iif"]
  },
  "application/vnd.shana.informed.package": {
    "source": "iana",
    "extensions": ["ipk"]
  },
  "application/vnd.shootproof+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.shopkick+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.shp": {
    "source": "iana"
  },
  "application/vnd.shx": {
    "source": "iana"
  },
  "application/vnd.sigrok.session": {
    "source": "iana"
  },
  "application/vnd.simtech-mindmapper": {
    "source": "iana",
    "extensions": ["twd","twds"]
  },
  "application/vnd.siren+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.smaf": {
    "source": "iana",
    "extensions": ["mmf"]
  },
  "application/vnd.smart.notebook": {
    "source": "iana"
  },
  "application/vnd.smart.teacher": {
    "source": "iana",
    "extensions": ["teacher"]
  },
  "application/vnd.snesdev-page-table": {
    "source": "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["fo"]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    "source": "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sdkm","sdkd"]
  },
  "application/vnd.spotfire.dxp": {
    "source": "iana",
    "extensions": ["dxp"]
  },
  "application/vnd.spotfire.sfs": {
    "source": "iana",
    "extensions": ["sfs"]
  },
  "application/vnd.sqlite3": {
    "source": "iana"
  },
  "application/vnd.sss-cod": {
    "source": "iana"
  },
  "application/vnd.sss-dtf": {
    "source": "iana"
  },
  "application/vnd.sss-ntf": {
    "source": "iana"
  },
  "application/vnd.stardivision.calc": {
    "source": "apache",
    "extensions": ["sdc"]
  },
  "application/vnd.stardivision.draw": {
    "source": "apache",
    "extensions": ["sda"]
  },
  "application/vnd.stardivision.impress": {
    "source": "apache",
    "extensions": ["sdd"]
  },
  "application/vnd.stardivision.math": {
    "source": "apache",
    "extensions": ["smf"]
  },
  "application/vnd.stardivision.writer": {
    "source": "apache",
    "extensions": ["sdw","vor"]
  },
  "application/vnd.stardivision.writer-global": {
    "source": "apache",
    "extensions": ["sgl"]
  },
  "application/vnd.stepmania.package": {
    "source": "iana",
    "extensions": ["smzip"]
  },
  "application/vnd.stepmania.stepchart": {
    "source": "iana",
    "extensions": ["sm"]
  },
  "application/vnd.street-stream": {
    "source": "iana"
  },
  "application/vnd.sun.wadl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wadl"]
  },
  "application/vnd.sun.xml.calc": {
    "source": "apache",
    "extensions": ["sxc"]
  },
  "application/vnd.sun.xml.calc.template": {
    "source": "apache",
    "extensions": ["stc"]
  },
  "application/vnd.sun.xml.draw": {
    "source": "apache",
    "extensions": ["sxd"]
  },
  "application/vnd.sun.xml.draw.template": {
    "source": "apache",
    "extensions": ["std"]
  },
  "application/vnd.sun.xml.impress": {
    "source": "apache",
    "extensions": ["sxi"]
  },
  "application/vnd.sun.xml.impress.template": {
    "source": "apache",
    "extensions": ["sti"]
  },
  "application/vnd.sun.xml.math": {
    "source": "apache",
    "extensions": ["sxm"]
  },
  "application/vnd.sun.xml.writer": {
    "source": "apache",
    "extensions": ["sxw"]
  },
  "application/vnd.sun.xml.writer.global": {
    "source": "apache",
    "extensions": ["sxg"]
  },
  "application/vnd.sun.xml.writer.template": {
    "source": "apache",
    "extensions": ["stw"]
  },
  "application/vnd.sus-calendar": {
    "source": "iana",
    "extensions": ["sus","susp"]
  },
  "application/vnd.svd": {
    "source": "iana",
    "extensions": ["svd"]
  },
  "application/vnd.swiftview-ics": {
    "source": "iana"
  },
  "application/vnd.sycle+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.symbian.install": {
    "source": "apache",
    "extensions": ["sis","sisx"]
  },
  "application/vnd.syncml+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["xsm"]
  },
  "application/vnd.syncml.dm+wbxml": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["bdm"]
  },
  "application/vnd.syncml.dm+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["xdm"]
  },
  "application/vnd.syncml.dm.notification": {
    "source": "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    "source": "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["ddf"]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    "source": "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.syncml.ds.notification": {
    "source": "iana"
  },
  "application/vnd.tableschema+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tao.intent-module-archive": {
    "source": "iana",
    "extensions": ["tao"]
  },
  "application/vnd.tcpdump.pcap": {
    "source": "iana",
    "extensions": ["pcap","cap","dmp"]
  },
  "application/vnd.think-cell.ppttc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tml": {
    "source": "iana"
  },
  "application/vnd.tmobile-livetv": {
    "source": "iana",
    "extensions": ["tmo"]
  },
  "application/vnd.tri.onesource": {
    "source": "iana"
  },
  "application/vnd.trid.tpt": {
    "source": "iana",
    "extensions": ["tpt"]
  },
  "application/vnd.triscape.mxs": {
    "source": "iana",
    "extensions": ["mxs"]
  },
  "application/vnd.trueapp": {
    "source": "iana",
    "extensions": ["tra"]
  },
  "application/vnd.truedoc": {
    "source": "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    "source": "iana"
  },
  "application/vnd.ufdl": {
    "source": "iana",
    "extensions": ["ufd","ufdl"]
  },
  "application/vnd.uiq.theme": {
    "source": "iana",
    "extensions": ["utz"]
  },
  "application/vnd.umajin": {
    "source": "iana",
    "extensions": ["umj"]
  },
  "application/vnd.unity": {
    "source": "iana",
    "extensions": ["unityweb"]
  },
  "application/vnd.uoml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uoml"]
  },
  "application/vnd.uplanet.alert": {
    "source": "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    "source": "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.cacheop": {
    "source": "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.channel": {
    "source": "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.list": {
    "source": "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.listcmd": {
    "source": "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.signal": {
    "source": "iana"
  },
  "application/vnd.uri-map": {
    "source": "iana"
  },
  "application/vnd.valve.source.material": {
    "source": "iana"
  },
  "application/vnd.vcx": {
    "source": "iana",
    "extensions": ["vcx"]
  },
  "application/vnd.vd-study": {
    "source": "iana"
  },
  "application/vnd.vectorworks": {
    "source": "iana"
  },
  "application/vnd.vel+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.verimatrix.vcas": {
    "source": "iana"
  },
  "application/vnd.veritone.aion+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.veryant.thin": {
    "source": "iana"
  },
  "application/vnd.ves.encrypted": {
    "source": "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    "source": "iana"
  },
  "application/vnd.visio": {
    "source": "iana",
    "extensions": ["vsd","vst","vss","vsw"]
  },
  "application/vnd.visionary": {
    "source": "iana",
    "extensions": ["vis"]
  },
  "application/vnd.vividence.scriptfile": {
    "source": "iana"
  },
  "application/vnd.vsf": {
    "source": "iana",
    "extensions": ["vsf"]
  },
  "application/vnd.wap.sic": {
    "source": "iana"
  },
  "application/vnd.wap.slc": {
    "source": "iana"
  },
  "application/vnd.wap.wbxml": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["wbxml"]
  },
  "application/vnd.wap.wmlc": {
    "source": "iana",
    "extensions": ["wmlc"]
  },
  "application/vnd.wap.wmlscriptc": {
    "source": "iana",
    "extensions": ["wmlsc"]
  },
  "application/vnd.webturbo": {
    "source": "iana",
    "extensions": ["wtb"]
  },
  "application/vnd.wfa.dpp": {
    "source": "iana"
  },
  "application/vnd.wfa.p2p": {
    "source": "iana"
  },
  "application/vnd.wfa.wsc": {
    "source": "iana"
  },
  "application/vnd.windows.devicepairing": {
    "source": "iana"
  },
  "application/vnd.wmc": {
    "source": "iana"
  },
  "application/vnd.wmf.bootstrap": {
    "source": "iana"
  },
  "application/vnd.wolfram.mathematica": {
    "source": "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    "source": "iana"
  },
  "application/vnd.wolfram.player": {
    "source": "iana",
    "extensions": ["nbp"]
  },
  "application/vnd.wordperfect": {
    "source": "iana",
    "extensions": ["wpd"]
  },
  "application/vnd.wqd": {
    "source": "iana",
    "extensions": ["wqd"]
  },
  "application/vnd.wrq-hp3000-labelled": {
    "source": "iana"
  },
  "application/vnd.wt.stf": {
    "source": "iana",
    "extensions": ["stf"]
  },
  "application/vnd.wv.csp+wbxml": {
    "source": "iana"
  },
  "application/vnd.wv.csp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.wv.ssp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xacml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xara": {
    "source": "iana",
    "extensions": ["xar"]
  },
  "application/vnd.xfdl": {
    "source": "iana",
    "extensions": ["xfdl"]
  },
  "application/vnd.xfdl.webform": {
    "source": "iana"
  },
  "application/vnd.xmi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xmpie.cpkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.dpkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.plan": {
    "source": "iana"
  },
  "application/vnd.xmpie.ppkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.xlim": {
    "source": "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    "source": "iana",
    "extensions": ["hvd"]
  },
  "application/vnd.yamaha.hv-script": {
    "source": "iana",
    "extensions": ["hvs"]
  },
  "application/vnd.yamaha.hv-voice": {
    "source": "iana",
    "extensions": ["hvp"]
  },
  "application/vnd.yamaha.openscoreformat": {
    "source": "iana",
    "extensions": ["osf"]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["osfpvg"]
  },
  "application/vnd.yamaha.remote-setup": {
    "source": "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    "source": "iana",
    "extensions": ["saf"]
  },
  "application/vnd.yamaha.smaf-phrase": {
    "source": "iana",
    "extensions": ["spf"]
  },
  "application/vnd.yamaha.through-ngn": {
    "source": "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    "source": "iana"
  },
  "application/vnd.yaoweme": {
    "source": "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    "source": "iana",
    "extensions": ["cmp"]
  },
  "application/vnd.youtube.yt": {
    "source": "iana"
  },
  "application/vnd.zul": {
    "source": "iana",
    "extensions": ["zir","zirz"]
  },
  "application/vnd.zzazz.deck+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["zaz"]
  },
  "application/voicexml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["vxml"]
  },
  "application/voucher-cms+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vq-rtcpxr": {
    "source": "iana"
  },
  "application/wasm": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wasm"]
  },
  "application/watcherinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/webpush-options+json": {
    "source": "iana",
    "compressible": true
  },
  "application/whoispp-query": {
    "source": "iana"
  },
  "application/whoispp-response": {
    "source": "iana"
  },
  "application/widget": {
    "source": "iana",
    "extensions": ["wgt"]
  },
  "application/winhlp": {
    "source": "apache",
    "extensions": ["hlp"]
  },
  "application/wita": {
    "source": "iana"
  },
  "application/wordperfect5.1": {
    "source": "iana"
  },
  "application/wsdl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wsdl"]
  },
  "application/wspolicy+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wspolicy"]
  },
  "application/x-7z-compressed": {
    "source": "apache",
    "compressible": false,
    "extensions": ["7z"]
  },
  "application/x-abiword": {
    "source": "apache",
    "extensions": ["abw"]
  },
  "application/x-ace-compressed": {
    "source": "apache",
    "extensions": ["ace"]
  },
  "application/x-amf": {
    "source": "apache"
  },
  "application/x-apple-diskimage": {
    "source": "apache",
    "extensions": ["dmg"]
  },
  "application/x-arj": {
    "compressible": false,
    "extensions": ["arj"]
  },
  "application/x-authorware-bin": {
    "source": "apache",
    "extensions": ["aab","x32","u32","vox"]
  },
  "application/x-authorware-map": {
    "source": "apache",
    "extensions": ["aam"]
  },
  "application/x-authorware-seg": {
    "source": "apache",
    "extensions": ["aas"]
  },
  "application/x-bcpio": {
    "source": "apache",
    "extensions": ["bcpio"]
  },
  "application/x-bdoc": {
    "compressible": false,
    "extensions": ["bdoc"]
  },
  "application/x-bittorrent": {
    "source": "apache",
    "extensions": ["torrent"]
  },
  "application/x-blorb": {
    "source": "apache",
    "extensions": ["blb","blorb"]
  },
  "application/x-bzip": {
    "source": "apache",
    "compressible": false,
    "extensions": ["bz"]
  },
  "application/x-bzip2": {
    "source": "apache",
    "compressible": false,
    "extensions": ["bz2","boz"]
  },
  "application/x-cbr": {
    "source": "apache",
    "extensions": ["cbr","cba","cbt","cbz","cb7"]
  },
  "application/x-cdlink": {
    "source": "apache",
    "extensions": ["vcd"]
  },
  "application/x-cfs-compressed": {
    "source": "apache",
    "extensions": ["cfs"]
  },
  "application/x-chat": {
    "source": "apache",
    "extensions": ["chat"]
  },
  "application/x-chess-pgn": {
    "source": "apache",
    "extensions": ["pgn"]
  },
  "application/x-chrome-extension": {
    "extensions": ["crx"]
  },
  "application/x-cocoa": {
    "source": "nginx",
    "extensions": ["cco"]
  },
  "application/x-compress": {
    "source": "apache"
  },
  "application/x-conference": {
    "source": "apache",
    "extensions": ["nsc"]
  },
  "application/x-cpio": {
    "source": "apache",
    "extensions": ["cpio"]
  },
  "application/x-csh": {
    "source": "apache",
    "extensions": ["csh"]
  },
  "application/x-deb": {
    "compressible": false
  },
  "application/x-debian-package": {
    "source": "apache",
    "extensions": ["deb","udeb"]
  },
  "application/x-dgc-compressed": {
    "source": "apache",
    "extensions": ["dgc"]
  },
  "application/x-director": {
    "source": "apache",
    "extensions": ["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]
  },
  "application/x-doom": {
    "source": "apache",
    "extensions": ["wad"]
  },
  "application/x-dtbncx+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ncx"]
  },
  "application/x-dtbook+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["dtb"]
  },
  "application/x-dtbresource+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["res"]
  },
  "application/x-dvi": {
    "source": "apache",
    "compressible": false,
    "extensions": ["dvi"]
  },
  "application/x-envoy": {
    "source": "apache",
    "extensions": ["evy"]
  },
  "application/x-eva": {
    "source": "apache",
    "extensions": ["eva"]
  },
  "application/x-font-bdf": {
    "source": "apache",
    "extensions": ["bdf"]
  },
  "application/x-font-dos": {
    "source": "apache"
  },
  "application/x-font-framemaker": {
    "source": "apache"
  },
  "application/x-font-ghostscript": {
    "source": "apache",
    "extensions": ["gsf"]
  },
  "application/x-font-libgrx": {
    "source": "apache"
  },
  "application/x-font-linux-psf": {
    "source": "apache",
    "extensions": ["psf"]
  },
  "application/x-font-pcf": {
    "source": "apache",
    "extensions": ["pcf"]
  },
  "application/x-font-snf": {
    "source": "apache",
    "extensions": ["snf"]
  },
  "application/x-font-speedo": {
    "source": "apache"
  },
  "application/x-font-sunos-news": {
    "source": "apache"
  },
  "application/x-font-type1": {
    "source": "apache",
    "extensions": ["pfa","pfb","pfm","afm"]
  },
  "application/x-font-vfont": {
    "source": "apache"
  },
  "application/x-freearc": {
    "source": "apache",
    "extensions": ["arc"]
  },
  "application/x-futuresplash": {
    "source": "apache",
    "extensions": ["spl"]
  },
  "application/x-gca-compressed": {
    "source": "apache",
    "extensions": ["gca"]
  },
  "application/x-glulx": {
    "source": "apache",
    "extensions": ["ulx"]
  },
  "application/x-gnumeric": {
    "source": "apache",
    "extensions": ["gnumeric"]
  },
  "application/x-gramps-xml": {
    "source": "apache",
    "extensions": ["gramps"]
  },
  "application/x-gtar": {
    "source": "apache",
    "extensions": ["gtar"]
  },
  "application/x-gzip": {
    "source": "apache"
  },
  "application/x-hdf": {
    "source": "apache",
    "extensions": ["hdf"]
  },
  "application/x-httpd-php": {
    "compressible": true,
    "extensions": ["php"]
  },
  "application/x-install-instructions": {
    "source": "apache",
    "extensions": ["install"]
  },
  "application/x-iso9660-image": {
    "source": "apache",
    "extensions": ["iso"]
  },
  "application/x-java-archive-diff": {
    "source": "nginx",
    "extensions": ["jardiff"]
  },
  "application/x-java-jnlp-file": {
    "source": "apache",
    "compressible": false,
    "extensions": ["jnlp"]
  },
  "application/x-javascript": {
    "compressible": true
  },
  "application/x-keepass2": {
    "extensions": ["kdbx"]
  },
  "application/x-latex": {
    "source": "apache",
    "compressible": false,
    "extensions": ["latex"]
  },
  "application/x-lua-bytecode": {
    "extensions": ["luac"]
  },
  "application/x-lzh-compressed": {
    "source": "apache",
    "extensions": ["lzh","lha"]
  },
  "application/x-makeself": {
    "source": "nginx",
    "extensions": ["run"]
  },
  "application/x-mie": {
    "source": "apache",
    "extensions": ["mie"]
  },
  "application/x-mobipocket-ebook": {
    "source": "apache",
    "extensions": ["prc","mobi"]
  },
  "application/x-mpegurl": {
    "compressible": false
  },
  "application/x-ms-application": {
    "source": "apache",
    "extensions": ["application"]
  },
  "application/x-ms-shortcut": {
    "source": "apache",
    "extensions": ["lnk"]
  },
  "application/x-ms-wmd": {
    "source": "apache",
    "extensions": ["wmd"]
  },
  "application/x-ms-wmz": {
    "source": "apache",
    "extensions": ["wmz"]
  },
  "application/x-ms-xbap": {
    "source": "apache",
    "extensions": ["xbap"]
  },
  "application/x-msaccess": {
    "source": "apache",
    "extensions": ["mdb"]
  },
  "application/x-msbinder": {
    "source": "apache",
    "extensions": ["obd"]
  },
  "application/x-mscardfile": {
    "source": "apache",
    "extensions": ["crd"]
  },
  "application/x-msclip": {
    "source": "apache",
    "extensions": ["clp"]
  },
  "application/x-msdos-program": {
    "extensions": ["exe"]
  },
  "application/x-msdownload": {
    "source": "apache",
    "extensions": ["exe","dll","com","bat","msi"]
  },
  "application/x-msmediaview": {
    "source": "apache",
    "extensions": ["mvb","m13","m14"]
  },
  "application/x-msmetafile": {
    "source": "apache",
    "extensions": ["wmf","wmz","emf","emz"]
  },
  "application/x-msmoney": {
    "source": "apache",
    "extensions": ["mny"]
  },
  "application/x-mspublisher": {
    "source": "apache",
    "extensions": ["pub"]
  },
  "application/x-msschedule": {
    "source": "apache",
    "extensions": ["scd"]
  },
  "application/x-msterminal": {
    "source": "apache",
    "extensions": ["trm"]
  },
  "application/x-mswrite": {
    "source": "apache",
    "extensions": ["wri"]
  },
  "application/x-netcdf": {
    "source": "apache",
    "extensions": ["nc","cdf"]
  },
  "application/x-ns-proxy-autoconfig": {
    "compressible": true,
    "extensions": ["pac"]
  },
  "application/x-nzb": {
    "source": "apache",
    "extensions": ["nzb"]
  },
  "application/x-perl": {
    "source": "nginx",
    "extensions": ["pl","pm"]
  },
  "application/x-pilot": {
    "source": "nginx",
    "extensions": ["prc","pdb"]
  },
  "application/x-pkcs12": {
    "source": "apache",
    "compressible": false,
    "extensions": ["p12","pfx"]
  },
  "application/x-pkcs7-certificates": {
    "source": "apache",
    "extensions": ["p7b","spc"]
  },
  "application/x-pkcs7-certreqresp": {
    "source": "apache",
    "extensions": ["p7r"]
  },
  "application/x-pki-message": {
    "source": "iana"
  },
  "application/x-rar-compressed": {
    "source": "apache",
    "compressible": false,
    "extensions": ["rar"]
  },
  "application/x-redhat-package-manager": {
    "source": "nginx",
    "extensions": ["rpm"]
  },
  "application/x-research-info-systems": {
    "source": "apache",
    "extensions": ["ris"]
  },
  "application/x-sea": {
    "source": "nginx",
    "extensions": ["sea"]
  },
  "application/x-sh": {
    "source": "apache",
    "compressible": true,
    "extensions": ["sh"]
  },
  "application/x-shar": {
    "source": "apache",
    "extensions": ["shar"]
  },
  "application/x-shockwave-flash": {
    "source": "apache",
    "compressible": false,
    "extensions": ["swf"]
  },
  "application/x-silverlight-app": {
    "source": "apache",
    "extensions": ["xap"]
  },
  "application/x-sql": {
    "source": "apache",
    "extensions": ["sql"]
  },
  "application/x-stuffit": {
    "source": "apache",
    "compressible": false,
    "extensions": ["sit"]
  },
  "application/x-stuffitx": {
    "source": "apache",
    "extensions": ["sitx"]
  },
  "application/x-subrip": {
    "source": "apache",
    "extensions": ["srt"]
  },
  "application/x-sv4cpio": {
    "source": "apache",
    "extensions": ["sv4cpio"]
  },
  "application/x-sv4crc": {
    "source": "apache",
    "extensions": ["sv4crc"]
  },
  "application/x-t3vm-image": {
    "source": "apache",
    "extensions": ["t3"]
  },
  "application/x-tads": {
    "source": "apache",
    "extensions": ["gam"]
  },
  "application/x-tar": {
    "source": "apache",
    "compressible": true,
    "extensions": ["tar"]
  },
  "application/x-tcl": {
    "source": "apache",
    "extensions": ["tcl","tk"]
  },
  "application/x-tex": {
    "source": "apache",
    "extensions": ["tex"]
  },
  "application/x-tex-tfm": {
    "source": "apache",
    "extensions": ["tfm"]
  },
  "application/x-texinfo": {
    "source": "apache",
    "extensions": ["texinfo","texi"]
  },
  "application/x-tgif": {
    "source": "apache",
    "extensions": ["obj"]
  },
  "application/x-ustar": {
    "source": "apache",
    "extensions": ["ustar"]
  },
  "application/x-virtualbox-hdd": {
    "compressible": true,
    "extensions": ["hdd"]
  },
  "application/x-virtualbox-ova": {
    "compressible": true,
    "extensions": ["ova"]
  },
  "application/x-virtualbox-ovf": {
    "compressible": true,
    "extensions": ["ovf"]
  },
  "application/x-virtualbox-vbox": {
    "compressible": true,
    "extensions": ["vbox"]
  },
  "application/x-virtualbox-vbox-extpack": {
    "compressible": false,
    "extensions": ["vbox-extpack"]
  },
  "application/x-virtualbox-vdi": {
    "compressible": true,
    "extensions": ["vdi"]
  },
  "application/x-virtualbox-vhd": {
    "compressible": true,
    "extensions": ["vhd"]
  },
  "application/x-virtualbox-vmdk": {
    "compressible": true,
    "extensions": ["vmdk"]
  },
  "application/x-wais-source": {
    "source": "apache",
    "extensions": ["src"]
  },
  "application/x-web-app-manifest+json": {
    "compressible": true,
    "extensions": ["webapp"]
  },
  "application/x-www-form-urlencoded": {
    "source": "iana",
    "compressible": true
  },
  "application/x-x509-ca-cert": {
    "source": "iana",
    "extensions": ["der","crt","pem"]
  },
  "application/x-x509-ca-ra-cert": {
    "source": "iana"
  },
  "application/x-x509-next-ca-cert": {
    "source": "iana"
  },
  "application/x-xfig": {
    "source": "apache",
    "extensions": ["fig"]
  },
  "application/x-xliff+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xlf"]
  },
  "application/x-xpinstall": {
    "source": "apache",
    "compressible": false,
    "extensions": ["xpi"]
  },
  "application/x-xz": {
    "source": "apache",
    "extensions": ["xz"]
  },
  "application/x-zmachine": {
    "source": "apache",
    "extensions": ["z1","z2","z3","z4","z5","z6","z7","z8"]
  },
  "application/x400-bp": {
    "source": "iana"
  },
  "application/xacml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xaml+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xaml"]
  },
  "application/xcap-att+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xav"]
  },
  "application/xcap-caps+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xca"]
  },
  "application/xcap-diff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdf"]
  },
  "application/xcap-el+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xel"]
  },
  "application/xcap-error+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xcap-ns+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xns"]
  },
  "application/xcon-conference-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xcon-conference-info-diff+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xenc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xenc"]
  },
  "application/xhtml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xhtml","xht"]
  },
  "application/xhtml-voice+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/xliff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xlf"]
  },
  "application/xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xml","xsl","xsd","rng"]
  },
  "application/xml-dtd": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dtd"]
  },
  "application/xml-external-parsed-entity": {
    "source": "iana"
  },
  "application/xml-patch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xmpp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xop+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xop"]
  },
  "application/xproc+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xpl"]
  },
  "application/xslt+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xsl","xslt"]
  },
  "application/xspf+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xspf"]
  },
  "application/xv+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mxml","xhvml","xvml","xvm"]
  },
  "application/yang": {
    "source": "iana",
    "extensions": ["yang"]
  },
  "application/yang-data+json": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-data+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-patch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/yin+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["yin"]
  },
  "application/zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["zip"]
  },
  "application/zlib": {
    "source": "iana"
  },
  "application/zstd": {
    "source": "iana"
  },
  "audio/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "audio/32kadpcm": {
    "source": "iana"
  },
  "audio/3gpp": {
    "source": "iana",
    "compressible": false,
    "extensions": ["3gpp"]
  },
  "audio/3gpp2": {
    "source": "iana"
  },
  "audio/aac": {
    "source": "iana"
  },
  "audio/ac3": {
    "source": "iana"
  },
  "audio/adpcm": {
    "source": "apache",
    "extensions": ["adp"]
  },
  "audio/amr": {
    "source": "iana",
    "extensions": ["amr"]
  },
  "audio/amr-wb": {
    "source": "iana"
  },
  "audio/amr-wb+": {
    "source": "iana"
  },
  "audio/aptx": {
    "source": "iana"
  },
  "audio/asc": {
    "source": "iana"
  },
  "audio/atrac-advanced-lossless": {
    "source": "iana"
  },
  "audio/atrac-x": {
    "source": "iana"
  },
  "audio/atrac3": {
    "source": "iana"
  },
  "audio/basic": {
    "source": "iana",
    "compressible": false,
    "extensions": ["au","snd"]
  },
  "audio/bv16": {
    "source": "iana"
  },
  "audio/bv32": {
    "source": "iana"
  },
  "audio/clearmode": {
    "source": "iana"
  },
  "audio/cn": {
    "source": "iana"
  },
  "audio/dat12": {
    "source": "iana"
  },
  "audio/dls": {
    "source": "iana"
  },
  "audio/dsr-es201108": {
    "source": "iana"
  },
  "audio/dsr-es202050": {
    "source": "iana"
  },
  "audio/dsr-es202211": {
    "source": "iana"
  },
  "audio/dsr-es202212": {
    "source": "iana"
  },
  "audio/dv": {
    "source": "iana"
  },
  "audio/dvi4": {
    "source": "iana"
  },
  "audio/eac3": {
    "source": "iana"
  },
  "audio/encaprtp": {
    "source": "iana"
  },
  "audio/evrc": {
    "source": "iana"
  },
  "audio/evrc-qcp": {
    "source": "iana"
  },
  "audio/evrc0": {
    "source": "iana"
  },
  "audio/evrc1": {
    "source": "iana"
  },
  "audio/evrcb": {
    "source": "iana"
  },
  "audio/evrcb0": {
    "source": "iana"
  },
  "audio/evrcb1": {
    "source": "iana"
  },
  "audio/evrcnw": {
    "source": "iana"
  },
  "audio/evrcnw0": {
    "source": "iana"
  },
  "audio/evrcnw1": {
    "source": "iana"
  },
  "audio/evrcwb": {
    "source": "iana"
  },
  "audio/evrcwb0": {
    "source": "iana"
  },
  "audio/evrcwb1": {
    "source": "iana"
  },
  "audio/evs": {
    "source": "iana"
  },
  "audio/flexfec": {
    "source": "iana"
  },
  "audio/fwdred": {
    "source": "iana"
  },
  "audio/g711-0": {
    "source": "iana"
  },
  "audio/g719": {
    "source": "iana"
  },
  "audio/g722": {
    "source": "iana"
  },
  "audio/g7221": {
    "source": "iana"
  },
  "audio/g723": {
    "source": "iana"
  },
  "audio/g726-16": {
    "source": "iana"
  },
  "audio/g726-24": {
    "source": "iana"
  },
  "audio/g726-32": {
    "source": "iana"
  },
  "audio/g726-40": {
    "source": "iana"
  },
  "audio/g728": {
    "source": "iana"
  },
  "audio/g729": {
    "source": "iana"
  },
  "audio/g7291": {
    "source": "iana"
  },
  "audio/g729d": {
    "source": "iana"
  },
  "audio/g729e": {
    "source": "iana"
  },
  "audio/gsm": {
    "source": "iana"
  },
  "audio/gsm-efr": {
    "source": "iana"
  },
  "audio/gsm-hr-08": {
    "source": "iana"
  },
  "audio/ilbc": {
    "source": "iana"
  },
  "audio/ip-mr_v2.5": {
    "source": "iana"
  },
  "audio/isac": {
    "source": "apache"
  },
  "audio/l16": {
    "source": "iana"
  },
  "audio/l20": {
    "source": "iana"
  },
  "audio/l24": {
    "source": "iana",
    "compressible": false
  },
  "audio/l8": {
    "source": "iana"
  },
  "audio/lpc": {
    "source": "iana"
  },
  "audio/melp": {
    "source": "iana"
  },
  "audio/melp1200": {
    "source": "iana"
  },
  "audio/melp2400": {
    "source": "iana"
  },
  "audio/melp600": {
    "source": "iana"
  },
  "audio/mhas": {
    "source": "iana"
  },
  "audio/midi": {
    "source": "apache",
    "extensions": ["mid","midi","kar","rmi"]
  },
  "audio/mobile-xmf": {
    "source": "iana",
    "extensions": ["mxmf"]
  },
  "audio/mp3": {
    "compressible": false,
    "extensions": ["mp3"]
  },
  "audio/mp4": {
    "source": "iana",
    "compressible": false,
    "extensions": ["m4a","mp4a"]
  },
  "audio/mp4a-latm": {
    "source": "iana"
  },
  "audio/mpa": {
    "source": "iana"
  },
  "audio/mpa-robust": {
    "source": "iana"
  },
  "audio/mpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mpga","mp2","mp2a","mp3","m2a","m3a"]
  },
  "audio/mpeg4-generic": {
    "source": "iana"
  },
  "audio/musepack": {
    "source": "apache"
  },
  "audio/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["oga","ogg","spx","opus"]
  },
  "audio/opus": {
    "source": "iana"
  },
  "audio/parityfec": {
    "source": "iana"
  },
  "audio/pcma": {
    "source": "iana"
  },
  "audio/pcma-wb": {
    "source": "iana"
  },
  "audio/pcmu": {
    "source": "iana"
  },
  "audio/pcmu-wb": {
    "source": "iana"
  },
  "audio/prs.sid": {
    "source": "iana"
  },
  "audio/qcelp": {
    "source": "iana"
  },
  "audio/raptorfec": {
    "source": "iana"
  },
  "audio/red": {
    "source": "iana"
  },
  "audio/rtp-enc-aescm128": {
    "source": "iana"
  },
  "audio/rtp-midi": {
    "source": "iana"
  },
  "audio/rtploopback": {
    "source": "iana"
  },
  "audio/rtx": {
    "source": "iana"
  },
  "audio/s3m": {
    "source": "apache",
    "extensions": ["s3m"]
  },
  "audio/scip": {
    "source": "iana"
  },
  "audio/silk": {
    "source": "apache",
    "extensions": ["sil"]
  },
  "audio/smv": {
    "source": "iana"
  },
  "audio/smv-qcp": {
    "source": "iana"
  },
  "audio/smv0": {
    "source": "iana"
  },
  "audio/sofa": {
    "source": "iana"
  },
  "audio/sp-midi": {
    "source": "iana"
  },
  "audio/speex": {
    "source": "iana"
  },
  "audio/t140c": {
    "source": "iana"
  },
  "audio/t38": {
    "source": "iana"
  },
  "audio/telephone-event": {
    "source": "iana"
  },
  "audio/tetra_acelp": {
    "source": "iana"
  },
  "audio/tetra_acelp_bb": {
    "source": "iana"
  },
  "audio/tone": {
    "source": "iana"
  },
  "audio/tsvcis": {
    "source": "iana"
  },
  "audio/uemclip": {
    "source": "iana"
  },
  "audio/ulpfec": {
    "source": "iana"
  },
  "audio/usac": {
    "source": "iana"
  },
  "audio/vdvi": {
    "source": "iana"
  },
  "audio/vmr-wb": {
    "source": "iana"
  },
  "audio/vnd.3gpp.iufp": {
    "source": "iana"
  },
  "audio/vnd.4sb": {
    "source": "iana"
  },
  "audio/vnd.audiokoz": {
    "source": "iana"
  },
  "audio/vnd.celp": {
    "source": "iana"
  },
  "audio/vnd.cisco.nse": {
    "source": "iana"
  },
  "audio/vnd.cmles.radio-events": {
    "source": "iana"
  },
  "audio/vnd.cns.anp1": {
    "source": "iana"
  },
  "audio/vnd.cns.inf1": {
    "source": "iana"
  },
  "audio/vnd.dece.audio": {
    "source": "iana",
    "extensions": ["uva","uvva"]
  },
  "audio/vnd.digital-winds": {
    "source": "iana",
    "extensions": ["eol"]
  },
  "audio/vnd.dlna.adts": {
    "source": "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    "source": "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    "source": "iana"
  },
  "audio/vnd.dolby.mlp": {
    "source": "iana"
  },
  "audio/vnd.dolby.mps": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2x": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2z": {
    "source": "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    "source": "iana"
  },
  "audio/vnd.dra": {
    "source": "iana",
    "extensions": ["dra"]
  },
  "audio/vnd.dts": {
    "source": "iana",
    "extensions": ["dts"]
  },
  "audio/vnd.dts.hd": {
    "source": "iana",
    "extensions": ["dtshd"]
  },
  "audio/vnd.dts.uhd": {
    "source": "iana"
  },
  "audio/vnd.dvb.file": {
    "source": "iana"
  },
  "audio/vnd.everad.plj": {
    "source": "iana"
  },
  "audio/vnd.hns.audio": {
    "source": "iana"
  },
  "audio/vnd.lucent.voice": {
    "source": "iana",
    "extensions": ["lvp"]
  },
  "audio/vnd.ms-playready.media.pya": {
    "source": "iana",
    "extensions": ["pya"]
  },
  "audio/vnd.nokia.mobile-xmf": {
    "source": "iana"
  },
  "audio/vnd.nortel.vbk": {
    "source": "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    "source": "iana",
    "extensions": ["ecelp4800"]
  },
  "audio/vnd.nuera.ecelp7470": {
    "source": "iana",
    "extensions": ["ecelp7470"]
  },
  "audio/vnd.nuera.ecelp9600": {
    "source": "iana",
    "extensions": ["ecelp9600"]
  },
  "audio/vnd.octel.sbc": {
    "source": "iana"
  },
  "audio/vnd.presonus.multitrack": {
    "source": "iana"
  },
  "audio/vnd.qcelp": {
    "source": "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    "source": "iana"
  },
  "audio/vnd.rip": {
    "source": "iana",
    "extensions": ["rip"]
  },
  "audio/vnd.rn-realaudio": {
    "compressible": false
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    "source": "iana"
  },
  "audio/vnd.vmx.cvsd": {
    "source": "iana"
  },
  "audio/vnd.wave": {
    "compressible": false
  },
  "audio/vorbis": {
    "source": "iana",
    "compressible": false
  },
  "audio/vorbis-config": {
    "source": "iana"
  },
  "audio/wav": {
    "compressible": false,
    "extensions": ["wav"]
  },
  "audio/wave": {
    "compressible": false,
    "extensions": ["wav"]
  },
  "audio/webm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["weba"]
  },
  "audio/x-aac": {
    "source": "apache",
    "compressible": false,
    "extensions": ["aac"]
  },
  "audio/x-aiff": {
    "source": "apache",
    "extensions": ["aif","aiff","aifc"]
  },
  "audio/x-caf": {
    "source": "apache",
    "compressible": false,
    "extensions": ["caf"]
  },
  "audio/x-flac": {
    "source": "apache",
    "extensions": ["flac"]
  },
  "audio/x-m4a": {
    "source": "nginx",
    "extensions": ["m4a"]
  },
  "audio/x-matroska": {
    "source": "apache",
    "extensions": ["mka"]
  },
  "audio/x-mpegurl": {
    "source": "apache",
    "extensions": ["m3u"]
  },
  "audio/x-ms-wax": {
    "source": "apache",
    "extensions": ["wax"]
  },
  "audio/x-ms-wma": {
    "source": "apache",
    "extensions": ["wma"]
  },
  "audio/x-pn-realaudio": {
    "source": "apache",
    "extensions": ["ram","ra"]
  },
  "audio/x-pn-realaudio-plugin": {
    "source": "apache",
    "extensions": ["rmp"]
  },
  "audio/x-realaudio": {
    "source": "nginx",
    "extensions": ["ra"]
  },
  "audio/x-tta": {
    "source": "apache"
  },
  "audio/x-wav": {
    "source": "apache",
    "extensions": ["wav"]
  },
  "audio/xm": {
    "source": "apache",
    "extensions": ["xm"]
  },
  "chemical/x-cdx": {
    "source": "apache",
    "extensions": ["cdx"]
  },
  "chemical/x-cif": {
    "source": "apache",
    "extensions": ["cif"]
  },
  "chemical/x-cmdf": {
    "source": "apache",
    "extensions": ["cmdf"]
  },
  "chemical/x-cml": {
    "source": "apache",
    "extensions": ["cml"]
  },
  "chemical/x-csml": {
    "source": "apache",
    "extensions": ["csml"]
  },
  "chemical/x-pdb": {
    "source": "apache"
  },
  "chemical/x-xyz": {
    "source": "apache",
    "extensions": ["xyz"]
  },
  "font/collection": {
    "source": "iana",
    "extensions": ["ttc"]
  },
  "font/otf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["otf"]
  },
  "font/sfnt": {
    "source": "iana"
  },
  "font/ttf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ttf"]
  },
  "font/woff": {
    "source": "iana",
    "extensions": ["woff"]
  },
  "font/woff2": {
    "source": "iana",
    "extensions": ["woff2"]
  },
  "image/aces": {
    "source": "iana",
    "extensions": ["exr"]
  },
  "image/apng": {
    "compressible": false,
    "extensions": ["apng"]
  },
  "image/avci": {
    "source": "iana"
  },
  "image/avcs": {
    "source": "iana"
  },
  "image/avif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["avif"]
  },
  "image/bmp": {
    "source": "iana",
    "compressible": true,
    "extensions": ["bmp"]
  },
  "image/cgm": {
    "source": "iana",
    "extensions": ["cgm"]
  },
  "image/dicom-rle": {
    "source": "iana",
    "extensions": ["drle"]
  },
  "image/emf": {
    "source": "iana",
    "extensions": ["emf"]
  },
  "image/fits": {
    "source": "iana",
    "extensions": ["fits"]
  },
  "image/g3fax": {
    "source": "iana",
    "extensions": ["g3"]
  },
  "image/gif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gif"]
  },
  "image/heic": {
    "source": "iana",
    "extensions": ["heic"]
  },
  "image/heic-sequence": {
    "source": "iana",
    "extensions": ["heics"]
  },
  "image/heif": {
    "source": "iana",
    "extensions": ["heif"]
  },
  "image/heif-sequence": {
    "source": "iana",
    "extensions": ["heifs"]
  },
  "image/hej2k": {
    "source": "iana",
    "extensions": ["hej2"]
  },
  "image/hsj2": {
    "source": "iana",
    "extensions": ["hsj2"]
  },
  "image/ief": {
    "source": "iana",
    "extensions": ["ief"]
  },
  "image/jls": {
    "source": "iana",
    "extensions": ["jls"]
  },
  "image/jp2": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jp2","jpg2"]
  },
  "image/jpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpeg","jpg","jpe"]
  },
  "image/jph": {
    "source": "iana",
    "extensions": ["jph"]
  },
  "image/jphc": {
    "source": "iana",
    "extensions": ["jhc"]
  },
  "image/jpm": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpm"]
  },
  "image/jpx": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpx","jpf"]
  },
  "image/jxr": {
    "source": "iana",
    "extensions": ["jxr"]
  },
  "image/jxra": {
    "source": "iana",
    "extensions": ["jxra"]
  },
  "image/jxrs": {
    "source": "iana",
    "extensions": ["jxrs"]
  },
  "image/jxs": {
    "source": "iana",
    "extensions": ["jxs"]
  },
  "image/jxsc": {
    "source": "iana",
    "extensions": ["jxsc"]
  },
  "image/jxsi": {
    "source": "iana",
    "extensions": ["jxsi"]
  },
  "image/jxss": {
    "source": "iana",
    "extensions": ["jxss"]
  },
  "image/ktx": {
    "source": "iana",
    "extensions": ["ktx"]
  },
  "image/ktx2": {
    "source": "iana",
    "extensions": ["ktx2"]
  },
  "image/naplps": {
    "source": "iana"
  },
  "image/pjpeg": {
    "compressible": false
  },
  "image/png": {
    "source": "iana",
    "compressible": false,
    "extensions": ["png"]
  },
  "image/prs.btif": {
    "source": "iana",
    "extensions": ["btif"]
  },
  "image/prs.pti": {
    "source": "iana",
    "extensions": ["pti"]
  },
  "image/pwg-raster": {
    "source": "iana"
  },
  "image/sgi": {
    "source": "apache",
    "extensions": ["sgi"]
  },
  "image/svg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["svg","svgz"]
  },
  "image/t38": {
    "source": "iana",
    "extensions": ["t38"]
  },
  "image/tiff": {
    "source": "iana",
    "compressible": false,
    "extensions": ["tif","tiff"]
  },
  "image/tiff-fx": {
    "source": "iana",
    "extensions": ["tfx"]
  },
  "image/vnd.adobe.photoshop": {
    "source": "iana",
    "compressible": true,
    "extensions": ["psd"]
  },
  "image/vnd.airzip.accelerator.azv": {
    "source": "iana",
    "extensions": ["azv"]
  },
  "image/vnd.cns.inf2": {
    "source": "iana"
  },
  "image/vnd.dece.graphic": {
    "source": "iana",
    "extensions": ["uvi","uvvi","uvg","uvvg"]
  },
  "image/vnd.djvu": {
    "source": "iana",
    "extensions": ["djvu","djv"]
  },
  "image/vnd.dvb.subtitle": {
    "source": "iana",
    "extensions": ["sub"]
  },
  "image/vnd.dwg": {
    "source": "iana",
    "extensions": ["dwg"]
  },
  "image/vnd.dxf": {
    "source": "iana",
    "extensions": ["dxf"]
  },
  "image/vnd.fastbidsheet": {
    "source": "iana",
    "extensions": ["fbs"]
  },
  "image/vnd.fpx": {
    "source": "iana",
    "extensions": ["fpx"]
  },
  "image/vnd.fst": {
    "source": "iana",
    "extensions": ["fst"]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    "source": "iana",
    "extensions": ["mmr"]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    "source": "iana",
    "extensions": ["rlc"]
  },
  "image/vnd.globalgraphics.pgb": {
    "source": "iana"
  },
  "image/vnd.microsoft.icon": {
    "source": "iana",
    "extensions": ["ico"]
  },
  "image/vnd.mix": {
    "source": "iana"
  },
  "image/vnd.mozilla.apng": {
    "source": "iana"
  },
  "image/vnd.ms-dds": {
    "extensions": ["dds"]
  },
  "image/vnd.ms-modi": {
    "source": "iana",
    "extensions": ["mdi"]
  },
  "image/vnd.ms-photo": {
    "source": "apache",
    "extensions": ["wdp"]
  },
  "image/vnd.net-fpx": {
    "source": "iana",
    "extensions": ["npx"]
  },
  "image/vnd.pco.b16": {
    "source": "iana",
    "extensions": ["b16"]
  },
  "image/vnd.radiance": {
    "source": "iana"
  },
  "image/vnd.sealed.png": {
    "source": "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    "source": "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    "source": "iana"
  },
  "image/vnd.svf": {
    "source": "iana"
  },
  "image/vnd.tencent.tap": {
    "source": "iana",
    "extensions": ["tap"]
  },
  "image/vnd.valve.source.texture": {
    "source": "iana",
    "extensions": ["vtf"]
  },
  "image/vnd.wap.wbmp": {
    "source": "iana",
    "extensions": ["wbmp"]
  },
  "image/vnd.xiff": {
    "source": "iana",
    "extensions": ["xif"]
  },
  "image/vnd.zbrush.pcx": {
    "source": "iana",
    "extensions": ["pcx"]
  },
  "image/webp": {
    "source": "apache",
    "extensions": ["webp"]
  },
  "image/wmf": {
    "source": "iana",
    "extensions": ["wmf"]
  },
  "image/x-3ds": {
    "source": "apache",
    "extensions": ["3ds"]
  },
  "image/x-cmu-raster": {
    "source": "apache",
    "extensions": ["ras"]
  },
  "image/x-cmx": {
    "source": "apache",
    "extensions": ["cmx"]
  },
  "image/x-freehand": {
    "source": "apache",
    "extensions": ["fh","fhc","fh4","fh5","fh7"]
  },
  "image/x-icon": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ico"]
  },
  "image/x-jng": {
    "source": "nginx",
    "extensions": ["jng"]
  },
  "image/x-mrsid-image": {
    "source": "apache",
    "extensions": ["sid"]
  },
  "image/x-ms-bmp": {
    "source": "nginx",
    "compressible": true,
    "extensions": ["bmp"]
  },
  "image/x-pcx": {
    "source": "apache",
    "extensions": ["pcx"]
  },
  "image/x-pict": {
    "source": "apache",
    "extensions": ["pic","pct"]
  },
  "image/x-portable-anymap": {
    "source": "apache",
    "extensions": ["pnm"]
  },
  "image/x-portable-bitmap": {
    "source": "apache",
    "extensions": ["pbm"]
  },
  "image/x-portable-graymap": {
    "source": "apache",
    "extensions": ["pgm"]
  },
  "image/x-portable-pixmap": {
    "source": "apache",
    "extensions": ["ppm"]
  },
  "image/x-rgb": {
    "source": "apache",
    "extensions": ["rgb"]
  },
  "image/x-tga": {
    "source": "apache",
    "extensions": ["tga"]
  },
  "image/x-xbitmap": {
    "source": "apache",
    "extensions": ["xbm"]
  },
  "image/x-xcf": {
    "compressible": false
  },
  "image/x-xpixmap": {
    "source": "apache",
    "extensions": ["xpm"]
  },
  "image/x-xwindowdump": {
    "source": "apache",
    "extensions": ["xwd"]
  },
  "message/cpim": {
    "source": "iana"
  },
  "message/delivery-status": {
    "source": "iana"
  },
  "message/disposition-notification": {
    "source": "iana",
    "extensions": [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    "source": "iana"
  },
  "message/feedback-report": {
    "source": "iana"
  },
  "message/global": {
    "source": "iana",
    "extensions": ["u8msg"]
  },
  "message/global-delivery-status": {
    "source": "iana",
    "extensions": ["u8dsn"]
  },
  "message/global-disposition-notification": {
    "source": "iana",
    "extensions": ["u8mdn"]
  },
  "message/global-headers": {
    "source": "iana",
    "extensions": ["u8hdr"]
  },
  "message/http": {
    "source": "iana",
    "compressible": false
  },
  "message/imdn+xml": {
    "source": "iana",
    "compressible": true
  },
  "message/news": {
    "source": "iana"
  },
  "message/partial": {
    "source": "iana",
    "compressible": false
  },
  "message/rfc822": {
    "source": "iana",
    "compressible": true,
    "extensions": ["eml","mime"]
  },
  "message/s-http": {
    "source": "iana"
  },
  "message/sip": {
    "source": "iana"
  },
  "message/sipfrag": {
    "source": "iana"
  },
  "message/tracking-status": {
    "source": "iana"
  },
  "message/vnd.si.simp": {
    "source": "iana"
  },
  "message/vnd.wfa.wsc": {
    "source": "iana",
    "extensions": ["wsc"]
  },
  "model/3mf": {
    "source": "iana",
    "extensions": ["3mf"]
  },
  "model/e57": {
    "source": "iana"
  },
  "model/gltf+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["gltf"]
  },
  "model/gltf-binary": {
    "source": "iana",
    "compressible": true,
    "extensions": ["glb"]
  },
  "model/iges": {
    "source": "iana",
    "compressible": false,
    "extensions": ["igs","iges"]
  },
  "model/mesh": {
    "source": "iana",
    "compressible": false,
    "extensions": ["msh","mesh","silo"]
  },
  "model/mtl": {
    "source": "iana",
    "extensions": ["mtl"]
  },
  "model/obj": {
    "source": "iana",
    "extensions": ["obj"]
  },
  "model/step+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["stpz"]
  },
  "model/step-xml+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["stpxz"]
  },
  "model/stl": {
    "source": "iana",
    "extensions": ["stl"]
  },
  "model/vnd.collada+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dae"]
  },
  "model/vnd.dwf": {
    "source": "iana",
    "extensions": ["dwf"]
  },
  "model/vnd.flatland.3dml": {
    "source": "iana"
  },
  "model/vnd.gdl": {
    "source": "iana",
    "extensions": ["gdl"]
  },
  "model/vnd.gs-gdl": {
    "source": "apache"
  },
  "model/vnd.gs.gdl": {
    "source": "iana"
  },
  "model/vnd.gtw": {
    "source": "iana",
    "extensions": ["gtw"]
  },
  "model/vnd.moml+xml": {
    "source": "iana",
    "compressible": true
  },
  "model/vnd.mts": {
    "source": "iana",
    "extensions": ["mts"]
  },
  "model/vnd.opengex": {
    "source": "iana",
    "extensions": ["ogex"]
  },
  "model/vnd.parasolid.transmit.binary": {
    "source": "iana",
    "extensions": ["x_b"]
  },
  "model/vnd.parasolid.transmit.text": {
    "source": "iana",
    "extensions": ["x_t"]
  },
  "model/vnd.pytha.pyox": {
    "source": "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    "source": "iana"
  },
  "model/vnd.sap.vds": {
    "source": "iana",
    "extensions": ["vds"]
  },
  "model/vnd.usdz+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["usdz"]
  },
  "model/vnd.valve.source.compiled-map": {
    "source": "iana",
    "extensions": ["bsp"]
  },
  "model/vnd.vtu": {
    "source": "iana",
    "extensions": ["vtu"]
  },
  "model/vrml": {
    "source": "iana",
    "compressible": false,
    "extensions": ["wrl","vrml"]
  },
  "model/x3d+binary": {
    "source": "apache",
    "compressible": false,
    "extensions": ["x3db","x3dbz"]
  },
  "model/x3d+fastinfoset": {
    "source": "iana",
    "extensions": ["x3db"]
  },
  "model/x3d+vrml": {
    "source": "apache",
    "compressible": false,
    "extensions": ["x3dv","x3dvz"]
  },
  "model/x3d+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["x3d","x3dz"]
  },
  "model/x3d-vrml": {
    "source": "iana",
    "extensions": ["x3dv"]
  },
  "multipart/alternative": {
    "source": "iana",
    "compressible": false
  },
  "multipart/appledouble": {
    "source": "iana"
  },
  "multipart/byteranges": {
    "source": "iana"
  },
  "multipart/digest": {
    "source": "iana"
  },
  "multipart/encrypted": {
    "source": "iana",
    "compressible": false
  },
  "multipart/form-data": {
    "source": "iana",
    "compressible": false
  },
  "multipart/header-set": {
    "source": "iana"
  },
  "multipart/mixed": {
    "source": "iana"
  },
  "multipart/multilingual": {
    "source": "iana"
  },
  "multipart/parallel": {
    "source": "iana"
  },
  "multipart/related": {
    "source": "iana",
    "compressible": false
  },
  "multipart/report": {
    "source": "iana"
  },
  "multipart/signed": {
    "source": "iana",
    "compressible": false
  },
  "multipart/vnd.bint.med-plus": {
    "source": "iana"
  },
  "multipart/voice-message": {
    "source": "iana"
  },
  "multipart/x-mixed-replace": {
    "source": "iana"
  },
  "text/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "text/cache-manifest": {
    "source": "iana",
    "compressible": true,
    "extensions": ["appcache","manifest"]
  },
  "text/calendar": {
    "source": "iana",
    "extensions": ["ics","ifb"]
  },
  "text/calender": {
    "compressible": true
  },
  "text/cmd": {
    "compressible": true
  },
  "text/coffeescript": {
    "extensions": ["coffee","litcoffee"]
  },
  "text/cql": {
    "source": "iana"
  },
  "text/cql-expression": {
    "source": "iana"
  },
  "text/cql-identifier": {
    "source": "iana"
  },
  "text/css": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["css"]
  },
  "text/csv": {
    "source": "iana",
    "compressible": true,
    "extensions": ["csv"]
  },
  "text/csv-schema": {
    "source": "iana"
  },
  "text/directory": {
    "source": "iana"
  },
  "text/dns": {
    "source": "iana"
  },
  "text/ecmascript": {
    "source": "iana"
  },
  "text/encaprtp": {
    "source": "iana"
  },
  "text/enriched": {
    "source": "iana"
  },
  "text/fhirpath": {
    "source": "iana"
  },
  "text/flexfec": {
    "source": "iana"
  },
  "text/fwdred": {
    "source": "iana"
  },
  "text/gff3": {
    "source": "iana"
  },
  "text/grammar-ref-list": {
    "source": "iana"
  },
  "text/html": {
    "source": "iana",
    "compressible": true,
    "extensions": ["html","htm","shtml"]
  },
  "text/jade": {
    "extensions": ["jade"]
  },
  "text/javascript": {
    "source": "iana",
    "compressible": true
  },
  "text/jcr-cnd": {
    "source": "iana"
  },
  "text/jsx": {
    "compressible": true,
    "extensions": ["jsx"]
  },
  "text/less": {
    "compressible": true,
    "extensions": ["less"]
  },
  "text/markdown": {
    "source": "iana",
    "compressible": true,
    "extensions": ["markdown","md"]
  },
  "text/mathml": {
    "source": "nginx",
    "extensions": ["mml"]
  },
  "text/mdx": {
    "compressible": true,
    "extensions": ["mdx"]
  },
  "text/mizar": {
    "source": "iana"
  },
  "text/n3": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["n3"]
  },
  "text/parameters": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/parityfec": {
    "source": "iana"
  },
  "text/plain": {
    "source": "iana",
    "compressible": true,
    "extensions": ["txt","text","conf","def","list","log","in","ini"]
  },
  "text/provenance-notation": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    "source": "iana"
  },
  "text/prs.lines.tag": {
    "source": "iana",
    "extensions": ["dsc"]
  },
  "text/prs.prop.logic": {
    "source": "iana"
  },
  "text/raptorfec": {
    "source": "iana"
  },
  "text/red": {
    "source": "iana"
  },
  "text/rfc822-headers": {
    "source": "iana"
  },
  "text/richtext": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtx"]
  },
  "text/rtf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtf"]
  },
  "text/rtp-enc-aescm128": {
    "source": "iana"
  },
  "text/rtploopback": {
    "source": "iana"
  },
  "text/rtx": {
    "source": "iana"
  },
  "text/sgml": {
    "source": "iana",
    "extensions": ["sgml","sgm"]
  },
  "text/shaclc": {
    "source": "iana"
  },
  "text/shex": {
    "source": "iana",
    "extensions": ["shex"]
  },
  "text/slim": {
    "extensions": ["slim","slm"]
  },
  "text/spdx": {
    "source": "iana",
    "extensions": ["spdx"]
  },
  "text/strings": {
    "source": "iana"
  },
  "text/stylus": {
    "extensions": ["stylus","styl"]
  },
  "text/t140": {
    "source": "iana"
  },
  "text/tab-separated-values": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tsv"]
  },
  "text/troff": {
    "source": "iana",
    "extensions": ["t","tr","roff","man","me","ms"]
  },
  "text/turtle": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["ttl"]
  },
  "text/ulpfec": {
    "source": "iana"
  },
  "text/uri-list": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uri","uris","urls"]
  },
  "text/vcard": {
    "source": "iana",
    "compressible": true,
    "extensions": ["vcard"]
  },
  "text/vnd.a": {
    "source": "iana"
  },
  "text/vnd.abc": {
    "source": "iana"
  },
  "text/vnd.ascii-art": {
    "source": "iana"
  },
  "text/vnd.curl": {
    "source": "iana",
    "extensions": ["curl"]
  },
  "text/vnd.curl.dcurl": {
    "source": "apache",
    "extensions": ["dcurl"]
  },
  "text/vnd.curl.mcurl": {
    "source": "apache",
    "extensions": ["mcurl"]
  },
  "text/vnd.curl.scurl": {
    "source": "apache",
    "extensions": ["scurl"]
  },
  "text/vnd.debian.copyright": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.dmclientscript": {
    "source": "iana"
  },
  "text/vnd.dvb.subtitle": {
    "source": "iana",
    "extensions": ["sub"]
  },
  "text/vnd.esmertec.theme-descriptor": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.ficlab.flt": {
    "source": "iana"
  },
  "text/vnd.fly": {
    "source": "iana",
    "extensions": ["fly"]
  },
  "text/vnd.fmi.flexstor": {
    "source": "iana",
    "extensions": ["flx"]
  },
  "text/vnd.gml": {
    "source": "iana"
  },
  "text/vnd.graphviz": {
    "source": "iana",
    "extensions": ["gv"]
  },
  "text/vnd.hans": {
    "source": "iana"
  },
  "text/vnd.hgl": {
    "source": "iana"
  },
  "text/vnd.in3d.3dml": {
    "source": "iana",
    "extensions": ["3dml"]
  },
  "text/vnd.in3d.spot": {
    "source": "iana",
    "extensions": ["spot"]
  },
  "text/vnd.iptc.newsml": {
    "source": "iana"
  },
  "text/vnd.iptc.nitf": {
    "source": "iana"
  },
  "text/vnd.latex-z": {
    "source": "iana"
  },
  "text/vnd.motorola.reflex": {
    "source": "iana"
  },
  "text/vnd.ms-mediapackage": {
    "source": "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    "source": "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    "source": "iana"
  },
  "text/vnd.senx.warpscript": {
    "source": "iana"
  },
  "text/vnd.si.uricatalogue": {
    "source": "iana"
  },
  "text/vnd.sosi": {
    "source": "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["jad"]
  },
  "text/vnd.trolltech.linguist": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.wap.si": {
    "source": "iana"
  },
  "text/vnd.wap.sl": {
    "source": "iana"
  },
  "text/vnd.wap.wml": {
    "source": "iana",
    "extensions": ["wml"]
  },
  "text/vnd.wap.wmlscript": {
    "source": "iana",
    "extensions": ["wmls"]
  },
  "text/vtt": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["vtt"]
  },
  "text/x-asm": {
    "source": "apache",
    "extensions": ["s","asm"]
  },
  "text/x-c": {
    "source": "apache",
    "extensions": ["c","cc","cxx","cpp","h","hh","dic"]
  },
  "text/x-component": {
    "source": "nginx",
    "extensions": ["htc"]
  },
  "text/x-fortran": {
    "source": "apache",
    "extensions": ["f","for","f77","f90"]
  },
  "text/x-gwt-rpc": {
    "compressible": true
  },
  "text/x-handlebars-template": {
    "extensions": ["hbs"]
  },
  "text/x-java-source": {
    "source": "apache",
    "extensions": ["java"]
  },
  "text/x-jquery-tmpl": {
    "compressible": true
  },
  "text/x-lua": {
    "extensions": ["lua"]
  },
  "text/x-markdown": {
    "compressible": true,
    "extensions": ["mkd"]
  },
  "text/x-nfo": {
    "source": "apache",
    "extensions": ["nfo"]
  },
  "text/x-opml": {
    "source": "apache",
    "extensions": ["opml"]
  },
  "text/x-org": {
    "compressible": true,
    "extensions": ["org"]
  },
  "text/x-pascal": {
    "source": "apache",
    "extensions": ["p","pas"]
  },
  "text/x-processing": {
    "compressible": true,
    "extensions": ["pde"]
  },
  "text/x-sass": {
    "extensions": ["sass"]
  },
  "text/x-scss": {
    "extensions": ["scss"]
  },
  "text/x-setext": {
    "source": "apache",
    "extensions": ["etx"]
  },
  "text/x-sfv": {
    "source": "apache",
    "extensions": ["sfv"]
  },
  "text/x-suse-ymp": {
    "compressible": true,
    "extensions": ["ymp"]
  },
  "text/x-uuencode": {
    "source": "apache",
    "extensions": ["uu"]
  },
  "text/x-vcalendar": {
    "source": "apache",
    "extensions": ["vcs"]
  },
  "text/x-vcard": {
    "source": "apache",
    "extensions": ["vcf"]
  },
  "text/xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xml"]
  },
  "text/xml-external-parsed-entity": {
    "source": "iana"
  },
  "text/yaml": {
    "compressible": true,
    "extensions": ["yaml","yml"]
  },
  "video/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "video/3gpp": {
    "source": "iana",
    "extensions": ["3gp","3gpp"]
  },
  "video/3gpp-tt": {
    "source": "iana"
  },
  "video/3gpp2": {
    "source": "iana",
    "extensions": ["3g2"]
  },
  "video/av1": {
    "source": "iana"
  },
  "video/bmpeg": {
    "source": "iana"
  },
  "video/bt656": {
    "source": "iana"
  },
  "video/celb": {
    "source": "iana"
  },
  "video/dv": {
    "source": "iana"
  },
  "video/encaprtp": {
    "source": "iana"
  },
  "video/ffv1": {
    "source": "iana"
  },
  "video/flexfec": {
    "source": "iana"
  },
  "video/h261": {
    "source": "iana",
    "extensions": ["h261"]
  },
  "video/h263": {
    "source": "iana",
    "extensions": ["h263"]
  },
  "video/h263-1998": {
    "source": "iana"
  },
  "video/h263-2000": {
    "source": "iana"
  },
  "video/h264": {
    "source": "iana",
    "extensions": ["h264"]
  },
  "video/h264-rcdo": {
    "source": "iana"
  },
  "video/h264-svc": {
    "source": "iana"
  },
  "video/h265": {
    "source": "iana"
  },
  "video/iso.segment": {
    "source": "iana",
    "extensions": ["m4s"]
  },
  "video/jpeg": {
    "source": "iana",
    "extensions": ["jpgv"]
  },
  "video/jpeg2000": {
    "source": "iana"
  },
  "video/jpm": {
    "source": "apache",
    "extensions": ["jpm","jpgm"]
  },
  "video/mj2": {
    "source": "iana",
    "extensions": ["mj2","mjp2"]
  },
  "video/mp1s": {
    "source": "iana"
  },
  "video/mp2p": {
    "source": "iana"
  },
  "video/mp2t": {
    "source": "iana",
    "extensions": ["ts"]
  },
  "video/mp4": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mp4","mp4v","mpg4"]
  },
  "video/mp4v-es": {
    "source": "iana"
  },
  "video/mpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mpeg","mpg","mpe","m1v","m2v"]
  },
  "video/mpeg4-generic": {
    "source": "iana"
  },
  "video/mpv": {
    "source": "iana"
  },
  "video/nv": {
    "source": "iana"
  },
  "video/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ogv"]
  },
  "video/parityfec": {
    "source": "iana"
  },
  "video/pointer": {
    "source": "iana"
  },
  "video/quicktime": {
    "source": "iana",
    "compressible": false,
    "extensions": ["qt","mov"]
  },
  "video/raptorfec": {
    "source": "iana"
  },
  "video/raw": {
    "source": "iana"
  },
  "video/rtp-enc-aescm128": {
    "source": "iana"
  },
  "video/rtploopback": {
    "source": "iana"
  },
  "video/rtx": {
    "source": "iana"
  },
  "video/scip": {
    "source": "iana"
  },
  "video/smpte291": {
    "source": "iana"
  },
  "video/smpte292m": {
    "source": "iana"
  },
  "video/ulpfec": {
    "source": "iana"
  },
  "video/vc1": {
    "source": "iana"
  },
  "video/vc2": {
    "source": "iana"
  },
  "video/vnd.cctv": {
    "source": "iana"
  },
  "video/vnd.dece.hd": {
    "source": "iana",
    "extensions": ["uvh","uvvh"]
  },
  "video/vnd.dece.mobile": {
    "source": "iana",
    "extensions": ["uvm","uvvm"]
  },
  "video/vnd.dece.mp4": {
    "source": "iana"
  },
  "video/vnd.dece.pd": {
    "source": "iana",
    "extensions": ["uvp","uvvp"]
  },
  "video/vnd.dece.sd": {
    "source": "iana",
    "extensions": ["uvs","uvvs"]
  },
  "video/vnd.dece.video": {
    "source": "iana",
    "extensions": ["uvv","uvvv"]
  },
  "video/vnd.directv.mpeg": {
    "source": "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    "source": "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    "source": "iana"
  },
  "video/vnd.dvb.file": {
    "source": "iana",
    "extensions": ["dvb"]
  },
  "video/vnd.fvt": {
    "source": "iana",
    "extensions": ["fvt"]
  },
  "video/vnd.hns.video": {
    "source": "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    "source": "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    "source": "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    "source": "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    "source": "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    "source": "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    "source": "iana"
  },
  "video/vnd.motorola.video": {
    "source": "iana"
  },
  "video/vnd.motorola.videop": {
    "source": "iana"
  },
  "video/vnd.mpegurl": {
    "source": "iana",
    "extensions": ["mxu","m4u"]
  },
  "video/vnd.ms-playready.media.pyv": {
    "source": "iana",
    "extensions": ["pyv"]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    "source": "iana"
  },
  "video/vnd.nokia.mp4vr": {
    "source": "iana"
  },
  "video/vnd.nokia.videovoip": {
    "source": "iana"
  },
  "video/vnd.objectvideo": {
    "source": "iana"
  },
  "video/vnd.radgamettools.bink": {
    "source": "iana"
  },
  "video/vnd.radgamettools.smacker": {
    "source": "iana"
  },
  "video/vnd.sealed.mpeg1": {
    "source": "iana"
  },
  "video/vnd.sealed.mpeg4": {
    "source": "iana"
  },
  "video/vnd.sealed.swf": {
    "source": "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    "source": "iana"
  },
  "video/vnd.uvvu.mp4": {
    "source": "iana",
    "extensions": ["uvu","uvvu"]
  },
  "video/vnd.vivo": {
    "source": "iana",
    "extensions": ["viv"]
  },
  "video/vnd.youtube.yt": {
    "source": "iana"
  },
  "video/vp8": {
    "source": "iana"
  },
  "video/vp9": {
    "source": "iana"
  },
  "video/webm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["webm"]
  },
  "video/x-f4v": {
    "source": "apache",
    "extensions": ["f4v"]
  },
  "video/x-fli": {
    "source": "apache",
    "extensions": ["fli"]
  },
  "video/x-flv": {
    "source": "apache",
    "compressible": false,
    "extensions": ["flv"]
  },
  "video/x-m4v": {
    "source": "apache",
    "extensions": ["m4v"]
  },
  "video/x-matroska": {
    "source": "apache",
    "compressible": false,
    "extensions": ["mkv","mk3d","mks"]
  },
  "video/x-mng": {
    "source": "apache",
    "extensions": ["mng"]
  },
  "video/x-ms-asf": {
    "source": "apache",
    "extensions": ["asf","asx"]
  },
  "video/x-ms-vob": {
    "source": "apache",
    "extensions": ["vob"]
  },
  "video/x-ms-wm": {
    "source": "apache",
    "extensions": ["wm"]
  },
  "video/x-ms-wmv": {
    "source": "apache",
    "compressible": false,
    "extensions": ["wmv"]
  },
  "video/x-ms-wmx": {
    "source": "apache",
    "extensions": ["wmx"]
  },
  "video/x-ms-wvx": {
    "source": "apache",
    "extensions": ["wvx"]
  },
  "video/x-msvideo": {
    "source": "apache",
    "extensions": ["avi"]
  },
  "video/x-sgi-movie": {
    "source": "apache",
    "extensions": ["movie"]
  },
  "video/x-smv": {
    "source": "apache",
    "extensions": ["smv"]
  },
  "x-conference/x-cooltalk": {
    "source": "apache",
    "extensions": ["ice"]
  },
  "x-shader/x-fragment": {
    "compressible": true
  },
  "x-shader/x-vertex": {
    "compressible": true
  }
}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBRUgsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQU9YLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFndVFiLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogUG9ydGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2h0dHAvbWltZS1kYiBhbmQgbGljZW5zZWQgYXM6XG4gKlxuICogKFRoZSBNSVQgTGljZW5zZSlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSm9uYXRoYW4gT25nIDxtZUBqb25nbGViZXJyeS5jb20+XG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgdGhlIERlbm8gYXV0aG9yc1xuICogQ29weXJpZ2h0IChjKSAyMDIwIHRoZSBvYWsgYXV0aG9yc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuICogYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4gKiAnU29mdHdhcmUnKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4gKiB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4gKiBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbiAqIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xuICogdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbiAqIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG4gKiBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGRiOiB7XG4gIFttZWRpYVR5cGU6IHN0cmluZ106IHtcbiAgICBzb3VyY2U/OiBzdHJpbmc7XG4gICAgY29tcHJlc3NpYmxlPzogYm9vbGVhbjtcbiAgICBjaGFyc2V0Pzogc3RyaW5nO1xuICAgIGV4dGVuc2lvbnM/OiBzdHJpbmdbXTtcbiAgfTtcbn0gPSBKU09OLnBhcnNlKGB7XG4gIFwiYXBwbGljYXRpb24vMWQtaW50ZXJsZWF2ZWQtcGFyaXR5ZmVjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uLzNncGRhc2gtcW9lLXJlcG9ydCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uLzNncHAtaW1zK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uLzNncHBoYWwranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uLzNncHBoYWxmb3Jtcytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYTJsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2FjdGl2ZW1lc3NhZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYWN0aXZpdHkranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2FsdG8tY29zdG1hcCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYWx0by1jb3N0bWFwZmlsdGVyK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hbHRvLWRpcmVjdG9yeStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYWx0by1lbmRwb2ludGNvc3QranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2FsdG8tZW5kcG9pbnRjb3N0cGFyYW1zK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hbHRvLWVuZHBvaW50cHJvcCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYWx0by1lbmRwb2ludHByb3BwYXJhbXMranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2FsdG8tZXJyb3IranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2FsdG8tbmV0d29ya21hcCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYWx0by1uZXR3b3JrbWFwZmlsdGVyK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hbHRvLXVwZGF0ZXN0cmVhbWNvbnRyb2wranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2FsdG8tdXBkYXRlc3RyZWFtcGFyYW1zK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hbWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYW5kcmV3LWluc2V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZXpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hcHBsZWZpbGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYXBwbGl4d2FyZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hdGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYXRmeFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hdG9tK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXRvbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2F0b21jYXQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhdG9tY2F0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYXRvbWRlbGV0ZWQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhdG9tZGVsZXRlZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2F0b21pY21haWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYXRvbXN2Yyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImF0b21zdmNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hdHNjLWR3ZCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImR3ZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2F0c2MtZHluYW1pYy1ldmVudC1tZXNzYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2F0c2MtaGVsZCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhlbGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9hdHNjLXJkdCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYXRzYy1yc2F0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicnNhdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2F0eG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2F1dGgtcG9saWN5K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2JhY25ldC14ZGQremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2JhdGNoLXNtdHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vYmRvY1wiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJkb2NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9iZWVwK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY2FsZW5kYXIranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NhbGVuZGFyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGNzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY2FsbC1jb21wbGV0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NhbHMtMTg0MFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jYXB0aXZlK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jYm9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Nib3Itc2VxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NjY2V4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NjbXAreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY2N4bWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjY3htbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NkZngreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjZGZ4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY2RtaS1jYXBhYmlsaXR5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2RtaWFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jZG1pLWNvbnRhaW5lclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNkbWljXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY2RtaS1kb21haW5cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjZG1pZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NkbWktb2JqZWN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2RtaW9cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jZG1pLXF1ZXVlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2RtaXFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jZG5pXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NlYVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jZWEtMjAxOCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jZWxsbWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY2Z3XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NsclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jbHVlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NsdWVfaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jbXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY25ycCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jb2FwLWdyb3VwK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jb2FwLXBheWxvYWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY29tbW9uZ3JvdW5kXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2NvbmZlcmVuY2UtaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jb3NlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Nvc2Uta2V5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Nvc2Uta2V5LXNldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jcGwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY3NyYXR0cnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY3N0YSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jc3RhZGF0YSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jc3ZtK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jdS1zZWVtZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY3VcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9jd3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vY3liZXJjYXNoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2RhcnRcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9kYXNoK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXBkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZGFzaGRlbHRhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Rhdm1vdW50K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZGF2bW91bnRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9kY2EtcmZ0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2RjZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9kZWMtZHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZGlhbG9nLWluZm8reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZGljb21cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZGljb20ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2RpY29tK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2RpaVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9kaXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZG5zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Rucytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZG5zLW1lc3NhZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZG9jYm9vayt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZGJrXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZG90cytjYm9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Rza3BwK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Rzc2MrZGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZHNzY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Rzc2MreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4ZHNzY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2R2Y3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZXNcIixcImVjbWFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lZGktY29uc2VudFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lZGkteDEyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VkaWZhY3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZWZpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VsbStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lbG0reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZW1lcmdlbmN5Y2FsbGRhdGEuY2FwK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZW1lcmdlbmN5Y2FsbGRhdGEuY29tbWVudCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lbWVyZ2VuY3ljYWxsZGF0YS5jb250cm9sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VtZXJnZW5jeWNhbGxkYXRhLmRldmljZWluZm8reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZW1lcmdlbmN5Y2FsbGRhdGEuZWNhbGwubXNkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VtZXJnZW5jeWNhbGxkYXRhLnByb3ZpZGVyaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lbWVyZ2VuY3ljYWxsZGF0YS5zZXJ2aWNlaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lbWVyZ2VuY3ljYWxsZGF0YS5zdWJzY3JpYmVyaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9lbWVyZ2VuY3ljYWxsZGF0YS52ZWRzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VtbWEreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJlbW1hXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZW1vdGlvbm1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZW1vdGlvbm1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZW5jYXBydHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZXBwK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VwdWIremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZXB1YlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2VzaG9wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2V4aVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImV4aVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2V4cGVjdC1jdC1yZXBvcnQranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Zhc3RpbmZvc2V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2Zhc3Rzb2FwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2ZkdCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZkdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2ZoaXIranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZmhpcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2ZpZG8udHJ1c3RlZC1hcHBzK2pzb25cIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9maXRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2ZsZXhmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZm9udC1zZm50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2ZvbnQtdGRwZnJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZnJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9mb250LXdvZmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZnJhbWV3b3JrLWF0dHJpYnV0ZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZ2VvK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdlb2pzb25cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9nZW8ranNvbi1zZXFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZ2VvcGFja2FnZStzcWxpdGUzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2dlb3hhY21sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2dsdGYtYnVmZmVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2dtbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdtbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2dweCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ3B4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vZ3hmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJneGZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9nemlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ3pcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9oMjI0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2hlbGQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaGpzb25cIjoge1xuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJoanNvblwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2h0dHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaHlwZXJzdHVkaW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGtcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9pYmUta2V5LXJlcXVlc3QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaWJlLXBrZy1yZXBseSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9pYmUtcHAtZGF0YVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9pZ2VzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2ltLWlzY29tcG9zaW5nK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaW5kZXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaW5kZXguY21kXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2luZGV4Lm9ialwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9pbmRleC5yZXNwb25zZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9pbmRleC52bmRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaW5rbWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpbmtcIixcImlua21sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaW90cFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9pcGZpeFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImlwZml4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaXBwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2lzdXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vaXRzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaXRzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vamF2YS1hcmNoaXZlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqYXJcIixcIndhclwiLFwiZWFyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vamF2YS1zZXJpYWxpemVkLW9iamVjdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2VyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vamF2YS12bVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2xhc3NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImpzXCIsXCJtanNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qZjJmZWVkK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qb3NlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL2pvc2UranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2pyZCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vanNjYWxlbmRhcitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vanNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqc29uXCIsXCJtYXBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qc29uLXNlcVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qc29uNVwiOiB7XG4gICAgXCJleHRlbnNpb25zXCI6IFtcImpzb241XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vanNvbm1sK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wianNvbm1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vandrK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qd2stc2V0K2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9qd3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24va3BtbC1yZXF1ZXN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2twbWwtcmVzcG9uc2UreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbGQranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wianNvbmxkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbGdyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibGdyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbGluay1mb3JtYXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbG9hZC1jb250cm9sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL2xvc3QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJsb3N0eG1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbG9zdHN5bmMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbHBmK3ppcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9seGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWFjLWJpbmhleDQwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaHF4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWFjLWNvbXBhY3Rwcm9cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNwdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21hY3dyaXRlaWlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWFkcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1hZHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tYW5pZmVzdCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndlYm1hbmlmZXN0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWFyY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1yY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21hcmN4bWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtcmN4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWF0aGVtYXRpY2FcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtYVwiLFwibmJcIixcIm1iXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWF0aG1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWF0aG1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWF0aG1sLWNvbnRlbnQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWF0aG1sLXByZXNlbnRhdGlvbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tYm1zLWFzc29jaWF0ZWQtcHJvY2VkdXJlLWRlc2NyaXB0aW9uK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ibXMtZGVyZWdpc3Rlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tYm1zLWVudmVsb3BlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ibXMtbXNrK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ibXMtbXNrLXJlc3BvbnNlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ibXMtcHJvdGVjdGlvbi1kZXNjcmlwdGlvbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tYm1zLXJlY2VwdGlvbi1yZXBvcnQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWJtcy1yZWdpc3Rlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tYm1zLXJlZ2lzdGVyLXJlc3BvbnNlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ibXMtc2NoZWR1bGUreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWJtcy11c2VyLXNlcnZpY2UtZGVzY3JpcHRpb24reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWJveFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1ib3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tZWRpYS1wb2xpY3ktZGF0YXNldCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tZWRpYV9jb250cm9sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21lZGlhc2VydmVyY29udHJvbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1zY21sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWVyZ2UtcGF0Y2granNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ldGFsaW5rK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtZXRhbGlua1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21ldGFsaW5rNCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1ldGE0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWV0cyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1ldHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tZjRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWlrZXlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbWlwY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9taXNzaW5nLWJsb2NrcytjYm9yLXNlcVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tbXQtYWVpK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWFlaVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21tdC11c2QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtdXNkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbW9kcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1vZHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tb3NzLWtleXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbW9zcy1zaWduYXR1cmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbW9zc2tleS1kYXRhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL21vc3NrZXktcmVxdWVzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tcDIxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibTIxXCIsXCJtcDIxXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbXA0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXA0c1wiLFwibTRwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbXBlZzQtZ2VuZXJpY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tcGVnNC1pb2RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbXBlZzQtaW9kLXhtdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tcmItY29uc3VtZXIreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbXJiLXB1Ymxpc2greG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbXNjLWl2cit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21zYy1taXhlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL21zd29yZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImRvY1wiLFwiZG90XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbXVkK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9tdWx0aXBhcnQtY29yZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9teGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJteGZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9uLXF1YWRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibnFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9uLXRyaXBsZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJudFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL25hc2RhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbmV3cy1jaGVja2dyb3Vwc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVMtQVNDSUlcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL25ld3MtZ3JvdXBpbmZvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVUy1BU0NJSVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbmV3cy10cmFuc21pc3Npb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbmxzbWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vbm9kZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNqc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL25zc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9vYXV0aC1hdXRoei1yZXErand0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL29jc3AtcmVxdWVzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9vY3NwLXJlc3BvbnNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJpblwiLFwiZG1zXCIsXCJscmZcIixcIm1hclwiLFwic29cIixcImRpc3RcIixcImRpc3R6XCIsXCJwa2dcIixcImJwa1wiLFwiZHVtcFwiLFwiZWxjXCIsXCJkZXBsb3lcIixcImV4ZVwiLFwiZGxsXCIsXCJkZWJcIixcImRtZ1wiLFwiaXNvXCIsXCJpbWdcIixcIm1zaVwiLFwibXNwXCIsXCJtc21cIixcImJ1ZmZlclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL29kYVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9kYVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL29kbSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9vZHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vb2VicHMtcGFja2FnZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9wZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL29nZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9neFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL29tZG9jK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvbWRvY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL29uZW5vdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9uZXRvY1wiLFwib25ldG9jMlwiLFwib25ldG1wXCIsXCJvbmVwa2dcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9vcGMtbm9kZXNldCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9vc2NvcmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vb3hwc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm94cHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wMjEremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3AycC1vdmVybGF5K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicmVsb1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3Bhcml0eWZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wYXNzcG9ydFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wYXRjaC1vcHMtZXJyb3IreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4ZXJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wZGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZGZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wZHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcGVtLWNlcnRpZmljYXRlLWNoYWluXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BncC1lbmNyeXB0ZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZ3BcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wZ3Ata2V5c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wZ3Atc2lnbmF0dXJlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXNjXCIsXCJzaWdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9waWNzLXJ1bGVzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwcmZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9waWRmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcGlkZi1kaWZmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcGtjczEwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicDEwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcGtjczEyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BrY3M3LW1pbWVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwN21cIixcInA3Y1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BrY3M3LXNpZ25hdHVyZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInA3c1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BrY3M4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicDhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wa2NzOC1lbmNyeXB0ZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcGtpeC1hdHRyLWNlcnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BraXgtY2VydFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNlclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BraXgtY3JsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY3JsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcGtpeC1wa2lwYXRoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGtpcGF0aFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3BraXhjbXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwa2lcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wbHMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwbHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wb2Mtc2V0dGluZ3MreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wb3N0c2NyaXB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhaVwiLFwiZXBzXCIsXCJwc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3Bwc3AtdHJhY2tlcitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcHJvYmxlbStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcHJvYmxlbSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wcm92ZW5hbmNlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHJvdnhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wcnMuYWx2ZXN0cmFuZC50aXRyYXgtc2hlZXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcHJzLmN3d1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImN3d1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3Bycy5jeW5cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIjctQklUXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wcnMuaHB1Yit6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcHJzLm5wcmVuZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wcnMucGx1Y2tlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wcnMucmRmLXhtbC1jcnlwdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9wcnMueHNmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3Bza2MreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwc2tjeG1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcHZkK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9xc2lnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JhbWwreWFtbFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicmFtbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JhcHRvcmZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yZGFwK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yZGYreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJyZGZcIixcIm93bFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JlZ2luZm8reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJyaWZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yZWxheC1uZy1jb21wYWN0LXN5bnRheFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJuY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JlbW90ZS1wcmludGluZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yZXB1dG9uK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMtZGlmZit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJsZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JmYyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yaXNjb3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcmxtaSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9ybHMtc2VydmljZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJyc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JvdXRlLWFwZCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJhcGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yb3V0ZS1zLXRzaWQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9yb3V0ZS11c2QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJydXNkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcnBraS1naG9zdGJ1c3RlcnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJnYnJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9ycGtpLW1hbmlmZXN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWZ0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcnBraS1wdWJsaWNhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9ycGtpLXJvYVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJvYVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3Jwa2ktdXBkb3duXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3JzZCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicnNkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vcnNzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJyc3NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9ydGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJ0ZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3J0cGxvb3BiYWNrXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3J0eFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zYW1sYXNzZXJ0aW9uK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NhbWxtZXRhZGF0YSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zYXJpZitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2FyaWYtZXh0ZXJuYWwtcHJvcGVydGllcytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2JlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NibWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzYm1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2NhaXAreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2NpbStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2N2cC1jdi1yZXF1ZXN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2NxXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2N2cC1jdi1yZXNwb25zZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNjc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NjdnAtdnAtcmVxdWVzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNwcVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NjdnAtdnAtcmVzcG9uc2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzcHBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zZHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzZHBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zZWNldmVudCtqd3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2VubWwrY2JvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zZW5tbCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2VubWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzZW5tbHhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zZW5tbC1ldGNoK2Nib3JcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2VubWwtZXRjaCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2VubWwtZXhpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NlbnNtbCtjYm9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NlbnNtbCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2Vuc21sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2Vuc21seFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NlbnNtbC1leGlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2VwK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NlcC1leGlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2Vzc2lvbi1pbmZvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NldC1wYXltZW50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NldC1wYXltZW50LWluaXRpYXRpb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzZXRwYXlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zZXQtcmVnaXN0cmF0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NldC1yZWdpc3RyYXRpb24taW5pdGlhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNldHJlZ1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NnbWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2dtbC1vcGVuLWNhdGFsb2dcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2hmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2hmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2lldmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzaXZcIixcInNpZXZlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc2ltcGxlLWZpbHRlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zaW1wbGUtbWVzc2FnZS1zdW1tYXJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NpbXBsZXN5bWJvbGNvbnRhaW5lclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zaXBjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NtaWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc21pbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNtaVwiLFwic21pbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NtcHRlMzM2bVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zb2FwK2Zhc3RpbmZvc2V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NvYXAreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3BhcnFsLXF1ZXJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicnFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi9zcGFycWwtcmVzdWx0cyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNyeFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NwaXJpdHMtZXZlbnQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3FsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NyZ3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJncmFtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3Jncyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdyeG1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3J1K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3J1XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3NkbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3NkbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3NzbWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzc21sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3RpeCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vc3dpZCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInN3aWR0YWdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90YW1wLWFwZXgtdXBkYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RhbXAtYXBleC11cGRhdGUtY29uZmlybVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90YW1wLWNvbW11bml0eS11cGRhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdGFtcC1jb21tdW5pdHktdXBkYXRlLWNvbmZpcm1cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdGFtcC1lcnJvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90YW1wLXNlcXVlbmNlLWFkanVzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90YW1wLXNlcXVlbmNlLWFkanVzdC1jb25maXJtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RhbXAtc3RhdHVzLXF1ZXJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RhbXAtc3RhdHVzLXJlc3BvbnNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RhbXAtdXBkYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RhbXAtdXBkYXRlLWNvbmZpcm1cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdGFyXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdGF4aWkranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RkK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90ZWkreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0ZWlcIixcInRlaWNvcnB1c1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RldHJhX2lzaVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90aHJhdWQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0ZmlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90aW1lc3RhbXAtcXVlcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdGltZXN0YW1wLXJlcGx5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RpbWVzdGFtcGVkLWRhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0c2RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90bHNycHQrZ3ppcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90bHNycHQranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RuYXV0aGxpc3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdG9tbFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widG9tbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3RyaWNrbGUtaWNlLXNkcGZyYWdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdHJpZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRyaWdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi90dG1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHRtbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3R2ZS10cmlnZ2VyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3R6aWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdHppZi1sZWFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3VianNvblwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInVialwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3VscGZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi91cmMtZ3Jwc2hlZXQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdXJjLXJlc3NoZWV0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicnNoZWV0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdXJjLXRhcmdldGRlc2MreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0ZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3VyYy11aXNvY2tldGRlc2MreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdmNhcmQranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZjYXJkK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZlbW1pXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZpdmlkZW5jZS5zY3JpcHRmaWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjEwMDBtaW5kcy5kZWNpc2lvbi1tb2RlbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIjFrbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLXByb3NlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLXByb3NlLXBjM2NoK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLXYyeC1sb2NhbC1zZXJ2aWNlLWluZm9ybWF0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLjVnbmFzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLmFjY2Vzcy10cmFuc2Zlci1ldmVudHMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAuYnNmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLmdtb3AreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAuZ3RwY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5pbnRlcndvcmtpbmctZGF0YVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5scHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWMtc2lnbmFsbGluZy1lYXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNkYXRhLWFmZmlsaWF0aW9uLWNvbW1hbmQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNkYXRhLWluZm8reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNkYXRhLXBheWxvYWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNkYXRhLXNlcnZpY2UtY29uZmlnK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jZGF0YS1zaWduYWxsaW5nXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jZGF0YS11ZS1jb25maWcreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNkYXRhLXVzZXItcHJvZmlsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3B0dC1hZmZpbGlhdGlvbi1jb21tYW5kK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jcHR0LWZsb29yLXJlcXVlc3QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNwdHQtaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3B0dC1sb2NhdGlvbi1pbmZvK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jcHR0LW1ibXMtdXNhZ2UtaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3B0dC1zZXJ2aWNlLWNvbmZpZyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3B0dC1zaWduZWQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWNwdHQtdWUtY29uZmlnK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jcHR0LXVlLWluaXQtY29uZmlnK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jcHR0LXVzZXItcHJvZmlsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3ZpZGVvLWFmZmlsaWF0aW9uLWNvbW1hbmQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWN2aWRlby1hZmZpbGlhdGlvbi1pbmZvK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jdmlkZW8taW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3ZpZGVvLWxvY2F0aW9uLWluZm8reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWN2aWRlby1tYm1zLXVzYWdlLWluZm8reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAubWN2aWRlby1zZXJ2aWNlLWNvbmZpZyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5tY3ZpZGVvLXRyYW5zbWlzc2lvbi1yZXF1ZXN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jdmlkZW8tdWUtY29uZmlnK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1jdmlkZW8tdXNlci1wcm9maWxlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm1pZC1jYWxsK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLm5nYXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAucGZjcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5waWMtYnctbGFyZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwbGJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5waWMtYnctc21hbGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwc2JcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5waWMtYnctdmFyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHZiXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAuczFhcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5zbXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAuc21zK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLnNydmNjLWV4dCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcC5zcnZjYy1pbmZvK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLnN0YXRlLWFuZC1ldmVudC1pbmZvK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwLnVzc2QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLjNncHAyLmJjbWNzaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuM2dwcDIuc21zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zZ3BwMi50Y2FwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widGNhcFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zbGlnaHRzc29mdHdhcmUuaW1hZ2VzY2FsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC4zbS5wb3N0LWl0LW5vdGVzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHduXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFjY3BhYy5zaW1wbHkuYXNvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXNvXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFjY3BhYy5zaW1wbHkuaW1wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaW1wXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFjdWNvYm9sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWN1XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFjdWNvcnBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhdGNcIixcImFjdXRjXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFkb2JlLmFpci1hcHBsaWNhdGlvbi1pbnN0YWxsZXItcGFja2FnZSt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFpclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5mbGFzaC5tb3ZpZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWRvYmUuZm9ybXNjZW50cmFsLmZjZHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJmY2R0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFkb2JlLmZ4cFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZ4cFwiLFwiZnhwbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5wYXJ0aWFsLXVwbG9hZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWRvYmUueGRwK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGRwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFkb2JlLnhmZGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4ZmRmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFldGhlci5pbXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFmcGMuYWZwbGluZWRhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFmcGMuYWZwbGluZWRhdGEtcGFnZWRlZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWZwYy5jbW9jYS1jbXJlc291cmNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hZnBjLmZvY2EtY2hhcnNldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWZwYy5mb2NhLWNvZGVkZm9udFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWZwYy5mb2NhLWNvZGVwYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hZnBjLm1vZGNhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hZnBjLm1vZGNhLWNtdGFibGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFmcGMubW9kY2EtZm9ybWRlZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWZwYy5tb2RjYS1tZWRpdW1tYXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFmcGMubW9kY2Etb2JqZWN0Y29udGFpbmVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hZnBjLm1vZGNhLW92ZXJsYXlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFmcGMubW9kY2EtcGFnZXNlZ21lbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFoLWJhcmNvZGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFoZWFkLnNwYWNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWhlYWRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYWlyemlwLmZpbGVzZWN1cmUuYXpmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXpmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFpcnppcC5maWxlc2VjdXJlLmF6c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImF6c1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hbWFkZXVzK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhendcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW1hem9uLm1vYmk4LWVib29rXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hbWVyaWNhbmR5bmFtaWNzLmFjY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFjY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hbWlnYS5hbWlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhbWlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW11bmRzZW4ubWF6ZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW5kcm9pZC5vdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFuZHJvaWQucGFja2FnZS1hcmNoaXZlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhcGtcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW5raVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW5zZXItd2ViLWNlcnRpZmljYXRlLWlzc3VlLWluaXRpYXRpb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjaWlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYW5zZXItd2ViLWZ1bmRzLXRyYW5zZmVyLWluaXRpYXRpb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZ0aVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hbnRpeC5nYW1lLWNvbXBvbmVudFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImF0eFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hcGFjaGUuYXJyb3cuZmlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXBhY2hlLmFycm93LnN0cmVhbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXBhY2hlLnRocmlmdC5iaW5hcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFwYWNoZS50aHJpZnQuY29tcGFjdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXBhY2hlLnRocmlmdC5qc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hcGkranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hcGxleHRvci53YXJycCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFwb3RoZWtlbmRlLnJlc2VydmF0aW9uK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXBrZ1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hcHBsZS5rZXlub3RlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia2V5XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtM3U4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLm51bWJlcnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJudW1iZXJzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLnBhZ2VzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGFnZXNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXBwbGUucGtwYXNzXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGtwYXNzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFyYXN0cmEuc3dpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hcmlzdGFuZXR3b3Jrcy5zd2lcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzd2lcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXJ0aXNhbitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmFydHNxdWFyZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYXN0cmFlYS1zb2Z0d2FyZS5pb3RhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaW90YVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hdWRpb2dyYXBoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWVwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmF1dG9wYWNrYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hdmFsb24ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5hdmlzdGFyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5iYWxzYW1pcS5ibW1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYm1tbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5iYWxzYW1pcS5ibXByXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5iYW5hbmEtYWNjb3VudGluZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYmJmLnVzcC5lcnJvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYmJmLnVzcC5tc2dcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmJiZi51c3AubXNnK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYmVraXR6dXItc3RlY2granNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5iaW50Lm1lZC1jb250ZW50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5iaW9wYXgucmRmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ibGluay1pZGItdmFsdWUtd3JhcHBlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYmx1ZWljZS5tdWx0aXBhc3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtcG1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYmx1ZXRvb3RoLmVwLm9vYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYmx1ZXRvb3RoLmxlLm9vYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYm1pXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYm1pXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmJwZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYnBmM1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuYnVzaW5lc3NvYmplY3RzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicmVwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmJ5dS51YXBpK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2FiLWpzY3JpcHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNhbm9uLWNwZGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNhbm9uLWxpcHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNhcGFzeXN0ZW1zLXBnK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2VuZGlvLnRoaW5saW5jLmNsaWVudGNvbmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNlbnR1cnktc3lzdGVtcy50Y3Bfc3RyZWFtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jaGVtZHJhdyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNkeG1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNoZXNzLXBnblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2hpcG51dHMua2FyYW9rZS1tbWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtbWRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2llZGlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNpbmRlcmVsbGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjZHlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2lycGFjay5pc2RuLWV4dFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2l0YXRpb25zdHlsZXMuc3R5bGUreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjc2xcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2xheW1vcmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjbGFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2xvYW50by5ycDlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJycDlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2xvbmsuYzRncm91cFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImM0Z1wiLFwiYzRkXCIsXCJjNGZcIixcImM0cFwiLFwiYzR1XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNsdWV0cnVzdC5jYXJ0b21vYmlsZS1jb25maWdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjMTFhbWNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY2x1ZXRydXN0LmNhcnRvbW9iaWxlLWNvbmZpZy1wa2dcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjMTFhbXpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY29mZmVlc2NyaXB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jb2xsYWJpby54b2RvY3VtZW50cy5kb2N1bWVudFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY29sbGFiaW8ueG9kb2N1bWVudHMuZG9jdW1lbnQtdGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvbGxhYmlvLnhvZG9jdW1lbnRzLnByZXNlbnRhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY29sbGFiaW8ueG9kb2N1bWVudHMucHJlc2VudGF0aW9uLXRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jb2xsYWJpby54b2RvY3VtZW50cy5zcHJlYWRzaGVldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY29sbGFiaW8ueG9kb2N1bWVudHMuc3ByZWFkc2hlZXQtdGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvbGxlY3Rpb24ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jb2xsZWN0aW9uLmRvYytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvbGxlY3Rpb24ubmV4dCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvbWljYm9vayt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvbWljYm9vay1yYXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvbW1lcmNlLWJhdHRlbGxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jb21tb25zcGFjZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNzcFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jb250YWN0LmNtc2dcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjZGJjbXNnXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvcmVvcy5pZ25pdGlvbitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNvc21vY2FsbGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY21jXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNyaWNrLmNsaWNrZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjbGt4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNyaWNrLmNsaWNrZXIua2V5Ym9hcmRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjbGtrXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNyaWNrLmNsaWNrZXIucGFsZXR0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNsa3BcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3JpY2suY2xpY2tlci50ZW1wbGF0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNsa3RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3JpY2suY2xpY2tlci53b3JkYmFua1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNsa3dcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3JpdGljYWx0b29scy53YnMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3YnNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3J5cHRpaS5waXBlK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3J5cHRvLXNoYWRlLWZpbGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmNyeXB0b21hdG9yLmVuY3J5cHRlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3J5cHRvbWF0b3IudmF1bHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmN0Yy1wb3NtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBtbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jdGN0LndzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jdXBzLXBkZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3Vwcy1wb3N0c2NyaXB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jdXBzLXBwZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBwZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5jdXBzLXJhc3RlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3Vwcy1yYXdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmN1cmxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmN1cmwuY2FyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjYXJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3VybC5wY3VybFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGN1cmxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3lhbi5kZWFuLnJvb3QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmN5YmFua1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3ljbG9uZWR4K2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuY3ljbG9uZWR4K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kMmwuY291cnNlcGFja2FnZTFwMCt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmQzbS1kYXRhc2V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kM20tcHJvYmxlbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZGFydFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZGFydFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kYXRhLXZpc2lvbi5yZHpcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJyZHpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZGF0YXBhY2thZ2UranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kYXRhcmVzb3VyY2UranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kYmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkYmZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZGViaWFuLmJpbmFyeS1wYWNrYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kZWNlLmRhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1dmZcIixcInV2dmZcIixcInV2ZFwiLFwidXZ2ZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kZWNlLnR0bWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1dnRcIixcInV2dnRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZGVjZS51bnNwZWNpZmllZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInV2eFwiLFwidXZ2eFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kZWNlLnppcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInV2elwiLFwidXZ2elwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kZW5vdm8uZmNzZWxheW91dC1saW5rXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmVfbGF1bmNoXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmRlc211bWUubW92aWVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmRpci1iaS5wbGF0ZS1kbC1ub3N1ZmZpeFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZG0uZGVsZWdhdGlvbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZG5hXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZG5hXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmRvY3VtZW50K2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZG9sYnkubWxwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtbHBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZG9sYnkubW9iaWxlLjFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmRvbGJ5Lm1vYmlsZS4yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kb3JlbWlyLnNjb3JlY2xvdWQtYmluYXJ5LWRvY3VtZW50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kcGdyYXBoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZHBnXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmRyZWFtZmFjdG9yeVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImRmYWNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHJpdmUranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kcy1rZXlwb2ludFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia3B4eFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdGcubG9jYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR0Zy5sb2NhbC5mbGFzaFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHRnLmxvY2FsLmh0bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5haXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhaXRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHZiLmR2YmlzbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHZiLmR2YmpcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5lc2djb250YWluZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5pcGRjZGZ0bm90aWZhY2Nlc3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5pcGRjZXNnYWNjZXNzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdmIuaXBkY2VzZ2FjY2VzczJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5pcGRjZXNncGRkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdmIuaXBkY3JvYW1pbmdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5pcHR2LmFsZmVjLWJhc2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5pcHR2LmFsZmVjLWVuaGFuY2VtZW50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdmIubm90aWYtYWdncmVnYXRlLXJvb3QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5ub3RpZi1jb250YWluZXIreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR2Yi5ub3RpZi1nZW5lcmljK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdmIubm90aWYtaWEtbXNnbGlzdCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHZiLm5vdGlmLWlhLXJlZ2lzdHJhdGlvbi1yZXF1ZXN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdmIubm90aWYtaWEtcmVnaXN0cmF0aW9uLXJlc3BvbnNlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5kdmIubm90aWYtaW5pdCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHZiLnBmclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHZiLnNlcnZpY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdmNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZHhyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5keW5hZ2VvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2VvXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmR6clwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZWFzeWthcmFva2UuY2RnZG93bmxvYWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmVjZGlzLXVwZGF0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZWNpcC5ybHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmVjb3dpbi5jaGFydFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1hZ1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lY293aW4uZmlsZXJlcXVlc3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmVjb3dpbi5maWxldXBkYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lY293aW4uc2VyaWVzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lY293aW4uc2VyaWVzcmVxdWVzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZWNvd2luLnNlcmllc3VwZGF0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZWZpLmltZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZWZpLmlzb1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZW1jbGllbnQuYWNjZXNzcmVxdWVzdCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZW5saXZlblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm5tbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lbnBoYXNlLmVudm95XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lcHJpbnRzLmRhdGEreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmVwc29uLmVzZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVzZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lcHNvbi5tc2ZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtc2ZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXBzb24ucXVpY2thbmltZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInFhbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lcHNvbi5zYWx0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2x0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmVwc29uLnNzZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNzZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lcmljc3Nvbi5xdWlja2NhbGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmVzcGFzcy1lc3Bhc3MremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lc3ppZ25vMyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVzM1wiLFwiZXQzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kuYW9jK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldHNpLmFzaWMtZSt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kuYXNpYy1zK3ppcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5jdWcreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kuaXB0dmNvbW1hbmQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kuaXB0dmRpc2NvdmVyeSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5pcHR2cHJvZmlsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5pcHR2c2FkLWJjK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldHNpLmlwdHZzYWQtY29kK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldHNpLmlwdHZzYWQtbnB2cit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5pcHR2c2VydmljZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5pcHR2c3luYyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5pcHR2dWVwcm9maWxlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldHNpLm1jaWQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kubWhlZzVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kub3ZlcmxvYWQtY29udHJvbC1wb2xpY3ktZGF0YXNldCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5wc3RuK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldHNpLnNjaSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS5zaW1zZXJ2cyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZXRzaS50aW1lc3RhbXAtdG9rZW5cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV0c2kudHNsK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldHNpLnRzbC5kZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV1ZG9yYS5kYXRhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ldm9sdi5lY2lnLnByb2ZpbGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV2b2x2LmVjaWcuc2V0dGluZ3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV2b2x2LmVjaWcudGhlbWVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmV4c3RyZWFtLWVtcG93ZXIremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5leHN0cmVhbS1wYWNrYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lenBpeC1hbGJ1bVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImV6MlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5lenBpeC1wYWNrYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZXozXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmYtc2VjdXJlLm1vYmlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZmFzdGNvcHktZGlzay1pbWFnZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZmRmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmRmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZkc24ubXNlZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtc2VlZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mZHNuLnNlZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzZWVkXCIsXCJkYXRhbGVzc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mZnNuc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZmljbGFiLmZsYit6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZpbG1pdC56ZmNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZpbnRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5maXJlbW9ua2V5cy5jbG91ZGNlbGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZsb2dyYXBoaXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJncGhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZmx1eHRpbWUuY2xpcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZ0Y1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mb250LWZvbnRmb3JnZS1zZmRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZyYW1lbWFrZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJmbVwiLFwiZnJhbWVcIixcIm1ha2VyXCIsXCJib29rXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZyb2dhbnMuZm5jXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZm5jXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZyb2dhbnMubHRmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibHRmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZzYy53ZWJsYXVuY2hcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJmc2NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaWZpbG0uZmIuZG9jdXdvcmtzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdWppZmlsbS5mYi5kb2N1d29ya3MuYmluZGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdWppZmlsbS5mYi5kb2N1d29ya3MuY29udGFpbmVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdWppZmlsbS5mYi5qZmkreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZ1aml0c3Uub2FzeXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvYXNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5czJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvYTJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5czNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvYTNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5c2dwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmc1XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZ1aml0c3Uub2FzeXNwcnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJiaDJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmFydC1leFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmFydDRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZ1aml4ZXJveC5kZGRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkZGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmRvY3V3b3Jrc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhkd1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdWppeGVyb3guZG9jdXdvcmtzLmJpbmRlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhiZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdWppeGVyb3guZG9jdXdvcmtzLmNvbnRhaW5lclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmhicGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZ1dC1taXNuZXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmZ1dG9pbitjYm9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdXRvaW4ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5mdXp6eXNoZWV0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZnpzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdlbm9tYXRpeC50dXhlZG9cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0eGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZ2VudGljcy5ncmQranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nZW8ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nZW9jdWJlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nZW9nZWJyYS5maWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2diXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdlb2dlYnJhLnNsaWRlc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZ2VvZ2VicmEudG9vbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdndFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nZW9tZXRyeS1leHBsb3JlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdleFwiLFwiZ3JlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdlb25leHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJneHRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZ2VvcGxhblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImcyd1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nZW9zcGFjZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImczd1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nZXJiZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdsb2JhbHBsYXRmb3JtLmNhcmQtY29udGVudC1tZ3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdsb2JhbHBsYXRmb3JtLmNhcmQtY29udGVudC1tZ3QtcmVzcG9uc2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdteFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdteFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5kb2N1bWVudFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdkb2NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMucHJlc2VudGF0aW9uXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ3NsaWRlc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5zcHJlYWRzaGVldFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdzaGVldFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5nb29nbGUtZWFydGgua21sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia21sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdvb2dsZS1lYXJ0aC5rbXpcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJrbXpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZ292LnNrLmUtZm9ybSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuZ292LnNrLmUtZm9ybSt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdvdi5zay54bWxkYXRhY29udGFpbmVyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ncmFmZXFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJncWZcIixcImdxc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ncmlkbXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdyb292ZS1hY2NvdW50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2FjXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdyb292ZS1oZWxwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2hmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdyb292ZS1pZGVudGl0eS1tZXNzYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2ltXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdyb292ZS1pbmplY3RvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdydlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ncm9vdmUtdG9vbC1tZXNzYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ3RtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdyb292ZS10b29sLXRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHBsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmdyb292ZS12Y2FyZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZjZ1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5oYWwranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5oYWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJoYWxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaGFuZGhlbGQtZW50ZXJ0YWlubWVudCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInptbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5oYmNpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaGJjaVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5oYytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmhjbC1iaXJlcG9ydHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmhkdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaGVyb2t1K2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaGhlLmxlc3Nvbi1wbGF5ZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJsZXNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaHAtaHBnbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhwZ2xcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaHAtaHBpZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhwaWRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaHAtaHBzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaHBzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmhwLWpseXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqbHRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaHAtcGNsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGNsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmhwLXBjbHhsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGNseGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaHR0cGhvbmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmh5ZHJvc3RhdGl4LnNvZi1kYXRhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2ZkLWhkc3R4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmh5cGVyK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaHlwZXItaXRlbStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmh5cGVyZHJpdmUranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5oem4tM2QtY3Jvc3N3b3JkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pYm0uYWZwbGluZWRhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmlibS5lbGVjdHJvbmljLW1lZGlhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pYm0ubWluaXBheVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1weVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pYm0ubW9kY2FwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWZwXCIsXCJsaXN0YWZwXCIsXCJsaXN0MzgyMFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pYm0ucmlnaHRzLW1hbmFnZW1lbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpcm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaWJtLnNlY3VyZS1jb250YWluZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pY2Nwcm9maWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaWNjXCIsXCJpY21cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaWVlZS4xOTA1XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pZ2xvYWRlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImlnbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbWFnZW1ldGVyLmZvbGRlcit6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmltYWdlbWV0ZXIuaW1hZ2UremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbW1lcnZpc2lvbi1pdnBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpdnBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW1tZXJ2aXNpb24taXZ1XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaXZ1XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmltcy5pbXNjY3YxcDFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmltcy5pbXNjY3YxcDJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmltcy5pbXNjY3YxcDNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmltcy5saXMudjIucmVzdWx0K2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW1zLmx0aS52Mi50b29sY29uc3VtZXJwcm9maWxlK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW1zLmx0aS52Mi50b29scHJveHkranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbXMubHRpLnYyLnRvb2xwcm94eS5pZCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmltcy5sdGkudjIudG9vbHNldHRpbmdzK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW1zLmx0aS52Mi50b29sc2V0dGluZ3Muc2ltcGxlK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW5mb3JtZWRjb250cm9sLnJtcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW5mb3JtaXgtdmlzaW9uYXJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbmZvdGVjaC5wcm9qZWN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbmZvdGVjaC5wcm9qZWN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbm5vcGF0aC53YW1wLm5vdGlmaWNhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW5zb3JzLmlnbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImlnbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbnRlcmNvbi5mb3JtbmV0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieHB3XCIsXCJ4cHhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW50ZXJnZW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpMmdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaW50ZXJ0cnVzdC5kaWdpYm94XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pbnRlcnRydXN0Lm5uY3BcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmludHUucWJvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicWJvXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmludHUucWZ4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicWZ4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmlwdGMuZzIuY2F0YWxvZ2l0ZW0reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmlwdGMuZzIuY29uY2VwdGl0ZW0reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmlwdGMuZzIua25vd2xlZGdlaXRlbSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaXB0Yy5nMi5uZXdzaXRlbSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaXB0Yy5nMi5uZXdzbWVzc2FnZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaXB0Yy5nMi5wYWNrYWdlaXRlbSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuaXB0Yy5nMi5wbGFubmluZ2l0ZW0reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmlwdW5wbHVnZ2VkLnJjcHJvZmlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJjcHJvZmlsZVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pcmVwb3NpdG9yeS5wYWNrYWdlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaXJwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmlzLXhwclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhwclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pc2FjLmZjc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZjc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5pc28xMTc4My0xMCt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmphbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImphbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5qYXBhbm5ldC1kaXJlY3Rvcnktc2VydmljZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuamFwYW5uZXQtanBuc3RvcmUtd2FrZXVwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5qYXBhbm5ldC1wYXltZW50LXdha2V1cFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuamFwYW5uZXQtcmVnaXN0cmF0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5qYXBhbm5ldC1yZWdpc3RyYXRpb24td2FrZXVwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5qYXBhbm5ldC1zZXRzdG9yZS13YWtldXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmphcGFubmV0LXZlcmlmaWNhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuamFwYW5uZXQtdmVyaWZpY2F0aW9uLXdha2V1cFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuamNwLmphdmFtZS5taWRsZXQtcm1zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicm1zXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmppc3BcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqaXNwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmpvb3N0LmpvZGEtYXJjaGl2ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImpvZGFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuanNrLmlzZG4tbmduXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5rYWhvb3R6XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia3R6XCIsXCJrdHJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua2RlLmthcmJvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImthcmJvblwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5rZGUua2NoYXJ0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2hydFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5rZGUua2Zvcm11bGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJrZm9cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua2RlLmtpdmlvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmx3XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmtkZS5rb250b3VyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia29uXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmtkZS5rcHJlc2VudGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia3ByXCIsXCJrcHRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua2RlLmtzcHJlYWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJrc3BcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua2RlLmt3b3JkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia3dkXCIsXCJrd3RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua2VuYW1lYWFwcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImh0a2VcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua2lkc3BpcmF0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia2lhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmtpbmFyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia25lXCIsXCJrbnBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQua29hblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNrcFwiLFwic2tkXCIsXCJza3RcIixcInNrbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5rb2Rhay1kZXNjcmlwdG9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3NlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmxhc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubGFzLmxhcytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmxhcy5sYXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJsYXN4bWxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubGFzemlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sZWFwK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubGliZXJ0eS1yZXF1ZXN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sbGFtYWdyYXBoaWNzLmxpZmUtYmFsYW5jZS5kZXNrdG9wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibGJkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmxsYW1hZ3JhcGhpY3MubGlmZS1iYWxhbmNlLmV4Y2hhbmdlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibGJlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmxvZ2lwaXBlLmNpcmN1aXQremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sb29tXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sb3R1cy0xLTItM1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIjEyM1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sb3R1cy1hcHByb2FjaFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFwclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sb3R1cy1mcmVlbGFuY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwcmVcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubG90dXMtbm90ZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJuc2ZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubG90dXMtb3JnYW5pemVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3JnXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLmxvdHVzLXNjcmVlbmNhbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNjbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5sb3R1cy13b3JkcHJvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibHdwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1hY3BvcnRzLnBvcnRwa2dcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwb3J0cGtnXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1hcGJveC12ZWN0b3ItdGlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm12dFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tYXJsaW4uZHJtLmFjdGlvbnRva2VuK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tYXJsaW4uZHJtLmNvbmZ0b2tlbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWFybGluLmRybS5saWNlbnNlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tYXJsaW4uZHJtLm1kY2ZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1hc29uK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWF4bWluZC5tYXhtaW5kLWRiXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tY2RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtY2RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWVkY2FsY2RhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtYzFcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWVkaWFzdGF0aW9uLmNka2V5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2RrZXlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWVyaWRpYW4tc2xpbmdzaG90XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tZmVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXdmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1mbXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtZm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWljcm8ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb2dyYWZ4LmZsb1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZsb1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb2dyYWZ4LmlneFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImlneFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQucG9ydGFibGUtZXhlY3V0YWJsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LndpbmRvd3MudGh1bWJuYWlsLWNhY2hlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5taWVsZStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1pZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1pZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5taW5pc29mdC1ocDMwMDAtc2F2ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubWl0c3ViaXNoaS5taXN0eS1ndWFyZC50cnVzdHdlYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW9iaXVzLmRhZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImRhZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tb2JpdXMuZGlzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZGlzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1vYml1cy5tYmtcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtYmtcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW9iaXVzLm1xeVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1xeVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tb2JpdXMubXNsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXNsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1vYml1cy5wbGNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwbGNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW9iaXVzLnR4ZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInR4ZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tb3BodW4uYXBwbGljYXRpb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtcG5cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW9waHVuLmNlcnRpZmljYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXBjXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1vdG9yb2xhLmZsZXhzdWl0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW90b3JvbGEuZmxleHN1aXRlLmFkc2lcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1vdG9yb2xhLmZsZXhzdWl0ZS5maXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1vdG9yb2xhLmZsZXhzdWl0ZS5nb3RhcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW90b3JvbGEuZmxleHN1aXRlLmttclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW90b3JvbGEuZmxleHN1aXRlLnR0Y1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW90b3JvbGEuZmxleHN1aXRlLndlbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW90b3JvbGEuaXBybVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4dWxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtM21mZG9jdW1lbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLWFydGdhbHJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2lsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLWFzZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtY2FiLWNvbXByZXNzZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjYWJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtY29sb3IuaWNjcHJvZmlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhsc1wiLFwieGxtXCIsXCJ4bGFcIixcInhsY1wiLFwieGx0XCIsXCJ4bHdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuYWRkaW4ubWFjcm9lbmFibGVkLjEyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGxhbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5zaGVldC5iaW5hcnkubWFjcm9lbmFibGVkLjEyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGxzYlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5zaGVldC5tYWNyb2VuYWJsZWQuMTJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4bHNtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnRlbXBsYXRlLm1hY3JvZW5hYmxlZC4xMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhsdG1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZW90XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLWh0bWxoZWxwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2htXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLWltc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImltc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1scm1cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJscm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtb2ZmaWNlLmFjdGl2ZXgreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLW9mZmljZXRoZW1lXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widGhteFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1vcGVudHlwZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLW91dGxvb2tcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtc2dcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcGFja2FnZS5vYmZ1c2NhdGVkLW9wZW50eXBlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXBraS5zZWNjYXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNhdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1wa2kuc3RsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcGxheXJlYWR5LmluaXRpYXRvcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBwdFwiLFwicHBzXCIsXCJwb3RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5hZGRpbi5tYWNyb2VuYWJsZWQuMTJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwcGFtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQucHJlc2VudGF0aW9uLm1hY3JvZW5hYmxlZC4xMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBwdG1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5zbGlkZS5tYWNyb2VuYWJsZWQuMTJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbGRtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQuc2xpZGVzaG93Lm1hY3JvZW5hYmxlZC4xMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBwc21cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC50ZW1wbGF0ZS5tYWNyb2VuYWJsZWQuMTJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwb3RtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXByaW50ZGV2aWNlY2FwYWJpbGl0aWVzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1wcmludGluZy5wcmludHRpY2tldCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1wcmludHNjaGVtYXRpY2tldCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtcHJvamVjdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1wcFwiLFwibXB0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXRuZWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXdpbmRvd3MuZGV2aWNlcGFpcmluZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtd2luZG93cy5ud3ByaW50aW5nLm9vYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtd2luZG93cy5wcmludGVycGFpcmluZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtd2luZG93cy53c2Qub29iXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy13bWRybS5saWMtY2hsZy1yZXFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXdtZHJtLmxpYy1yZXNwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy13bWRybS5tZXRlci1jaGxnLXJlcVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtd21kcm0ubWV0ZXItcmVzcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMtd29yZC5kb2N1bWVudC5tYWNyb2VuYWJsZWQuMTJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkb2NtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zLXdvcmQudGVtcGxhdGUubWFjcm9lbmFibGVkLjEyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZG90bVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy13b3Jrc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndwc1wiLFwid2tzXCIsXCJ3Y21cIixcIndkYlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tcy13cGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3cGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXMteHBzZG9jdW1lbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4cHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubXNhLWRpc2staW1hZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zZXFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtc2VxXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm1zaWduXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5tdWx0aWFkLmNyZWF0b3JcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm11bHRpYWQuY3JlYXRvci5jaWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm11c2ljLW5pZmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm11c2ljaWFuXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXVzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm11dmVlLnN0eWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXN0eVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5teW5mY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRhZ2xldFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5uY2QuY29udHJvbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubmNkLnJlZmVyZW5jZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubmVhcnN0Lmluditqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5lYnVtaW5kLmxpbmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5lcnZhbmFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5ldGZweFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubmV1cm9sYW5ndWFnZS5ubHVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJubHVcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubmltblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubmludGVuZG8ubml0cm8ucm9tXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5uaW50ZW5kby5zbmVzLnJvbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubml0ZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm50ZlwiLFwibml0ZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub2JsZW5ldC1kaXJlY3RvcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJubmRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9ibGVuZXQtc2VhbGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibm5zXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5vYmxlbmV0LXdlYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm5ud1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub2tpYS5jYXRhbG9nc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEuY29ubWwrd2J4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5va2lhLmNvbm1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub2tpYS5pcHR2LmNvbmZpZyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEuaXNkcy1yYWRpby1wcmVzZXRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub2tpYS5sYW5kbWFyayt3YnhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEubGFuZG1hcmsreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5va2lhLmxhbmRtYXJrY29sbGVjdGlvbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEubi1nYWdlLmFjK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEubi1nYWdlLmRhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJuZ2RhdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub2tpYS5uLWdhZ2Uuc3ltYmlhbi5pbnN0YWxsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibi1nYWdlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5va2lhLm5jZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEucGNkK3dieG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub2tpYS5wY2QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5va2lhLnJhZGlvLXByZXNldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJwc3RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm9raWEucmFkaW8tcHJlc2V0c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJwc3NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubm92YWRpZ20uZWRtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZWRtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm5vdmFkaWdtLmVkeFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVkeFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ub3ZhZGlnbS5leHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJleHRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQubnR0LWxvY2FsLmNvbnRlbnQtc2hhcmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm50dC1sb2NhbC5maWxlLXRyYW5zZmVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5udHQtbG9jYWwub2d3X3JlbW90ZS1hY2Nlc3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm50dC1sb2NhbC5zaXAtdGFfcmVtb3RlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5udHQtbG9jYWwuc2lwLXRhX3RjcF9zdHJlYW1cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5jaGFydFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9kY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuY2hhcnQtdGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvdGNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmRhdGFiYXNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib2RiXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5mb3JtdWxhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib2RmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5mb3JtdWxhLXRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib2RmdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZ3JhcGhpY3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvZGdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmdyYXBoaWNzLXRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3RnXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5pbWFnZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9kaVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuaW1hZ2UtdGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvdGlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9kcFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uLXRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3RwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9kc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQtdGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvdHNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvZHRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQtbWFzdGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib2RtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0LXRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3R0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0LXdlYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm90aFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vYm5cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9jZitjYm9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vY2kuaW1hZ2UubWFuaWZlc3QudjEranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vZnRuLmwxMG4ranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vaXBmLmNvbnRlbnRhY2Nlc3Nkb3dubG9hZCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2lwZi5jb250ZW50YWNjZXNzc3RyZWFtaW5nK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vaXBmLmNzcGctaGV4YmluYXJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vaXBmLmRhZS5zdmcreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9pcGYuZGFlLnhodG1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vaXBmLm1pcHB2Y29udHJvbG1lc3NhZ2UreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9pcGYucGFlLmdlbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2lwZi5zcGRpc2NvdmVyeSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2lwZi5zcGRsaXN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vaXBmLnVlcHJvZmlsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2lwZi51c2VycHJvZmlsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub2xwYy1zdWdhclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhvXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS1zY3dzLWNvbmZpZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLXNjd3MtaHR0cC1yZXF1ZXN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEtc2N3cy1odHRwLXJlc3BvbnNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuYmNhc3QuYXNzb2NpYXRlZC1wcm9jZWR1cmUtcGFyYW1ldGVyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuYmNhc3QuZHJtLXRyaWdnZXIreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5iY2FzdC5pbWQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5iY2FzdC5sdGttXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuYmNhc3Qubm90aWZpY2F0aW9uK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuYmNhc3QucHJvdmlzaW9uaW5ndHJpZ2dlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmJjYXN0LnNnYm9vdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmJjYXN0LnNnZGQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5iY2FzdC5zZ2R1XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuYmNhc3Quc2ltcGxlLXN5bWJvbC1jb250YWluZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5iY2FzdC5zbWFydGNhcmQtdHJpZ2dlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmJjYXN0LnNwcm92K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuYmNhc3Quc3RrbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmNhYi1hZGRyZXNzLWJvb2sreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5jYWItZmVhdHVyZS1oYW5kbGVyK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuY2FiLXBjYyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmNhYi1zdWJzLWludml0ZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmNhYi11c2VyLXByZWZzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuZGNkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuZGNkY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmRkMit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImRkMlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEuZHJtLnJpc2QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5ncm91cC11c2FnZS1saXN0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEubHdtMm0rY2JvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmx3bTJtK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLmx3bTJtK3RsdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLnBhbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLnBvYy5kZXRhaWxlZC1wcm9ncmVzcy1yZXBvcnQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5wb2MuZmluYWwtcmVwb3J0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWEucG9jLmdyb3Vwcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLnBvYy5pbnZvY2F0aW9uLWRlc2NyaXB0b3IreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5wb2Mub3B0aW1pemVkLXByb2dyZXNzLXJlcG9ydCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLnB1c2hcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYS5zY2lkbS5tZXNzYWdlcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub21hLnhjYXAtZGlyZWN0b3J5K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWFkcy1lbWFpbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWFkcy1maWxlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9tYWRzLWZvbGRlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbWFsb2Mtc3VwbC1pbml0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbmVwYWdlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub25lcGFnZXJ0YW1wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbmVwYWdlcnRhbXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9uZXBhZ2VydGF0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vbmVwYWdlcnRhdHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9uZXBhZ2VydGF0eFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbmJsb3guZ2FtZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9iZ3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbmJsb3guZ2FtZS1iaW5hcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW5leWUub2ViXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVub2ZmaWNlb3JnLmV4dGVuc2lvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3h0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW5zdHJlZXRtYXAuZGF0YSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9zbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVudGltZXN0YW1wcy5vdHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LmN1c3RvbS1wcm9wZXJ0aWVzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5jdXN0b214bWxwcm9wZXJ0aWVzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5kcmF3aW5nK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5kcmF3aW5nbWwuY2hhcnQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LmRyYXdpbmdtbC5jaGFydHNoYXBlcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuZHJhd2luZ21sLmRpYWdyYW1jb2xvcnMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LmRyYXdpbmdtbC5kaWFncmFtZGF0YSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuZHJhd2luZ21sLmRpYWdyYW1sYXlvdXQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LmRyYXdpbmdtbC5kaWFncmFtc3R5bGUreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LmV4dGVuZGVkLXByb3BlcnRpZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLmNvbW1lbnRhdXRob3JzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5jb21tZW50cyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwuaGFuZG91dG1hc3Rlcit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwubm90ZXNtYXN0ZXIreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLm5vdGVzc2xpZGUreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBwdHhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uLm1haW4reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNwcm9wcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwuc2xpZGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbGR4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnNsaWRlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5zbGlkZWxheW91dCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwuc2xpZGVtYXN0ZXIreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnNsaWRlc2hvd1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBwc3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwuc2xpZGVzaG93Lm1haW4reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnNsaWRldXBkYXRlaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwudGFibGVzdHlsZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnRhZ3MreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicG90eFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC50ZW1wbGF0ZS5tYWluK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC52aWV3cHJvcHMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuY2FsY2NoYWluK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLmNoYXJ0c2hlZXQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuY29tbWVudHMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuY29ubmVjdGlvbnMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuZGlhbG9nc2hlZXQreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuZXh0ZXJuYWxsaW5rK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnBpdm90Y2FjaGVkZWZpbml0aW9uK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnBpdm90Y2FjaGVyZWNvcmRzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnBpdm90dGFibGUreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwucXVlcnl0YWJsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5yZXZpc2lvbmhlYWRlcnMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwucmV2aXNpb25sb2creG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hhcmVkc3RyaW5ncyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhsc3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldC5tYWluK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0bWV0YWRhdGEreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc3R5bGVzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnRhYmxlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnRhYmxlc2luZ2xlY2VsbHMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwudGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4bHR4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwudGVtcGxhdGUubWFpbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC51c2VybmFtZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwudm9sYXRpbGVkZXBlbmRlbmNpZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwud29ya3NoZWV0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC50aGVtZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQudGhlbWVvdmVycmlkZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQudm1sZHJhd2luZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5jb21tZW50cyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImRvY3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudC5nbG9zc2FyeSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudC5tYWluK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmVuZG5vdGVzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmZvbnR0YWJsZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5mb290ZXIreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZm9vdG5vdGVzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLm51bWJlcmluZyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5zZXR0aW5ncyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5zdHlsZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkb3R4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGUubWFpbit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC53ZWJzZXR0aW5ncyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5jb3JlLXByb3BlcnRpZXMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLXBhY2thZ2UuZGlnaXRhbC1zaWduYXR1cmUteG1sc2lnbmF0dXJlK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1wYWNrYWdlLnJlbGF0aW9uc2hpcHMreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9yYWNsZS5yZXNvdXJjZStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9yYW5nZS5pbmRhdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9zYS5uZXRkZXBsb3lcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9zZ2VvLm1hcGd1aWRlLnBhY2thZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtZ3BcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3NnaS5idW5kbGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLm9zZ2kuZHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkcFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vc2dpLnN1YnN5c3RlbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVzYVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5vdHBzLmN0LWtpcCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQub3hsaS5jb3VudGdyYXBoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wYWdlcmR1dHkranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wYWxtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGRiXCIsXCJwcWFcIixcIm9wcmNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucGFub3BseVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucGFvcy54bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBhdGVudGRpdmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBhdGllbnRlY29tbXNkb2NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBhd2FhZmlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBhd1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wY29zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wZy5mb3JtYXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdHJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucGcub3Nhc2xpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZWk2XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBpYWNjZXNzLmFwcGxpY2F0aW9uLWxpY2VuY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBpY3NlbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVmaWZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucG1pLndpZGdldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndnXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBvYy5ncm91cC1hZHZlcnRpc2VtZW50K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wb2NrZXRsZWFyblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBsZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wb3dlcmJ1aWxkZXI2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGJkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBvd2VyYnVpbGRlcjYtc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucG93ZXJidWlsZGVyN1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucG93ZXJidWlsZGVyNy1zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wb3dlcmJ1aWxkZXI3NVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucG93ZXJidWlsZGVyNzUtc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucHJlbWluZXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnByZXZpZXdzeXN0ZW1zLmJveFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJveFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wcm90ZXVzLm1hZ2F6aW5lXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWd6XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnBzZnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnB1Ymxpc2hhcmUtZGVsdGEtdHJlZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInFwc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5wdmkucHRpZDFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwdGlkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnB3Zy1tdWx0aXBsZXhlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucHdnLXhodG1sLXByaW50K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5xdWFsY29tbS5icmV3LWFwcC1yZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnF1YXJhbnRhaW5lbmV0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5xdWFyay5xdWFya3hwcmVzc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInF4ZFwiLFwicXh0XCIsXCJxd2RcIixcInF3dFwiLFwicXhsXCIsXCJxeGJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucXVvYmplY3QtcXVveGRvY3VtZW50XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yYWRpc3lzLm1vbWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmFkaXN5cy5tc21sLWF1ZGl0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yYWRpc3lzLm1zbWwtYXVkaXQtY29uZit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmFkaXN5cy5tc21sLWF1ZGl0LWNvbm4reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbC1hdWRpdC1kaWFsb2creG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbC1hdWRpdC1zdHJlYW0reG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbC1jb25mK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yYWRpc3lzLm1zbWwtZGlhbG9nK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yYWRpc3lzLm1zbWwtZGlhbG9nLWJhc2UreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbC1kaWFsb2ctZmF4LWRldGVjdCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmFkaXN5cy5tc21sLWRpYWxvZy1mYXgtc2VuZHJlY3YreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbC1kaWFsb2ctZ3JvdXAreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhZGlzeXMubXNtbC1kaWFsb2ctc3BlZWNoK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yYWRpc3lzLm1zbWwtZGlhbG9nLXRyYW5zZm9ybSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmFpbnN0b3IuZGF0YVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmFwaWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJhclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJhclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yZWFsdm5jLmJlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJlZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yZWNvcmRhcmUubXVzaWN4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJteGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmVjb3JkYXJlLm11c2ljeG1sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXVzaWN4bWxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmVubGVhcm4ucmxwcmludFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmVzaWxpZW50LmxvZ2ljXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5yZXN0ZnVsK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucmlnLmNyeXB0b25vdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjcnlwdG9ub3RlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJpbS5jb2RcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNvZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5ybi1yZWFsbWVkaWFcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnJuLXJlYWxtZWRpYS12YnJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJtdmJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucm91dGU2Ni5saW5rNjYreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJsaW5rNjZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucnMtMjc0eFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQucnVja3VzLmRvd25sb2FkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zM3Ntc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc2FpbGluZ3RyYWNrZXIudHJhY2tcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zYXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNibS5jaWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNibS5taWQyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zY3JpYnVzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQuM2RmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQuY3NmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQuZG9jXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQuZW1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQubWh0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQubmV0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQucHB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWFsZWQudGlmZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc2VhbGVkLnhsc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc2VhbGVkbWVkaWEuc29mdHNlYWwuaHRtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc2VhbGVkbWVkaWEuc29mdHNlYWwucGRmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZWVtYWlsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2VlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNlaXMranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZW1hXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2VtYVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZW1kXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2VtZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zZW1mXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2VtZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zaGFkZS1zYXZlLWZpbGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNoYW5hLmluZm9ybWVkLmZvcm1kYXRhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaWZtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNoYW5hLmluZm9ybWVkLmZvcm10ZW1wbGF0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIml0cFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zaGFuYS5pbmZvcm1lZC5pbnRlcmNoYW5nZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImlpZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zaGFuYS5pbmZvcm1lZC5wYWNrYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaXBrXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNob290cHJvb2YranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zaG9wa2ljaytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNocFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc2h4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zaWdyb2suc2Vzc2lvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc2ltdGVjaC1taW5kbWFwcGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHdkXCIsXCJ0d2RzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNpcmVuK2pzb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc21hZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1tZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zbWFydC5ub3RlYm9va1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc21hcnQudGVhY2hlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRlYWNoZXJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc25lc2Rldi1wYWdlLXRhYmxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zb2Z0d2FyZTYwMi5maWxsZXIuZm9ybSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZvXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNvZnR3YXJlNjAyLmZpbGxlci5mb3JtLXhtbC16aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNvbGVudC5zZGttK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2RrbVwiLFwic2RrZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zcG90ZmlyZS5keHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkeHBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3BvdGZpcmUuc2ZzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2ZzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNxbGl0ZTNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNzcy1jb2RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNzcy1kdGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnNzcy1udGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi5jYWxjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzZGNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLmRyYXdcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNkYVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdGFyZGl2aXNpb24uaW1wcmVzc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2RkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi5tYXRoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbWZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLndyaXRlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2R3XCIsXCJ2b3JcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLndyaXRlci1nbG9iYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNnbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdGVwbWFuaWEucGFja2FnZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNtemlwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN0ZXBtYW5pYS5zdGVwY2hhcnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdHJlZXQtc3RyZWFtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdW4ud2FkbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndhZGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5jYWxjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzeGNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5jYWxjLnRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5kcmF3XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzeGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5kcmF3LnRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5pbXByZXNzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzeGlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5pbXByZXNzLnRlbXBsYXRlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5tYXRoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzeG1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC53cml0ZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInN4d1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLndyaXRlci5nbG9iYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInN4Z1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLndyaXRlci50ZW1wbGF0ZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3R3XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN1cy1jYWxlbmRhclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInN1c1wiLFwic3VzcFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zdmRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdmRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3dpZnR2aWV3LWljc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3ljbGUreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN5bWJpYW4uaW5zdGFsbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2lzXCIsXCJzaXN4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN5bmNtbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieHNtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbSt3YnhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYmRtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGRtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbS5ub3RpZmljYXRpb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbWRkZit3YnhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3luY21sLmRtZGRmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkZGZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3luY21sLmRtdG5kcyt3YnhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuc3luY21sLmRtdG5kcyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC5zeW5jbWwuZHMubm90aWZpY2F0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC50YWJsZXNjaGVtYStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRhby5pbnRlbnQtbW9kdWxlLWFyY2hpdmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0YW9cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudGNwZHVtcC5wY2FwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGNhcFwiLFwiY2FwXCIsXCJkbXBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudGhpbmstY2VsbC5wcHR0Yytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRtZC5tZWRpYWZsZXguYXBpK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC50bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRtb2JpbGUtbGl2ZXR2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widG1vXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRyaS5vbmVzb3VyY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRyaWQudHB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHB0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRyaXNjYXBlLm14c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm14c1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC50cnVlYXBwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHJhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnRydWVkb2NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnViaXNvZnQud2VicGxheWVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51ZmRsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widWZkXCIsXCJ1ZmRsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnVpcS50aGVtZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInV0elwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51bWFqaW5cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1bWpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudW5pdHlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1bml0eXdlYlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51b21sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widW9tbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cGxhbmV0LmFsZXJ0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cGxhbmV0LmFsZXJ0LXdieG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cGxhbmV0LmJlYXJlci1jaG9pY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnVwbGFuZXQuYmVhcmVyLWNob2ljZS13YnhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudXBsYW5ldC5jYWNoZW9wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cGxhbmV0LmNhY2hlb3Atd2J4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnVwbGFuZXQuY2hhbm5lbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudXBsYW5ldC5jaGFubmVsLXdieG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cGxhbmV0Lmxpc3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnVwbGFuZXQubGlzdC13YnhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudXBsYW5ldC5saXN0Y21kXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cGxhbmV0Lmxpc3RjbWQtd2J4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnVwbGFuZXQuc2lnbmFsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC51cmktbWFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC52YWx2ZS5zb3VyY2UubWF0ZXJpYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnZjeFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZjeFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC52ZC1zdHVkeVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudmVjdG9yd29ya3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnZlbCtqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnZlcmltYXRyaXgudmNhc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudmVyaXRvbmUuYWlvbitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnZlcnlhbnQudGhpblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudmVzLmVuY3J5cHRlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudmlkc29mdC52aWRjb25mZXJlbmNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC52aXNpb1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZzZFwiLFwidnN0XCIsXCJ2c3NcIixcInZzd1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC52aXNpb25hcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ2aXNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQudml2aWRlbmNlLnNjcmlwdGZpbGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnZzZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZzZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53YXAuc2ljXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53YXAuc2xjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53YXAud2J4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndieG1sXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndhcC53bWxjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid21sY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53YXAud21sc2NyaXB0Y1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndtbHNjXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndlYnR1cmJvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid3RiXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndmYS5kcHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndmYS5wMnBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndmYS53c2NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndpbmRvd3MuZGV2aWNlcGFpcmluZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQud21jXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53bWYuYm9vdHN0cmFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53b2xmcmFtLm1hdGhlbWF0aWNhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53b2xmcmFtLm1hdGhlbWF0aWNhLnBhY2thZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndvbGZyYW0ucGxheWVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibmJwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndvcmRwZXJmZWN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid3BkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLndxZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndxZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53cnEtaHAzMDAwLWxhYmVsbGVkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53dC5zdGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQud3YuY3NwK3dieG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC53di5jc3AreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnd2LnNzcCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueGFjbWwranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC54YXJhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGFyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnhmZGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4ZmRsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnhmZGwud2ViZm9ybVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueG1pK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC54bXBpZS5jcGtnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC54bXBpZS5kcGtnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC54bXBpZS5wbGFuXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC54bXBpZS5wcGtnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC54bXBpZS54bGltXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3ZuZC55YW1haGEuaHYtZGljXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaHZkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnlhbWFoYS5odi1zY3JpcHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJodnNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFtYWhhLmh2LXZvaWNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaHZwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnlhbWFoYS5vcGVuc2NvcmVmb3JtYXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvc2ZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFtYWhhLm9wZW5zY29yZWZvcm1hdC5vc2ZwdmcreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvc2ZwdmdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFtYWhhLnJlbW90ZS1zZXR1cFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFtYWhhLnNtYWYtYXVkaW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzYWZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFtYWhhLnNtYWYtcGhyYXNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3BmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnlhbWFoYS50aHJvdWdoLW5nblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFtYWhhLnR1bm5lbC11ZHBlbmNhcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWFvd2VtZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueWVsbG93cml2ZXItY3VzdG9tLW1lbnVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjbXBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQueW91dHViZS55dFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92bmQuenVsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiemlyXCIsXCJ6aXJ6XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdm5kLnp6YXp6LmRlY2sreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ6YXpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92b2ljZXhtbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZ4bWxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi92b3VjaGVyLWNtcytqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vdnEtcnRjcHhyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3dhc21cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndhc21cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi93YXRjaGVyaW5mbyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi93ZWJwdXNoLW9wdGlvbnMranNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3dob2lzcHAtcXVlcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vd2hvaXNwcC1yZXNwb25zZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi93aWRnZXRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3Z3RcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi93aW5obHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhscFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3dpdGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vd29yZHBlcmZlY3Q1LjFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vd3NkbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndzZGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi93c3BvbGljeSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndzcG9saWN5XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCI3elwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtYWJpd29yZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWJ3XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1hY2UtY29tcHJlc3NlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYWNlXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1hbWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWFwcGxlLWRpc2tpbWFnZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZG1nXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1hcmpcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhcmpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtYmluXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhYWJcIixcIngzMlwiLFwidTMyXCIsXCJ2b3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtbWFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhYW1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtc2VnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhYXNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWJjcGlvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJiY3Bpb1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtYmRvY1wiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJkb2NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWJpdHRvcnJlbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRvcnJlbnRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWJsb3JiXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJibGJcIixcImJsb3JiXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1iemlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJielwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtYnppcDJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJ6MlwiLFwiYm96XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1jYnJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNiclwiLFwiY2JhXCIsXCJjYnRcIixcImNielwiLFwiY2I3XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1jZGxpbmtcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZjZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtY2ZzLWNvbXByZXNzZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNmc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtY2hhdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2hhdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtY2hlc3MtcGduXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZ25cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWNocm9tZS1leHRlbnNpb25cIjoge1xuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjcnhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWNvY29hXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcIm5naW54XCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNjb1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtY29tcHJlc3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWNvbmZlcmVuY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm5zY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtY3Bpb1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY3Bpb1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtY3NoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjc2hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWRlYlwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWRlYmlhbi1wYWNrYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkZWJcIixcInVkZWJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWRnYy1jb21wcmVzc2VkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkZ2NcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWRpcmVjdG9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkaXJcIixcImRjclwiLFwiZHhyXCIsXCJjc3RcIixcImNjdFwiLFwiY3h0XCIsXCJ3M2RcIixcImZnZFwiLFwic3dhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1kb29tXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3YWRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWR0Ym5jeCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibmN4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1kdGJvb2sreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImR0YlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtZHRicmVzb3VyY2UreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJlc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtZHZpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkdmlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWVudm95XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJldnlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWV2YVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZXZhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LWJkZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYmRmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LWRvc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtZm9udC1mcmFtZW1ha2VyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LWdob3N0c2NyaXB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJnc2ZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWZvbnQtbGliZ3J4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LWxpbnV4LXBzZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHNmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LXBjZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGNmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LXNuZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic25mXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LXNwZWVkb1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtZm9udC1zdW5vcy1uZXdzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1mb250LXR5cGUxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZmFcIixcInBmYlwiLFwicGZtXCIsXCJhZm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWZvbnQtdmZvbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWZyZWVhcmNcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFyY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtZnV0dXJlc3BsYXNoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzcGxcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWdjYS1jb21wcmVzc2VkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJnY2FcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWdsdWx4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1bHhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWdudW1lcmljXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJnbnVtZXJpY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtZ3JhbXBzLXhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ3JhbXBzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1ndGFyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJndGFyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1nemlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1oZGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhkZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtaHR0cGQtcGhwXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwaHBcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWluc3RhbGwtaW5zdHJ1Y3Rpb25zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpbnN0YWxsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1pc285NjYwLWltYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpc29cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWphdmEtYXJjaGl2ZS1kaWZmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcIm5naW54XCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImphcmRpZmZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWphdmEtam5scC1maWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqbmxwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1qYXZhc2NyaXB0XCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1rZWVwYXNzMlwiOiB7XG4gICAgXCJleHRlbnNpb25zXCI6IFtcImtkYnhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LWxhdGV4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJsYXRleFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbHVhLWJ5dGVjb2RlXCI6IHtcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibHVhY1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbHpoLWNvbXByZXNzZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImx6aFwiLFwibGhhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tYWtlc2VsZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJuZ2lueFwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJydW5cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1pZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWllXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tb2JpcG9ja2V0LWVib29rXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwcmNcIixcIm1vYmlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1wZWd1cmxcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tcy1hcHBsaWNhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXBwbGljYXRpb25cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1zLXNob3J0Y3V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJsbmtcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1zLXdtZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid21kXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tcy13bXpcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndtelwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXMteGJhcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGJhcFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNhY2Nlc3NcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1kYlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNiaW5kZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9iZFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNjYXJkZmlsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY3JkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tc2NsaXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNscFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNkb3MtcHJvZ3JhbVwiOiB7XG4gICAgXCJleHRlbnNpb25zXCI6IFtcImV4ZVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNkb3dubG9hZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZXhlXCIsXCJkbGxcIixcImNvbVwiLFwiYmF0XCIsXCJtc2lcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1zbWVkaWF2aWV3XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtdmJcIixcIm0xM1wiLFwibTE0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tc21ldGFmaWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3bWZcIixcIndtelwiLFwiZW1mXCIsXCJlbXpcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1zbW9uZXlcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1ueVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNwdWJsaXNoZXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInB1YlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbXNzY2hlZHVsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2NkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1tc3Rlcm1pbmFsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0cm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW1zd3JpdGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndyaVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtbmV0Y2RmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJuY1wiLFwiY2RmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1ucy1wcm94eS1hdXRvY29uZmlnXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwYWNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LW56YlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibnpiXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1wZXJsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcIm5naW54XCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBsXCIsXCJwbVwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtcGlsb3RcIjoge1xuICAgIFwic291cmNlXCI6IFwibmdpbnhcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHJjXCIsXCJwZGJcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXBrY3MxMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicDEyXCIsXCJwZnhcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXBrY3M3LWNlcnRpZmljYXRlc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicDdiXCIsXCJzcGNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXBrY3M3LWNlcnRyZXFyZXNwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwN3JcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXBraS1tZXNzYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtcmFyLWNvbXByZXNzZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJhclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtcmVkaGF0LXBhY2thZ2UtbWFuYWdlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJuZ2lueFwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJycG1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXJlc2VhcmNoLWluZm8tc3lzdGVtc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicmlzXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1zZWFcIjoge1xuICAgIFwic291cmNlXCI6IFwibmdpbnhcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2VhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1zaFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzaFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtc2hhclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2hhclwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzd2ZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXNpbHZlcmxpZ2h0LWFwcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGFwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1zcWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNxbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtc3R1ZmZpdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2l0XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC1zdHVmZml0eFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2l0eFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtc3VicmlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzcnRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXN2NGNwaW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInN2NGNwaW9cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXN2NGNyY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3Y0Y3JjXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC10M3ZtLWltYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0M1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtdGFkc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2FtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC10YXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widGFyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC10Y2xcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRjbFwiLFwidGtcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXRleFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widGV4XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC10ZXgtdGZtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0Zm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXRleGluZm9cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRleGluZm9cIixcInRleGlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXRnaWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9ialwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtdXN0YXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInVzdGFyXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LWhkZFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaGRkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LW92YVwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3ZhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LW92ZlwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3ZmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZib3hcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZib3hcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtdmJveC1leHRwYWNrXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widmJveC1leHRwYWNrXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZkaVwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widmRpXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZoZFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widmhkXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZtZGtcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZtZGtcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXdhaXMtc291cmNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzcmNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXdlYi1hcHAtbWFuaWZlc3QranNvblwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid2ViYXBwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC14NTA5LWNhLWNlcnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkZXJcIixcImNydFwiLFwicGVtXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC14NTA5LWNhLXJhLWNlcnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veC14NTA5LW5leHQtY2EtY2VydFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXhmaWdcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZpZ1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gteGxpZmYreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhsZlwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gteHBpbnN0YWxsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4cGlcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94LXh6XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4elwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3gtem1hY2hpbmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInoxXCIsXCJ6MlwiLFwiejNcIixcIno0XCIsXCJ6NVwiLFwiejZcIixcIno3XCIsXCJ6OFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3g0MDAtYnBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGFjbWwreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGFtbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGFtbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3hjYXAtYXR0K3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGF2XCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGNhcC1jYXBzK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGNhXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGNhcC1kaWZmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGRmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGNhcC1lbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhlbFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3hjYXAtZXJyb3IreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGNhcC1ucyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhuc1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3hjb24tY29uZmVyZW5jZS1pbmZvK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3hjb24tY29uZmVyZW5jZS1pbmZvLWRpZmYreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veGVuYyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhlbmNcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94aHRtbCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhodG1sXCIsXCJ4aHRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94aHRtbC12b2ljZSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3hsaWZmK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGxmXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4bWxcIixcInhzbFwiLFwieHNkXCIsXCJybmdcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94bWwtZHRkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkdGRcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94bWwtZXh0ZXJuYWwtcGFyc2VkLWVudGl0eVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94bWwtcGF0Y2greG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veG1wcCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94b3AreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4b3BcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94cHJvYyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieHBsXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veHNsdCt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhzbFwiLFwieHNsdFwiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3hzcGYreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhzcGZcIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi94dit4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm14bWxcIixcInhodm1sXCIsXCJ4dm1sXCIsXCJ4dm1cIl1cbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi95YW5nXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieWFuZ1wiXVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3lhbmctZGF0YStqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veWFuZy1kYXRhK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3lhbmctcGF0Y2granNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcImFwcGxpY2F0aW9uL3lhbmctcGF0Y2greG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwiYXBwbGljYXRpb24veWluK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieWluXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vemlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiemlwXCJdXG4gIH0sXG4gIFwiYXBwbGljYXRpb24vemxpYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhcHBsaWNhdGlvbi96c3RkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvLzFkLWludGVybGVhdmVkLXBhcml0eWZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby8zMmthZHBjbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby8zZ3BwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiM2dwcFwiXVxuICB9LFxuICBcImF1ZGlvLzNncHAyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2FhY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9hYzNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vYWRwY21cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFkcFwiXVxuICB9LFxuICBcImF1ZGlvL2FtclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFtclwiXVxuICB9LFxuICBcImF1ZGlvL2Ftci13YlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9hbXItd2IrXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2FwdHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vYXNjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2F0cmFjLWFkdmFuY2VkLWxvc3NsZXNzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2F0cmFjLXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vYXRyYWMzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2Jhc2ljXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXVcIixcInNuZFwiXVxuICB9LFxuICBcImF1ZGlvL2J2MTZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vYnYzMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9jbGVhcm1vZGVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vY25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZGF0MTJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZGxzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2Rzci1lczIwMTEwOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9kc3ItZXMyMDIwNTBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZHNyLWVzMjAyMjExXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2Rzci1lczIwMjIxMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9kdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9kdmk0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2VhYzNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZW5jYXBydHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZXZyY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnJjLXFjcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnJjMFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnJjMVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnJjYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnJjYjBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZXZyY2IxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2V2cmNud1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnJjbncwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2V2cmNudzFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZXZyY3diXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2V2cmN3YjBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZXZyY3diMVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ldnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZmxleGZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9md2RyZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZzcxMS0wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2c3MTlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZzcyMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9nNzIyMVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9nNzIzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2c3MjYtMTZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZzcyNi0yNFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9nNzI2LTMyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2c3MjYtNDBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vZzcyOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9nNzI5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2c3MjkxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2c3MjlkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2c3MjllXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2dzbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9nc20tZWZyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2dzbS1oci0wOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9pbGJjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2lwLW1yX3YyLjVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vaXNhY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIlxuICB9LFxuICBcImF1ZGlvL2wxNlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9sMjBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vbDI0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImF1ZGlvL2w4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL2xwY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9tZWxwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL21lbHAxMjAwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL21lbHAyNDAwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL21lbHA2MDBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vbWhhc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9taWRpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtaWRcIixcIm1pZGlcIixcImthclwiLFwicm1pXCJdXG4gIH0sXG4gIFwiYXVkaW8vbW9iaWxlLXhtZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm14bWZcIl1cbiAgfSxcbiAgXCJhdWRpby9tcDNcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtcDNcIl1cbiAgfSxcbiAgXCJhdWRpby9tcDRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtNGFcIixcIm1wNGFcIl1cbiAgfSxcbiAgXCJhdWRpby9tcDRhLWxhdG1cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vbXBhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL21wYS1yb2J1c3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vbXBlZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1wZ2FcIixcIm1wMlwiLFwibXAyYVwiLFwibXAzXCIsXCJtMmFcIixcIm0zYVwiXVxuICB9LFxuICBcImF1ZGlvL21wZWc0LWdlbmVyaWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vbXVzZXBhY2tcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCJcbiAgfSxcbiAgXCJhdWRpby9vZ2dcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJvZ2FcIixcIm9nZ1wiLFwic3B4XCIsXCJvcHVzXCJdXG4gIH0sXG4gIFwiYXVkaW8vb3B1c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9wYXJpdHlmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vcGNtYVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9wY21hLXdiXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3BjbXVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vcGNtdS13YlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9wcnMuc2lkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3FjZWxwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3JhcHRvcmZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9yZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vcnRwLWVuYy1hZXNjbTEyOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ydHAtbWlkaVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ydHBsb29wYmFja1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9ydHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vczNtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzM21cIl1cbiAgfSxcbiAgXCJhdWRpby9zY2lwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3NpbGtcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNpbFwiXVxuICB9LFxuICBcImF1ZGlvL3NtdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9zbXYtcWNwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3NtdjBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vc29mYVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby9zcC1taWRpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3NwZWV4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3QxNDBjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3QzOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby90ZWxlcGhvbmUtZXZlbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdGV0cmFfYWNlbHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdGV0cmFfYWNlbHBfYmJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdG9uZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby90c3ZjaXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdWVtY2xpcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby91bHBmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdXNhY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92ZHZpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3Ztci13YlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92bmQuM2dwcC5pdWZwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC40c2JcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmF1ZGlva296XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5jZWxwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5jaXNjby5uc2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmNtbGVzLnJhZGlvLWV2ZW50c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92bmQuY25zLmFucDFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmNucy5pbmYxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kZWNlLmF1ZGlvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXZhXCIsXCJ1dnZhXCJdXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmRpZ2l0YWwtd2luZHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJlb2xcIl1cbiAgfSxcbiAgXCJhdWRpby92bmQuZGxuYS5hZHRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kb2xieS5oZWFhYy4xXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kb2xieS5oZWFhYy4yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kb2xieS5tbHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmRvbGJ5Lm1wc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92bmQuZG9sYnkucGwyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kb2xieS5wbDJ4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kb2xieS5wbDJ6XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kb2xieS5wdWxzZS4xXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5kcmFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkcmFcIl1cbiAgfSxcbiAgXCJhdWRpby92bmQuZHRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZHRzXCJdXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmR0cy5oZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImR0c2hkXCJdXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmR0cy51aGRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmR2Yi5maWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5ldmVyYWQucGxqXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5obnMuYXVkaW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLmx1Y2VudC52b2ljZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImx2cFwiXVxuICB9LFxuICBcImF1ZGlvL3ZuZC5tcy1wbGF5cmVhZHkubWVkaWEucHlhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHlhXCJdXG4gIH0sXG4gIFwiYXVkaW8vdm5kLm5va2lhLm1vYmlsZS14bWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLm5vcnRlbC52YmtcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLm51ZXJhLmVjZWxwNDgwMFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVjZWxwNDgwMFwiXVxuICB9LFxuICBcImF1ZGlvL3ZuZC5udWVyYS5lY2VscDc0NzBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJlY2VscDc0NzBcIl1cbiAgfSxcbiAgXCJhdWRpby92bmQubnVlcmEuZWNlbHA5NjAwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZWNlbHA5NjAwXCJdXG4gIH0sXG4gIFwiYXVkaW8vdm5kLm9jdGVsLnNiY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92bmQucHJlc29udXMubXVsdGl0cmFja1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92bmQucWNlbHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiYXVkaW8vdm5kLnJoZXRvcmV4LjMya2FkcGNtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC5yaXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJyaXBcIl1cbiAgfSxcbiAgXCJhdWRpby92bmQucm4tcmVhbGF1ZGlvXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImF1ZGlvL3ZuZC5zZWFsZWRtZWRpYS5zb2Z0c2VhbC5tcGVnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImF1ZGlvL3ZuZC52bXguY3ZzZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby92bmQud2F2ZVwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJhdWRpby92b3JiaXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXVkaW8vdm9yYmlzLWNvbmZpZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJhdWRpby93YXZcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3YXZcIl1cbiAgfSxcbiAgXCJhdWRpby93YXZlXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid2F2XCJdXG4gIH0sXG4gIFwiYXVkaW8vd2VibVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid2ViYVwiXVxuICB9LFxuICBcImF1ZGlvL3gtYWFjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhYWNcIl1cbiAgfSxcbiAgXCJhdWRpby94LWFpZmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImFpZlwiLFwiYWlmZlwiLFwiYWlmY1wiXVxuICB9LFxuICBcImF1ZGlvL3gtY2FmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjYWZcIl1cbiAgfSxcbiAgXCJhdWRpby94LWZsYWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZsYWNcIl1cbiAgfSxcbiAgXCJhdWRpby94LW00YVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJuZ2lueFwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtNGFcIl1cbiAgfSxcbiAgXCJhdWRpby94LW1hdHJvc2thXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJta2FcIl1cbiAgfSxcbiAgXCJhdWRpby94LW1wZWd1cmxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm0zdVwiXVxuICB9LFxuICBcImF1ZGlvL3gtbXMtd2F4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3YXhcIl1cbiAgfSxcbiAgXCJhdWRpby94LW1zLXdtYVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid21hXCJdXG4gIH0sXG4gIFwiYXVkaW8veC1wbi1yZWFsYXVkaW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJhbVwiLFwicmFcIl1cbiAgfSxcbiAgXCJhdWRpby94LXBuLXJlYWxhdWRpby1wbHVnaW5cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJtcFwiXVxuICB9LFxuICBcImF1ZGlvL3gtcmVhbGF1ZGlvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcIm5naW54XCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJhXCJdXG4gIH0sXG4gIFwiYXVkaW8veC10dGFcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCJcbiAgfSxcbiAgXCJhdWRpby94LXdhdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid2F2XCJdXG4gIH0sXG4gIFwiYXVkaW8veG1cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhtXCJdXG4gIH0sXG4gIFwiY2hlbWljYWwveC1jZHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNkeFwiXVxuICB9LFxuICBcImNoZW1pY2FsL3gtY2lmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjaWZcIl1cbiAgfSxcbiAgXCJjaGVtaWNhbC94LWNtZGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNtZGZcIl1cbiAgfSxcbiAgXCJjaGVtaWNhbC94LWNtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY21sXCJdXG4gIH0sXG4gIFwiY2hlbWljYWwveC1jc21sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjc21sXCJdXG4gIH0sXG4gIFwiY2hlbWljYWwveC1wZGJcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCJcbiAgfSxcbiAgXCJjaGVtaWNhbC94LXh5elwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieHl6XCJdXG4gIH0sXG4gIFwiZm9udC9jb2xsZWN0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHRjXCJdXG4gIH0sXG4gIFwiZm9udC9vdGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm90ZlwiXVxuICB9LFxuICBcImZvbnQvc2ZudFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJmb250L3R0ZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHRmXCJdXG4gIH0sXG4gIFwiZm9udC93b2ZmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid29mZlwiXVxuICB9LFxuICBcImZvbnQvd29mZjJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3b2ZmMlwiXVxuICB9LFxuICBcImltYWdlL2FjZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJleHJcIl1cbiAgfSxcbiAgXCJpbWFnZS9hcG5nXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXBuZ1wiXVxuICB9LFxuICBcImltYWdlL2F2Y2lcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiaW1hZ2UvYXZjc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJpbWFnZS9hdmlmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXZpZlwiXVxuICB9LFxuICBcImltYWdlL2JtcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYm1wXCJdXG4gIH0sXG4gIFwiaW1hZ2UvY2dtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY2dtXCJdXG4gIH0sXG4gIFwiaW1hZ2UvZGljb20tcmxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZHJsZVwiXVxuICB9LFxuICBcImltYWdlL2VtZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVtZlwiXVxuICB9LFxuICBcImltYWdlL2ZpdHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJmaXRzXCJdXG4gIH0sXG4gIFwiaW1hZ2UvZzNmYXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJnM1wiXVxuICB9LFxuICBcImltYWdlL2dpZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdpZlwiXVxuICB9LFxuICBcImltYWdlL2hlaWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJoZWljXCJdXG4gIH0sXG4gIFwiaW1hZ2UvaGVpYy1zZXF1ZW5jZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhlaWNzXCJdXG4gIH0sXG4gIFwiaW1hZ2UvaGVpZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhlaWZcIl1cbiAgfSxcbiAgXCJpbWFnZS9oZWlmLXNlcXVlbmNlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaGVpZnNcIl1cbiAgfSxcbiAgXCJpbWFnZS9oZWoya1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImhlajJcIl1cbiAgfSxcbiAgXCJpbWFnZS9oc2oyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaHNqMlwiXVxuICB9LFxuICBcImltYWdlL2llZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImllZlwiXVxuICB9LFxuICBcImltYWdlL2psc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImpsc1wiXVxuICB9LFxuICBcImltYWdlL2pwMlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImpwMlwiLFwianBnMlwiXVxuICB9LFxuICBcImltYWdlL2pwZWdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqcGVnXCIsXCJqcGdcIixcImpwZVwiXVxuICB9LFxuICBcImltYWdlL2pwaFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImpwaFwiXVxuICB9LFxuICBcImltYWdlL2pwaGNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqaGNcIl1cbiAgfSxcbiAgXCJpbWFnZS9qcG1cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqcG1cIl1cbiAgfSxcbiAgXCJpbWFnZS9qcHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqcHhcIixcImpwZlwiXVxuICB9LFxuICBcImltYWdlL2p4clwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImp4clwiXVxuICB9LFxuICBcImltYWdlL2p4cmFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqeHJhXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvanhyc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImp4cnNcIl1cbiAgfSxcbiAgXCJpbWFnZS9qeHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqeHNcIl1cbiAgfSxcbiAgXCJpbWFnZS9qeHNjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wianhzY1wiXVxuICB9LFxuICBcImltYWdlL2p4c2lcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqeHNpXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvanhzc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImp4c3NcIl1cbiAgfSxcbiAgXCJpbWFnZS9rdHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJrdHhcIl1cbiAgfSxcbiAgXCJpbWFnZS9rdHgyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wia3R4MlwiXVxuICB9LFxuICBcImltYWdlL25hcGxwc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJpbWFnZS9wanBlZ1wiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJpbWFnZS9wbmdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwbmdcIl1cbiAgfSxcbiAgXCJpbWFnZS9wcnMuYnRpZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImJ0aWZcIl1cbiAgfSxcbiAgXCJpbWFnZS9wcnMucHRpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHRpXCJdXG4gIH0sXG4gIFwiaW1hZ2UvcHdnLXJhc3RlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJpbWFnZS9zZ2lcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNnaVwiXVxuICB9LFxuICBcImltYWdlL3N2Zyt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInN2Z1wiLFwic3ZnelwiXVxuICB9LFxuICBcImltYWdlL3QzOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInQzOFwiXVxuICB9LFxuICBcImltYWdlL3RpZmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0aWZcIixcInRpZmZcIl1cbiAgfSxcbiAgXCJpbWFnZS90aWZmLWZ4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widGZ4XCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLmFkb2JlLnBob3Rvc2hvcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHNkXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLmFpcnppcC5hY2NlbGVyYXRvci5henZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJhenZcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQuY25zLmluZjJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLmRlY2UuZ3JhcGhpY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInV2aVwiLFwidXZ2aVwiLFwidXZnXCIsXCJ1dnZnXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLmRqdnVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkanZ1XCIsXCJkanZcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQuZHZiLnN1YnRpdGxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3ViXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLmR3Z1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImR3Z1wiXVxuICB9LFxuICBcImltYWdlL3ZuZC5keGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkeGZcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQuZmFzdGJpZHNoZWV0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmJzXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLmZweFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZweFwiXVxuICB9LFxuICBcImltYWdlL3ZuZC5mc3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJmc3RcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQuZnVqaXhlcm94LmVkbWljcy1tbXJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtbXJcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQuZnVqaXhlcm94LmVkbWljcy1ybGNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJybGNcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQuZ2xvYmFsZ3JhcGhpY3MucGdiXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImltYWdlL3ZuZC5taWNyb3NvZnQuaWNvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImljb1wiXVxuICB9LFxuICBcImltYWdlL3ZuZC5taXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLm1vemlsbGEuYXBuZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJpbWFnZS92bmQubXMtZGRzXCI6IHtcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZGRzXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLm1zLW1vZGlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtZGlcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQubXMtcGhvdG9cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndkcFwiXVxuICB9LFxuICBcImltYWdlL3ZuZC5uZXQtZnB4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibnB4XCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLnBjby5iMTZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJiMTZcIl1cbiAgfSxcbiAgXCJpbWFnZS92bmQucmFkaWFuY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLnNlYWxlZC5wbmdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLnNlYWxlZG1lZGlhLnNvZnRzZWFsLmdpZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJpbWFnZS92bmQuc2VhbGVkbWVkaWEuc29mdHNlYWwuanBnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcImltYWdlL3ZuZC5zdmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLnRlbmNlbnQudGFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widGFwXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLnZhbHZlLnNvdXJjZS50ZXh0dXJlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widnRmXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLndhcC53Ym1wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid2JtcFwiXVxuICB9LFxuICBcImltYWdlL3ZuZC54aWZmXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieGlmXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvdm5kLnpicnVzaC5wY3hcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwY3hcIl1cbiAgfSxcbiAgXCJpbWFnZS93ZWJwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3ZWJwXCJdXG4gIH0sXG4gIFwiaW1hZ2Uvd21mXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid21mXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC0zZHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIjNkc1wiXVxuICB9LFxuICBcImltYWdlL3gtY211LXJhc3RlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicmFzXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1jbXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImNteFwiXVxuICB9LFxuICBcImltYWdlL3gtZnJlZWhhbmRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZoXCIsXCJmaGNcIixcImZoNFwiLFwiZmg1XCIsXCJmaDdcIl1cbiAgfSxcbiAgXCJpbWFnZS94LWljb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaWNvXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1qbmdcIjoge1xuICAgIFwic291cmNlXCI6IFwibmdpbnhcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiam5nXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1tcnNpZC1pbWFnZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2lkXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1tcy1ibXBcIjoge1xuICAgIFwic291cmNlXCI6IFwibmdpbnhcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJibXBcIl1cbiAgfSxcbiAgXCJpbWFnZS94LXBjeFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGN4XCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1waWN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwaWNcIixcInBjdFwiXVxuICB9LFxuICBcImltYWdlL3gtcG9ydGFibGUtYW55bWFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwbm1cIl1cbiAgfSxcbiAgXCJpbWFnZS94LXBvcnRhYmxlLWJpdG1hcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicGJtXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1wb3J0YWJsZS1ncmF5bWFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZ21cIl1cbiAgfSxcbiAgXCJpbWFnZS94LXBvcnRhYmxlLXBpeG1hcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHBtXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC1yZ2JcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJnYlwiXVxuICB9LFxuICBcImltYWdlL3gtdGdhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0Z2FcIl1cbiAgfSxcbiAgXCJpbWFnZS94LXhiaXRtYXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhibVwiXVxuICB9LFxuICBcImltYWdlL3gteGNmXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcImltYWdlL3gteHBpeG1hcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieHBtXCJdXG4gIH0sXG4gIFwiaW1hZ2UveC14d2luZG93ZHVtcFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieHdkXCJdXG4gIH0sXG4gIFwibWVzc2FnZS9jcGltXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1lc3NhZ2UvZGVsaXZlcnktc3RhdHVzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1lc3NhZ2UvZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1xuICAgICAgXCJkaXNwb3NpdGlvbi1ub3RpZmljYXRpb25cIlxuICAgIF1cbiAgfSxcbiAgXCJtZXNzYWdlL2V4dGVybmFsLWJvZHlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwibWVzc2FnZS9mZWVkYmFjay1yZXBvcnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwibWVzc2FnZS9nbG9iYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1OG1zZ1wiXVxuICB9LFxuICBcIm1lc3NhZ2UvZ2xvYmFsLWRlbGl2ZXJ5LXN0YXR1c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInU4ZHNuXCJdXG4gIH0sXG4gIFwibWVzc2FnZS9nbG9iYWwtZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widThtZG5cIl1cbiAgfSxcbiAgXCJtZXNzYWdlL2dsb2JhbC1oZWFkZXJzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widThoZHJcIl1cbiAgfSxcbiAgXCJtZXNzYWdlL2h0dHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwibWVzc2FnZS9pbWRuK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcIm1lc3NhZ2UvbmV3c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJtZXNzYWdlL3BhcnRpYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwibWVzc2FnZS9yZmM4MjJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImVtbFwiLFwibWltZVwiXVxuICB9LFxuICBcIm1lc3NhZ2Uvcy1odHRwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1lc3NhZ2Uvc2lwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1lc3NhZ2Uvc2lwZnJhZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJtZXNzYWdlL3RyYWNraW5nLXN0YXR1c1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJtZXNzYWdlL3ZuZC5zaS5zaW1wXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1lc3NhZ2Uvdm5kLndmYS53c2NcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3c2NcIl1cbiAgfSxcbiAgXCJtb2RlbC8zbWZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCIzbWZcIl1cbiAgfSxcbiAgXCJtb2RlbC9lNTdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwibW9kZWwvZ2x0Zitqc29uXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJnbHRmXCJdXG4gIH0sXG4gIFwibW9kZWwvZ2x0Zi1iaW5hcnlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImdsYlwiXVxuICB9LFxuICBcIm1vZGVsL2lnZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJpZ3NcIixcImlnZXNcIl1cbiAgfSxcbiAgXCJtb2RlbC9tZXNoXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXNoXCIsXCJtZXNoXCIsXCJzaWxvXCJdXG4gIH0sXG4gIFwibW9kZWwvbXRsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibXRsXCJdXG4gIH0sXG4gIFwibW9kZWwvb2JqXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib2JqXCJdXG4gIH0sXG4gIFwibW9kZWwvc3RlcCt6aXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdHB6XCJdXG4gIH0sXG4gIFwibW9kZWwvc3RlcC14bWwremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3RweHpcIl1cbiAgfSxcbiAgXCJtb2RlbC9zdGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzdGxcIl1cbiAgfSxcbiAgXCJtb2RlbC92bmQuY29sbGFkYSt4bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImRhZVwiXVxuICB9LFxuICBcIm1vZGVsL3ZuZC5kd2ZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkd2ZcIl1cbiAgfSxcbiAgXCJtb2RlbC92bmQuZmxhdGxhbmQuM2RtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJtb2RlbC92bmQuZ2RsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ2RsXCJdXG4gIH0sXG4gIFwibW9kZWwvdm5kLmdzLWdkbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIlxuICB9LFxuICBcIm1vZGVsL3ZuZC5ncy5nZGxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwibW9kZWwvdm5kLmd0d1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImd0d1wiXVxuICB9LFxuICBcIm1vZGVsL3ZuZC5tb21sK3htbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcIm1vZGVsL3ZuZC5tdHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtdHNcIl1cbiAgfSxcbiAgXCJtb2RlbC92bmQub3BlbmdleFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9nZXhcIl1cbiAgfSxcbiAgXCJtb2RlbC92bmQucGFyYXNvbGlkLnRyYW5zbWl0LmJpbmFyeVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhfYlwiXVxuICB9LFxuICBcIm1vZGVsL3ZuZC5wYXJhc29saWQudHJhbnNtaXQudGV4dFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInhfdFwiXVxuICB9LFxuICBcIm1vZGVsL3ZuZC5weXRoYS5weW94XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1vZGVsL3ZuZC5yb3NldHRlLmFubm90YXRlZC1kYXRhLW1vZGVsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm1vZGVsL3ZuZC5zYXAudmRzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widmRzXCJdXG4gIH0sXG4gIFwibW9kZWwvdm5kLnVzZHoremlwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXNkelwiXVxuICB9LFxuICBcIm1vZGVsL3ZuZC52YWx2ZS5zb3VyY2UuY29tcGlsZWQtbWFwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYnNwXCJdXG4gIH0sXG4gIFwibW9kZWwvdm5kLnZ0dVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZ0dVwiXVxuICB9LFxuICBcIm1vZGVsL3ZybWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3cmxcIixcInZybWxcIl1cbiAgfSxcbiAgXCJtb2RlbC94M2QrYmluYXJ5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4M2RiXCIsXCJ4M2RielwiXVxuICB9LFxuICBcIm1vZGVsL3gzZCtmYXN0aW5mb3NldFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIngzZGJcIl1cbiAgfSxcbiAgXCJtb2RlbC94M2QrdnJtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieDNkdlwiLFwieDNkdnpcIl1cbiAgfSxcbiAgXCJtb2RlbC94M2QreG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4M2RcIixcIngzZHpcIl1cbiAgfSxcbiAgXCJtb2RlbC94M2QtdnJtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIngzZHZcIl1cbiAgfSxcbiAgXCJtdWx0aXBhcnQvYWx0ZXJuYXRpdmVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwibXVsdGlwYXJ0L2FwcGxlZG91YmxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC9ieXRlcmFuZ2VzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC9kaWdlc3RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwibXVsdGlwYXJ0L2VuY3J5cHRlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZVxuICB9LFxuICBcIm11bHRpcGFydC9oZWFkZXItc2V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC9taXhlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJtdWx0aXBhcnQvbXVsdGlsaW5ndWFsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC9wYXJhbGxlbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJtdWx0aXBhcnQvcmVsYXRlZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2VcbiAgfSxcbiAgXCJtdWx0aXBhcnQvcmVwb3J0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC9zaWduZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlXG4gIH0sXG4gIFwibXVsdGlwYXJ0L3ZuZC5iaW50Lm1lZC1wbHVzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC92b2ljZS1tZXNzYWdlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcIm11bHRpcGFydC94LW1peGVkLXJlcGxhY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC8xZC1pbnRlcmxlYXZlZC1wYXJpdHlmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9jYWNoZS1tYW5pZmVzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXBwY2FjaGVcIixcIm1hbmlmZXN0XCJdXG4gIH0sXG4gIFwidGV4dC9jYWxlbmRhclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImljc1wiLFwiaWZiXCJdXG4gIH0sXG4gIFwidGV4dC9jYWxlbmRlclwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcInRleHQvY21kXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwidGV4dC9jb2ZmZWVzY3JpcHRcIjoge1xuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjb2ZmZWVcIixcImxpdGNvZmZlZVwiXVxuICB9LFxuICBcInRleHQvY3FsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvY3FsLWV4cHJlc3Npb25cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9jcWwtaWRlbnRpZmllclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L2Nzc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJjc3NcIl1cbiAgfSxcbiAgXCJ0ZXh0L2NzdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY3N2XCJdXG4gIH0sXG4gIFwidGV4dC9jc3Ytc2NoZW1hXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvZGlyZWN0b3J5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvZG5zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvZWNtYXNjcmlwdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L2VuY2FwcnRwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvZW5yaWNoZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9maGlycGF0aFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L2ZsZXhmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9md2RyZWRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9nZmYzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvZ3JhbW1hci1yZWYtbGlzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L2h0bWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImh0bWxcIixcImh0bVwiLFwic2h0bWxcIl1cbiAgfSxcbiAgXCJ0ZXh0L2phZGVcIjoge1xuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqYWRlXCJdXG4gIH0sXG4gIFwidGV4dC9qYXZhc2NyaXB0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwidGV4dC9qY3ItY25kXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvanN4XCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJqc3hcIl1cbiAgfSxcbiAgXCJ0ZXh0L2xlc3NcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImxlc3NcIl1cbiAgfSxcbiAgXCJ0ZXh0L21hcmtkb3duXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtYXJrZG93blwiLFwibWRcIl1cbiAgfSxcbiAgXCJ0ZXh0L21hdGhtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJuZ2lueFwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtbWxcIl1cbiAgfSxcbiAgXCJ0ZXh0L21keFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWR4XCJdXG4gIH0sXG4gIFwidGV4dC9taXphclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L24zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm4zXCJdXG4gIH0sXG4gIFwidGV4dC9wYXJhbWV0ZXJzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiXG4gIH0sXG4gIFwidGV4dC9wYXJpdHlmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9wbGFpblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHh0XCIsXCJ0ZXh0XCIsXCJjb25mXCIsXCJkZWZcIixcImxpc3RcIixcImxvZ1wiLFwiaW5cIixcImluaVwiXVxuICB9LFxuICBcInRleHQvcHJvdmVuYW5jZS1ub3RhdGlvblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIlxuICB9LFxuICBcInRleHQvcHJzLmZhbGxlbnN0ZWluLnJzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3Bycy5saW5lcy50YWdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkc2NcIl1cbiAgfSxcbiAgXCJ0ZXh0L3Bycy5wcm9wLmxvZ2ljXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvcmFwdG9yZmVjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvcmVkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvcmZjODIyLWhlYWRlcnNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC9yaWNodGV4dFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicnR4XCJdXG4gIH0sXG4gIFwidGV4dC9ydGZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInJ0ZlwiXVxuICB9LFxuICBcInRleHQvcnRwLWVuYy1hZXNjbTEyOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3J0cGxvb3BiYWNrXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvcnR4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvc2dtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNnbWxcIixcInNnbVwiXVxuICB9LFxuICBcInRleHQvc2hhY2xjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvc2hleFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNoZXhcIl1cbiAgfSxcbiAgXCJ0ZXh0L3NsaW1cIjoge1xuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbGltXCIsXCJzbG1cIl1cbiAgfSxcbiAgXCJ0ZXh0L3NwZHhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzcGR4XCJdXG4gIH0sXG4gIFwidGV4dC9zdHJpbmdzXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvc3R5bHVzXCI6IHtcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3R5bHVzXCIsXCJzdHlsXCJdXG4gIH0sXG4gIFwidGV4dC90MTQwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInRzdlwiXVxuICB9LFxuICBcInRleHQvdHJvZmZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0XCIsXCJ0clwiLFwicm9mZlwiLFwibWFuXCIsXCJtZVwiLFwibXNcIl1cbiAgfSxcbiAgXCJ0ZXh0L3R1cnRsZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widHRsXCJdXG4gIH0sXG4gIFwidGV4dC91bHBmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC91cmktbGlzdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXJpXCIsXCJ1cmlzXCIsXCJ1cmxzXCJdXG4gIH0sXG4gIFwidGV4dC92Y2FyZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1widmNhcmRcIl1cbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5hXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLmFiY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5hc2NpaS1hcnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC92bmQuY3VybFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImN1cmxcIl1cbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5jdXJsLmRjdXJsXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJkY3VybFwiXVxuICB9LFxuICBcInRleHQvdm5kLmN1cmwubWN1cmxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1jdXJsXCJdXG4gIH0sXG4gIFwidGV4dC92bmQuY3VybC5zY3VybFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic2N1cmxcIl1cbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5kZWJpYW4uY29weXJpZ2h0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiXG4gIH0sXG4gIFwidGV4dC92bmQuZG1jbGllbnRzY3JpcHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC92bmQuZHZiLnN1YnRpdGxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3ViXCJdXG4gIH0sXG4gIFwidGV4dC92bmQuZXNtZXJ0ZWMudGhlbWUtZGVzY3JpcHRvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIlxuICB9LFxuICBcInRleHQvdm5kLmZpY2xhYi5mbHRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC92bmQuZmx5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmx5XCJdXG4gIH0sXG4gIFwidGV4dC92bmQuZm1pLmZsZXhzdG9yXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmx4XCJdXG4gIH0sXG4gIFwidGV4dC92bmQuZ21sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLmdyYXBodml6XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZ3ZcIl1cbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5oYW5zXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLmhnbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5pbjNkLjNkbWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCIzZG1sXCJdXG4gIH0sXG4gIFwidGV4dC92bmQuaW4zZC5zcG90XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wic3BvdFwiXVxuICB9LFxuICBcInRleHQvdm5kLmlwdGMubmV3c21sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLmlwdGMubml0ZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5sYXRleC16XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLm1vdG9yb2xhLnJlZmxleFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5tcy1tZWRpYXBhY2thZ2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC92bmQubmV0MnBob25lLmNvbW1jZW50ZXIuY29tbWFuZFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5yYWRpc3lzLm1zbWwtYmFzaWMtbGF5b3V0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLnNlbngud2FycHNjcmlwdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5zaS51cmljYXRhbG9ndWVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidGV4dC92bmQuc29zaVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC5zdW4uajJtZS5hcHAtZGVzY3JpcHRvclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiamFkXCJdXG4gIH0sXG4gIFwidGV4dC92bmQudHJvbGx0ZWNoLmxpbmd1aXN0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNoYXJzZXRcIjogXCJVVEYtOFwiXG4gIH0sXG4gIFwidGV4dC92bmQud2FwLnNpXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQvdm5kLndhcC5zbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ0ZXh0L3ZuZC53YXAud21sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid21sXCJdXG4gIH0sXG4gIFwidGV4dC92bmQud2FwLndtbHNjcmlwdFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndtbHNcIl1cbiAgfSxcbiAgXCJ0ZXh0L3Z0dFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjaGFyc2V0XCI6IFwiVVRGLThcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ2dHRcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtYXNtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzXCIsXCJhc21cIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiY1wiLFwiY2NcIixcImN4eFwiLFwiY3BwXCIsXCJoXCIsXCJoaFwiLFwiZGljXCJdXG4gIH0sXG4gIFwidGV4dC94LWNvbXBvbmVudFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJuZ2lueFwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJodGNcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtZm9ydHJhblwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZlwiLFwiZm9yXCIsXCJmNzdcIixcImY5MFwiXVxuICB9LFxuICBcInRleHQveC1nd3QtcnBjXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH0sXG4gIFwidGV4dC94LWhhbmRsZWJhcnMtdGVtcGxhdGVcIjoge1xuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJoYnNcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtamF2YS1zb3VyY2VcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImphdmFcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtanF1ZXJ5LXRtcGxcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWVcbiAgfSxcbiAgXCJ0ZXh0L3gtbHVhXCI6IHtcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibHVhXCJdXG4gIH0sXG4gIFwidGV4dC94LW1hcmtkb3duXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJta2RcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtbmZvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJuZm9cIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtb3BtbFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wib3BtbFwiXVxuICB9LFxuICBcInRleHQveC1vcmdcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9yZ1wiXVxuICB9LFxuICBcInRleHQveC1wYXNjYWxcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInBcIixcInBhc1wiXVxuICB9LFxuICBcInRleHQveC1wcm9jZXNzaW5nXCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJwZGVcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtc2Fzc1wiOiB7XG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNhc3NcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtc2Nzc1wiOiB7XG4gICAgXCJleHRlbnNpb25zXCI6IFtcInNjc3NcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtc2V0ZXh0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJldHhcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtc2Z2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzZnZcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtc3VzZS15bXBcIjoge1xuICAgIFwiY29tcHJlc3NpYmxlXCI6IHRydWUsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInltcFwiXVxuICB9LFxuICBcInRleHQveC11dWVuY29kZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXVcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtdmNhbGVuZGFyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ2Y3NcIl1cbiAgfSxcbiAgXCJ0ZXh0L3gtdmNhcmRcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZjZlwiXVxuICB9LFxuICBcInRleHQveG1sXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ4bWxcIl1cbiAgfSxcbiAgXCJ0ZXh0L3htbC1leHRlcm5hbC1wYXJzZWQtZW50aXR5XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInRleHQveWFtbFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wieWFtbFwiLFwieW1sXCJdXG4gIH0sXG4gIFwidmlkZW8vMWQtaW50ZXJsZWF2ZWQtcGFyaXR5ZmVjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvLzNncHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCIzZ3BcIixcIjNncHBcIl1cbiAgfSxcbiAgXCJ2aWRlby8zZ3BwLXR0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvLzNncHAyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiM2cyXCJdXG4gIH0sXG4gIFwidmlkZW8vYXYxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2JtcGVnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2J0NjU2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2NlbGJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vZHZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vZW5jYXBydHBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vZmZ2MVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby9mbGV4ZmVjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2gyNjFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJoMjYxXCJdXG4gIH0sXG4gIFwidmlkZW8vaDI2M1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImgyNjNcIl1cbiAgfSxcbiAgXCJ2aWRlby9oMjYzLTE5OThcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vaDI2My0yMDAwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2gyNjRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJoMjY0XCJdXG4gIH0sXG4gIFwidmlkZW8vaDI2NC1yY2RvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2gyNjQtc3ZjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2gyNjVcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vaXNvLnNlZ21lbnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtNHNcIl1cbiAgfSxcbiAgXCJ2aWRlby9qcGVnXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wianBndlwiXVxuICB9LFxuICBcInZpZGVvL2pwZWcyMDAwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL2pwbVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wianBtXCIsXCJqcGdtXCJdXG4gIH0sXG4gIFwidmlkZW8vbWoyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wibWoyXCIsXCJtanAyXCJdXG4gIH0sXG4gIFwidmlkZW8vbXAxc1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby9tcDJwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL21wMnRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ0c1wiXVxuICB9LFxuICBcInZpZGVvL21wNFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1wNFwiLFwibXA0dlwiLFwibXBnNFwiXVxuICB9LFxuICBcInZpZGVvL21wNHYtZXNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vbXBlZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm1wZWdcIixcIm1wZ1wiLFwibXBlXCIsXCJtMXZcIixcIm0ydlwiXVxuICB9LFxuICBcInZpZGVvL21wZWc0LWdlbmVyaWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vbXB2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL252XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL29nZ1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIm9ndlwiXVxuICB9LFxuICBcInZpZGVvL3Bhcml0eWZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby9wb2ludGVyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3F1aWNrdGltZVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInF0XCIsXCJtb3ZcIl1cbiAgfSxcbiAgXCJ2aWRlby9yYXB0b3JmZWNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vcmF3XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3J0cC1lbmMtYWVzY20xMjhcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vcnRwbG9vcGJhY2tcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vcnR4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3NjaXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vc21wdGUyOTFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vc21wdGUyOTJtXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3VscGZlY1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby92YzFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdmMyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5jY3R2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5kZWNlLmhkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXZoXCIsXCJ1dnZoXCJdXG4gIH0sXG4gIFwidmlkZW8vdm5kLmRlY2UubW9iaWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXZtXCIsXCJ1dnZtXCJdXG4gIH0sXG4gIFwidmlkZW8vdm5kLmRlY2UubXA0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5kZWNlLnBkXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widXZwXCIsXCJ1dnZwXCJdXG4gIH0sXG4gIFwidmlkZW8vdm5kLmRlY2Uuc2RcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1dnNcIixcInV2dnNcIl1cbiAgfSxcbiAgXCJ2aWRlby92bmQuZGVjZS52aWRlb1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInV2dlwiLFwidXZ2dlwiXVxuICB9LFxuICBcInZpZGVvL3ZuZC5kaXJlY3R2Lm1wZWdcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLmRpcmVjdHYubXBlZy10dHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLmRsbmEubXBlZy10dHNcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLmR2Yi5maWxlXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZHZiXCJdXG4gIH0sXG4gIFwidmlkZW8vdm5kLmZ2dFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZ2dFwiXVxuICB9LFxuICBcInZpZGVvL3ZuZC5obnMudmlkZW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLmlwdHZmb3J1bS4xZHBhcml0eWZlYy0xMDEwXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5pcHR2Zm9ydW0uMWRwYXJpdHlmZWMtMjAwNVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby92bmQuaXB0dmZvcnVtLjJkcGFyaXR5ZmVjLTEwMTBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLmlwdHZmb3J1bS4yZHBhcml0eWZlYy0yMDA1XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5pcHR2Zm9ydW0udHRzYXZjXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5pcHR2Zm9ydW0udHRzbXBlZzJcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLm1vdG9yb2xhLnZpZGVvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5tb3Rvcm9sYS52aWRlb3BcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLm1wZWd1cmxcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJteHVcIixcIm00dVwiXVxuICB9LFxuICBcInZpZGVvL3ZuZC5tcy1wbGF5cmVhZHkubWVkaWEucHl2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wicHl2XCJdXG4gIH0sXG4gIFwidmlkZW8vdm5kLm5va2lhLmludGVybGVhdmVkLW11bHRpbWVkaWFcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLm5va2lhLm1wNHZyXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5ub2tpYS52aWRlb3ZvaXBcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLm9iamVjdHZpZGVvXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5yYWRnYW1ldHRvb2xzLmJpbmtcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLnJhZGdhbWV0dG9vbHMuc21hY2tlclwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby92bmQuc2VhbGVkLm1wZWcxXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZuZC5zZWFsZWQubXBlZzRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLnNlYWxlZC5zd2ZcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vdm5kLnNlYWxlZG1lZGlhLnNvZnRzZWFsLm1vdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby92bmQudXZ2dS5tcDRcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ1dnVcIixcInV2dnVcIl1cbiAgfSxcbiAgXCJ2aWRlby92bmQudml2b1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcInZpdlwiXVxuICB9LFxuICBcInZpZGVvL3ZuZC55b3V0dWJlLnl0XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImlhbmFcIlxuICB9LFxuICBcInZpZGVvL3ZwOFwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJpYW5hXCJcbiAgfSxcbiAgXCJ2aWRlby92cDlcIjoge1xuICAgIFwic291cmNlXCI6IFwiaWFuYVwiXG4gIH0sXG4gIFwidmlkZW8vd2VibVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid2VibVwiXVxuICB9LFxuICBcInZpZGVvL3gtZjR2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJmNHZcIl1cbiAgfSxcbiAgXCJ2aWRlby94LWZsaVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiZmxpXCJdXG4gIH0sXG4gIFwidmlkZW8veC1mbHZcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJjb21wcmVzc2libGVcIjogZmFsc2UsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImZsdlwiXVxuICB9LFxuICBcInZpZGVvL3gtbTR2XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtNHZcIl1cbiAgfSxcbiAgXCJ2aWRlby94LW1hdHJvc2thXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiY29tcHJlc3NpYmxlXCI6IGZhbHNlLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJta3ZcIixcIm1rM2RcIixcIm1rc1wiXVxuICB9LFxuICBcInZpZGVvL3gtbW5nXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtbmdcIl1cbiAgfSxcbiAgXCJ2aWRlby94LW1zLWFzZlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiYXNmXCIsXCJhc3hcIl1cbiAgfSxcbiAgXCJ2aWRlby94LW1zLXZvYlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1widm9iXCJdXG4gIH0sXG4gIFwidmlkZW8veC1tcy13bVwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid21cIl1cbiAgfSxcbiAgXCJ2aWRlby94LW1zLXdtdlwiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImNvbXByZXNzaWJsZVwiOiBmYWxzZSxcbiAgICBcImV4dGVuc2lvbnNcIjogW1wid212XCJdXG4gIH0sXG4gIFwidmlkZW8veC1tcy13bXhcIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcIndteFwiXVxuICB9LFxuICBcInZpZGVvL3gtbXMtd3Z4XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJ3dnhcIl1cbiAgfSxcbiAgXCJ2aWRlby94LW1zdmlkZW9cIjoge1xuICAgIFwic291cmNlXCI6IFwiYXBhY2hlXCIsXG4gICAgXCJleHRlbnNpb25zXCI6IFtcImF2aVwiXVxuICB9LFxuICBcInZpZGVvL3gtc2dpLW1vdmllXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJtb3ZpZVwiXVxuICB9LFxuICBcInZpZGVvL3gtc212XCI6IHtcbiAgICBcInNvdXJjZVwiOiBcImFwYWNoZVwiLFxuICAgIFwiZXh0ZW5zaW9uc1wiOiBbXCJzbXZcIl1cbiAgfSxcbiAgXCJ4LWNvbmZlcmVuY2UveC1jb29sdGFsa1wiOiB7XG4gICAgXCJzb3VyY2VcIjogXCJhcGFjaGVcIixcbiAgICBcImV4dGVuc2lvbnNcIjogW1wiaWNlXCJdXG4gIH0sXG4gIFwieC1zaGFkZXIveC1mcmFnbWVudFwiOiB7XG4gICAgXCJjb21wcmVzc2libGVcIjogdHJ1ZVxuICB9LFxuICBcIngtc2hhZGVyL3gtdmVydGV4XCI6IHtcbiAgICBcImNvbXByZXNzaWJsZVwiOiB0cnVlXG4gIH1cbn1gKTtcbiJdfQ==