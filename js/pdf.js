function storeName() {
  var content = document.getElementById("suggestedSearch").textContent;
  Cookies.set('pdfName', content, {expires: 20});
  var content1 = Cookies.get('pdfName');
  console.log(content1);
};
function createPdf() {
  var content = Cookies.get('pdfName');
  document.getElementById("heading").innerHTML = content+" PDF";
  content = content.replace(/ +/g, "");
  const url = content+".pdf";
  let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

  const scale = 1.5,
    canvas = document.querySelector("#pdfrender"),
    ctx = canvas.getContext("2d");

  // Render the page
  const renderPage = (num) => {
    pageIsRendering = true;

    // Get page
    pdfDoc.getPage(num).then((page) => {
      // Set scale
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderCtx = {
        canvasContext: ctx,
        viewport,
      };

      page.render(renderCtx).promise.then(() => {
        pageIsRendering = false;

        if (pageNumIsPending !== null) {
          renderPage(pageNumIsPending);
          pageNumIsPending = null;
        }
      });

      // Output current page
      document.querySelector("#page-num").textContent = num;
    });
  };

  // Check for pages rendering
  const queueRenderPage = (num) => {
    if (pageIsRendering) {
      pageNumIsPending = num;
    } else {
      renderPage(num);
    }
  };

  // Show Prev Page
  const showPrevPage = () => {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  };

  // Show Next Page
  const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  };

  // Get Document
  pdfjsLib
    .getDocument(url)
    .promise.then((pdfDoc_) => {
      pdfDoc = pdfDoc_;

      document.querySelector("#page-count").textContent = pdfDoc.numPages;

      renderPage(pageNum);
    })
    .catch((err) => {
      // Display error
      const div = document.createElement("div");
      div.className = "error";
      div.appendChild(document.createTextNode(err.message));
      document.querySelector("body").insertBefore(div, canvas);
      // Remove top bar
      document.querySelector(".top-bar").style.display = "none";
    });

  // Button Events
  document.querySelector("#prev-page").addEventListener("click", showPrevPage);
  document.querySelector("#next-page").addEventListener("click", showNextPage);
};
