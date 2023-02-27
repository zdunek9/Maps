import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

function GetPageToPDF({ page }) {
  const downloadFile = () => {
    const input = document.getElementById(page);
    html2canvas(input, {
      useCORS: true,
      allowTaint: false,
      scrollX: -window.scrollX,
      scale: 1,
      ignoreElements: (node) => {
        return node.nodeName === "IFRAME";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save(`Route_map`);
    });
  };
  return <button onClick={() => downloadFile()}>Download</button>;
}

export default GetPageToPDF;
