self.on("click",function(a,b){"use strict";"upload-link"===b&&self.postMessage({main_op:"do_upload",url:a.href,handleResult:"preview"}),"upload-image"===b&&self.postMessage({main_op:"do_upload",url:a.src,handleResult:"image_preview"}),"upload-page"===b&&self.postMessage({main_op:"do_upload",url:a.ownerDocument.URL,handleResult:"preview"}),"export"===b&&self.postMessage({main_op:"do_upload",url:a.ownerDocument.URL,handleResult:"export"})});