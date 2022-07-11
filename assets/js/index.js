"use strict";

document
  .querySelector("#add_user")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(this).entries());
      console.log(formData);
      await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("New data inserted");
    } catch (err) {
      console.error(err);
    }
  });

document
  .querySelector("#update_user")
  ?.addEventListener("submit", async function (e) {
    try {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(this).entries());
      console.log(formData);
      await fetch(`/api/users/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Data Updated");
    } catch (err) {
      console.error(err);
    }
  });

// document.querySelector(".delete")?.addEventListener("click", async function () {
//   try {
//     console.log("OK");
//     const id = await window.location.hash.slice(1);
//     console.log(id);

//     if (!confirm("Are you sure want to delete this user ?"))
//       return (window.location.href = "http://localhost:3000/");

//     await fetch(`/api/users/${id}`, {
//       method: "DELETE",
//     });

//     window.location.href = "http://localhost:3000/";
//   } catch (err) {
//     console.error(err);
//   }
// });

document
  .querySelector(".btn-modify-data")
  ?.addEventListener("click", async function (e) {
    const btn = e.target.closest(".delete");
    if (!btn) return;

    try {
      if (!confirm("Are you sure want to delete this user ?")) return;

      const id = btn.dataset.id;
      console.log(id);

      await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  });
