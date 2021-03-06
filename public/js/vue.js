new Vue({
  el: "#jumbotron",
  data: {
    header: `Climate Warnings.
        For the Areas You Want to See.`,
    description:
      "The global climate system will continue to change for centuries because of both past and future emissions of greenhouse gases. Heat waves, floods and other impacts on ecosystems, human health and economy are likely to become more severe in the coming decades.This app is designed to help you understand what areas are at the highest risk."
  }
});

new Vue({
  el: "#forms",
  data: {},
  methods: {
    sayHi: function() {
      alert("hello");
    }
  }
});

new Vue({
  el: "#sign-in-form",
  data: {
    user: {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit: function() {
      axios.get("/main/loggedin").then(function() {
        window.location.href = "/main/loggedin";
      });
      // .post("/signin", this.user)
      // .then(function(response) {
      //   console.log(response);
      //   axios
      //     .get("", {
      //       headers: { Authorization: "Bearer " + response.data.token }
      //     })
      //     .then(function(response) {
      //       //window.location.href = "/main/loggedin";
      //     });
      //   console.log(response);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    }
  }
});

new Vue({
  el: "#sign-up-form",
  data: {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    },
    verifyPassword: null,
    errorMessage: "",
    passVerified: false
  },
  methods: {
    onSubmit: function() {
      if (this.user.password !== this.verifyPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }
      this.errorMessage = "";
      axios
        .post("/signup", this.user)
        .then(function(response) {
          console.log("Bearer " + response.data.token);
          axios
            .get("/main", {
              headers: { Authorization: "Bearer " + response.data.token }
            })
            .then(function(response) {
              window.location.href = response.data.redirectUrl;
            });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});

new Vue({
  el: "#sign-in-modal",
  data: {
    user: {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit: function() {
      axios.get("/main/loggedin").then(function() {
        window.location.href = "/main/loggedin";
      });
    }
  }
});

new Vue({
  el: "#sign-up-modal",
  data: {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    },
    verifyPassword: null,
    errorMessage: "",
    passVerified: false
  },
  methods: {
    onSubmit: function() {
      if (this.user.password !== this.verifyPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }
      this.errorMessage = "";
      axios
        .post("/signup", this.user)
        .then(function(response) {
          console.log("Bearer " + response.data.token);
          axios
            .get("/main", {
              headers: { Authorization: "Bearer " + response.data.token }
            })
            .then(function(response) {
              window.location.href = response.data.redirectUrl;
            });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
