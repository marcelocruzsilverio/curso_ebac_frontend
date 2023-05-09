$(document).ready(function () {
  $("#phone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00.000-000");

  $("form").validate({
    rules: {
      fullname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      fulladdress: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    errorElement: "label",
    errorClass: "invalid-feedback",
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    messages: {
      fullname: "Por favor, insira o seu nome.",
      phone: "Por favor, insira o seu telefone.",
      email: "Por favor, insira o seu email.",
      cpf: "Por favor, insira o seu cpf.",
      fulladdress: "Por favor, insira o seu endereço completo.",
      cep: "Por favor, insira o seu cep.",
    },
    submitHandler: function (form) {},
    invalidHandler: function (event, validator) {
      let wrongFields = validator.numberOfInvalids();
      if (wrongFields) {
        alert(`Existem ${wrongFields} campos incorretos`);
      }
    },
  });
});
