$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#btnCancel").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const endNovaImg = $("#endImgNova").val();
    const novoItem = $('<li style="display: none"> </li>');
    $(`<img src="${endNovaImg}">`).appendTo(novoItem);
    $(`<div class="overlayImg">
      <a href="${endNovaImg}" target= "_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
      </a>
    </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(5000);
    $("#endImgNova").val("")
  });
});
