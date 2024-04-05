const templateOrder = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Happyhomes Purchase Order</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
      rel="stylesheet"
    />

    <style>
      .container {
        background-color: #fff;
        padding-top: 2rem;
        min-height: 100vh;
      }
      .header {
        display: flex;
        align-items: start;
        justify-content: space-between;
      }

      .body {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
      }

      .header-purchase-order {
        border: 3px solid #d74c58;
        border-radius: 2.5rem;
        width: 45%;
        margin-bottom: 1.5rem;
      }

      .header-purchase-order-info {
        text-align: right;
        width: 100%;
      }

      .body-text {
        font-size: 0.75rem;
        color: #09101d;
        font-weight: 400;
        line-height: 1.125rem;
      }

      .header-purchase-order-info-data {
        width: 100%;
        text-align: right;
      }

      .buyer-info {
        border-bottom: 2px solid #323843;
        padding-bottom: 0.5rem;
      }

      .order-info {
        border-bottom: 2px solid #323843;
        padding-bottom: 0.5rem;
      }

      .body-container {
        width: 60%;
        word-break: break-word;
        padding-right: 2rem;
      }

      .order-container {
        width: 40%;
        word-break: break-word;
      }

      .footer-doc {
        height: 0.5rem;
        background: #f15858;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }

      body {
        font-family: "Nunito", sans-serif;
        display: flex;
        flex-direction: column;
        min-height: 297mm;
      }

      .page-break {
        page-break-after: always;
      }

      @media print {
        .footer-doc {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #f15858;
          height: 0.5rem;
        }

        .page-break {
          page-break-after: always;
        }

        body {
          position: relative;
          padding-bottom: 1mm;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div style="padding-left: 2rem; padding-right: 2rem">
        <!-- HEADER PURCHASE ORDER DOC -->
        <div style="display: flex; justify-content: end">
          <div class="header-purchase-order"></div>
        </div>

        <div class="header">
          <img
            style="width: 10rem; height: 5rem"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzY3MTdfNjY4NzIpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNi45MTYgMC44NjU0MDVDMzYuNTYyOCAwLjkxMDIyOSAzNS45MTIzIDEuMTM5OTUgMjcuMjc3MyA0LjI0NDA4QzIzLjEyNjQgNS43MzE1NyAxNy4yNDYzIDcuODQzOCAxMy4xMTUxIDkuMzI3NzVMMTMuMDk0NyA5LjMzNTEzTDEzLjA4NjEgOS4zMzgxOUwxMy4wNzIzIDkuMzQzMTJMMTMuMDcxMiA5LjM0MzU0TDEzLjA2NzMgOS4zNDQ5MkwxMS4xMjMgMTAuMDQzM0M3LjExMzkyIDExLjQ4MzMgMy42MTUwNiAxMi43NTUyIDMuMzQ1OTEgMTIuODcyOUMxLjc0MjI3IDEzLjU3MzMgMC43MTA1NDggMTQuNzI3NSAwLjE3Nzg2NyAxNi40NDIxTDAuMDIwODY2MiAxNi45MzUyTDAuMDA0MDQ0NzggMzAuNzQ2OUMtMC4wMDcxNjk1NCA0MC42Njk5IDAuMDA0MDQ0NzggNDQuNjgxOCAwLjA0ODkwMjEgNDQuOTk1NkMwLjMyOTI2IDQ2Ljk0NTUgMS44NDMxOSA0OC43NjA5IDMuNzIxNTkgNDkuMzk0MUMzLjc3NTQ5IDQ5LjQxMjIgMy44MjIzNCA0OS40MjkzIDMuODY2MzIgNDkuNDQ1M0gzLjg2NjMzSDMuODY2MzdIMy44NjY0MUMzLjkwMDEzIDQ5LjQ1NzYgMy45MzIxNyA0OS40NjkyIDMuOTY0NCA0OS40ODAzQzQuNTc2OTQgNDkuNjkwOSA1LjI2MjIgNDkuNjkwMiAxOC45NTcyIDQ5LjY3NjlMMjEuNzQ4NyA0OS42NzQyTDM4LjU0MjEgNDkuNjU3M0wzOS4wMTg3IDQ5LjUwNjFDMzkuOTk5OSA0OS4xOTc5IDQwLjY4OTcgNDguODA1NyA0MS4zMzQ0IDQ4LjE3ODJDNDIuMzI2OSA0Ny4yMjU2IDQyLjkxIDQ2LjA3NyA0My4wNTU5IDQ0Ljc5MzhDNDMuMTAwNyA0NC40NDA5IDQzLjExMTkgMzguMTk4OSA0My4xMDA3IDI0LjkxOTZMNDMuMDgzOSA1LjU2MDgyTDQyLjk1NDkgNS4wOTU3NUM0Mi42OTcgNC4xMjY0MiA0Mi4yODIgMy4zODEyIDQxLjYyMDQgMi42ODA4MUM0MC4zODEyIDEuMzY0MDggMzguNTMwOSAwLjY1MjQ4NiAzNi45MTYgMC44NjU0MDVaTTMxLjc1NzQgNy40OTk1QzMyLjg2NzcgNy42NTA3OCAzNC4wMTE0IDguMTM4MjUgMzQuODQ3IDguODA1MDJDMzUuMzk2NCA5LjI0NzY3IDM2LjIyMDcgMTAuMTgzNCAzNi4wNTgxIDEwLjE4MzRDMzYuMDMwMSAxMC4xODM0IDM2LjA1MjQgMTAuMzE3OSAzNi4xMDg2IDEwLjQ4NkMzNi40NTA2IDExLjUwMDEgMzYuMzc3NyAxMy4xNjQyIDM1LjkxMjMgMTQuNjkzOUMzNS41NTkxIDE1Ljg3MDYgMzQuOTA4NyAxNy4zMTYxIDM0LjI0MTMgMTguNDAzMkMzMy41NzQxIDE5LjQ3OSAzMS45ODE3IDIxLjYyNSAzMC45MDUxIDIyLjg5MTNDMjkuNjMyMyAyNC4zOTI5IDI3Ljc5ODggMjYuMDQ1OCAyNi40MDI2IDI2Ljk1MzVDMjUuODY5OSAyNy4yOTU0IDI0Ljg4ODcgMjcuODMzMiAyNC43ODc3IDI3LjgzMzJDMjQuNzM3MiAyNy44MzMyIDI0LjcyMDQgMjUuOTExMyAyNC43MjA0IDE5LjkxNkMyNC43MjA0IDEyLjI5MDIgMjQuNzI2IDExLjk3NjQgMjQuODI3IDExLjU3M0MyNS4xODU4IDEwLjE4MzQgMjYuMjUxMiA4LjkzOTQ5IDI3LjcyMDIgOC4yMDU0OUMyOC44OTIxIDcuNjIyNzYgMzAuNTUxOSA3LjMzMTQgMzEuNzU3NCA3LjQ5OTVaTTEzLjMzNzkgMTMuOTkzNUMxNC42NzggMTQuMzY4OSAxNS45MjgzIDE1LjM2NjMgMTYuNTA1OSAxNi41MTQ5QzE2LjUzMDQgMTYuNTYzNSAxNi41NTMzIDE2LjYwNzggMTYuNTc0OCAxNi42NDk0QzE2LjYyMzkgMTYuNzQ0MyAxNi42NjU0IDE2LjgyNDYgMTYuNzAwNyAxNi45MDc2QzE2Ljg5NiAxNy4zNjc3IDE2Ljg5ODEgMTcuOTA5OCAxNi45MTE3IDIxLjQ1NjdMMTYuOTE1MiAyMi4zODEzQzE2LjkyMDkgMjUuMDcwOCAxNi45MTUyIDI3LjI3MjkgMTYuOTA0IDI3LjI3MjlDMTYuODUzNiAyNy4yNzI5IDE2LjIzNjggMjYuODM1OSAxNS45Mzk2IDI2LjU4OTNDMTUuNzc3IDI2LjQ1NDggMTUuNDAxMyAyNi4xNDExIDE1LjA5ODYgMjUuODgzNEMxNC4xMTcyIDI1LjA1OTYgMTMuNDM4OCAyNC43NTcxIDEyLjQwNzEgMjQuNzEyM0MxMS4wNDQ1IDI0LjY0NSA5LjkzNDMzIDI1LjE2MDYgOS4yNTU4NyAyNi4xNzQ3QzguODEyOSAyNi44NDE1IDguNjIyMjYgMjcuNTQxOCA4LjczNDQgMjguMTQ3QzguODQ2NTUgMjguNzI5OCA5LjAyNTk3IDI5LjAxNTQgOS44Mjc3OSAyOS44MTY4QzExLjcyODcgMzEuNzIxOCAxMy44NzYxIDMzLjAzODUgMTYuNDM4NyAzMy44NjIyTDE2LjkzMjEgMzQuMDI0NkwxNi45MTUyIDM2LjU0NkMxNi44OTI4IDM4Ljc4NzMgMTYuODgxNiAzOS4xMDExIDE2Ljc5MTkgMzkuMzc1NkMxNi4xNDE0IDQxLjM2NDcgMTQuMDUgNDIuNzAzOSAxMS41OTk3IDQyLjY5MjdDMTAuMjQyNyA0Mi42OTI3IDkuMDcwODIgNDIuMjI3NiA4LjA2MTUzIDQxLjI5NzVDNy40OTUyMSA0MC43NzA4IDcuMDI0MjEgNDAuMDE5OSA2Ljc5NDMyIDM5LjI4NkM2LjY5OSAzOC45NzIzIDYuNjkzMzkgMzguNDczNSA2LjY5MzM5IDI4LjIyNTVWMTcuNDk1NEw2Ljg1MDM5IDE3LjA0NzJDNy4wNDEwMyAxNi41MDM3IDcuMjA5MjQgMTYuMjA2NyA3LjU3MzcxIDE1Ljc0NzJDOC4zMDI2NCAxNC44NDUyIDkuNTI1MDEgMTQuMTcyOCAxMC45MSAxMy45MDk1QzExLjUzOCAxMy43OTE4IDEyLjc3NzEgMTMuODMxMSAxMy4zMzc5IDEzLjk5MzVaTTM2Ljg2ODQgMzUuNzgyM1YzNS43ODI3QzM2Ljg1ODEgNDEuODkyNyAzNi44NTcxIDQyLjUxNjUgMzYuNjMxOCA0My4wNDQ3QzM2LjYwNjIgNDMuMTA0NiAzNi41Nzc3IDQzLjE2MzMgMzYuNTQ2IDQzLjIyODdMMzYuNTQ1OSA0My4yMjlDMzYuNTIzMiA0My4yNzU2IDM2LjQ5OSA0My4zMjU3IDM2LjQ3MyA0My4zODE5QzM2LjIwOTQgNDMuOTQ3OCAzNS44ODQyIDQ0LjQwNzIgMzUuNDE4OSA0NC44NjY3QzMzLjY2MzkgNDYuNjA5MyAzMC42MDc5IDQ3LjIzNjggMjguMzI1OCA0Ni4zMjM1QzI2LjUwOTEgNDUuNTk1MSAyNS4wOTA0IDQ0LjAxNTEgMjQuNzc2NCA0Mi4zNzM0QzI0LjczNzIgNDIuMTM4IDI0LjcyMDQgNDAuODc3MyAyNC43MzE3IDM4LjE0ODVMMjQuNzQ4NCAzNC4yNTQ0TDI1LjM0MjggMzQuMTA4N0MyNi40NDc0IDMzLjgyODUgMjcuNzcwNyAzMy4zNDExIDI4LjcyOTYgMzIuODY0OEMzMC4xMjU3IDMyLjE2NDQgMzEuOTE0NCAzMC45MzE3IDMzLjQzOTYgMjkuNjIwNkMzNC4xOTA5IDI4Ljk3NjIgMzUuODExMyAyNy4zNjgyIDM2LjQxMTMgMjYuNjY3OEMzNi42MyAyNi40MTU3IDM2LjgyMDcgMjYuMjA4NCAzNi44NDg3IDI2LjIwODRDMzYuODcxMSAyNi4yMDg0IDM2Ljg4MjMgMjkuODIyMyAzNi44NzExIDM0LjIzMkwzNi44Njg0IDM1Ljc4MjNaTTUwLjc5MzcgMTEuNzM1NEM0OS43Mzk2IDExLjg0NzUgNDguMDUxOCAxMi4zMjM4IDQ3LjQ3OTkgMTIuNjY1NkM0Ny4wNjUgMTIuOTE3NyA0Ni44OTY4IDEzLjI0ODMgNDYuODk2OCAxMy44MjU0QzQ2LjkwMjMgMTQuMzM1MyA0Ny4wNDI2IDE0LjY0OSA0Ny4zNjIxIDE0Ljg2MkM0Ny43MDk4IDE1LjA5MTcgNDguMDAxMyAxNS4wOTczIDQ4LjU4NDQgMTQuODlDNDkuOTYzOSAxNC4zOTY5IDUwLjU3NSAxNC4yNzM2IDUxLjU3MzEgMTQuMjczNkM1My4wOTgyIDE0LjI3MzYgNTMuNjE5OCAxNC43MTYzIDUzLjY5MjcgMTYuMDc3OUw1My43MjYyIDE2LjYyNjlINTIuNTgyNEM0OS4yOTY2IDE2LjYyNjkgNDcuMzUwOSAxNy4xMzY5IDQ2LjYyMiAxOC4xODQ2QzQ2LjE5NTkgMTguODAwOSA0Ni4wMjc3IDE5Ljg3MTIgNDYuMjE4MiAyMC43MzQxQzQ2LjUzMjIgMjIuMTQ2MSA0Ny42ODczIDIzLjE5OTQgNDkuMzEzNCAyMy41NTI0QzQ5LjkzMDIgMjMuNjg2OCA1MS4wOTA5IDIzLjY4NjggNTEuNTc4NyAyMy41NTI0QzUyLjQxNDIgMjMuMzIyNyA1My4yNjA5IDIyLjY4OTYgNTMuNTQ2OSAyMi4wNzg4QzUzLjYxOTggMjEuOTE2MyA1My42OTgyIDIxLjc4NzQgNTMuNzE1IDIxLjc4MTlDNTMuNzMxOSAyMS43ODE5IDUzLjc2NTYgMjEuOTI3NiA1My43ODIzIDIyLjEwMTJDNTMuODY2NCAyMi44MzUyIDU0LjA3OTYgMjMuMTkzOSA1NC41ODk4IDIzLjQ0MDRDNTQuODc1OCAyMy41ODA1IDU0Ljk3NjcgMjMuNjAyOSA1NS40MTk3IDIzLjYwMjlDNTYuMDI1MiAyMy42MDI5IDU2LjM0NDggMjMuNDc0IDU2LjY1MzIgMjMuMTA5OEw1Ni42NTYxIDIzLjEwNjRDNTYuNzEzIDIzLjA0MDMgNTYuNzYxIDIyLjk4NDQgNTYuODAxNCAyMi45MjM1QzU3LjAyMjggMjIuNTkxMiA1Ny4wMiAyMi4xMDk4IDU3LjAwMTkgMTguOTk4NUw1Ny4wMDA5IDE4LjgyOUM1Ni45ODQgMTUuNDcyOCA1Ni45Nzg0IDE1LjM0OTQgNTYuODYwNyAxNC45MDEyQzU2LjM2MTcgMTMuMDA3MyA1NS4xMjggMTIuMDI2OCA1Mi45MjQ0IDExLjc1MjNDNTIuNDgxNCAxMS43MDE4IDUxLjIyNTQgMTEuNjkwNiA1MC43OTM3IDExLjczNTRaTTUzLjcwOTQgMTguNzY3NEM1My43MDk0IDE5LjIwNDQgNTMuNTg2MSAxOS43OTI4IDUzLjQ0MDMgMjAuMDg0MUM1My4yMjcyIDIwLjQ5MzEgNTIuODM0OCAyMC44Njg1IDUyLjM3NDkgMjEuMDkyNkM1MS45NTQ0IDIxLjMgNTEuOTM3NiAyMS4zMDU2IDUxLjMwNCAyMS4zMDU2QzUwLjU1ODIgMjEuMzA1NiA1MC4yODkxIDIxLjIxNiA0OS45MzU4IDIwLjg2MjlDNDkuNjYxMSAyMC41OTQgNDkuNTU0NiAyMC4zNzU1IDQ5LjUyMDkgMjAuMDExM0M0OS40NzYgMTkuNTk2NiA0OS41ODI2IDE5LjI2MDUgNDkuODM0OSAxOS4wMTk1QzUwLjE0MzMgMTguNzE3IDUwLjQ5MDkgMTguNTg4MSA1MS4zNTQ1IDE4LjQ1MzZDNTEuNDMyOSAxOC40NDI0IDUxLjk5MzcgMTguNDMxMiA1Mi42MDQ4IDE4LjQyNTVMNTMuNzA5NCAxOC40MlYxOC43Njc0Wk02NC42ODI3IDEyLjIzOThDNjUuMTcwNCAxMS45ODc2IDY1LjQ1MDggMTEuODgxMSA2NS45MzMgMTEuNzgwM0M2Ni40NzEzIDExLjY2MjYgNjcuNzQ0MSAxMS43MDc0IDY4LjI3NjggMTEuODU4N0M3MC4zMzQ3IDEyLjQ1MjYgNzEuNTkwNyAxNC4wOTQzIDcxLjg4MjIgMTYuNTc2NUM3MS45NzIgMTcuMzQ5OCA3MS45MTU5IDE4Ljc4OTggNzEuNzcwMSAxOS40NTY2QzcxLjI0MyAyMS45MDUxIDY5Ljc2MjggMjMuMzY3NSA2Ny41MzExIDIzLjYzMDlDNjUuOTQ0MiAyMy44MjE0IDY0LjM3OTkgMjMuMjU1NSA2My41NjEyIDIyLjIwMjFMNjMuMzI1NyAyMS44OTM5TDYzLjI5NzcgMjQuMjkyMUw2My4yOTc2IDI0LjMwMjhDNjMuMjY5NyAyNi42Njc4IDYzLjI2OTUgMjYuNjg1IDYzLjEzNTEgMjYuOTgxNkM2Mi44NzE2IDI3LjU2NDMgNjIuMzc4MSAyNy44MzMyIDYxLjU2NTEgMjcuODMzMkM2MC45OTMxIDI3LjgzMzIgNjAuNzc0NCAyNy43NzcyIDYwLjQyNjggMjcuNTU4N0M2MC4yMjQ5IDI3LjQyOTggNjAuMTI5NyAyNy4zMTIxIDU5Ljk4MzkgMjcuMDE1MUw1OS43OTMyIDI2LjYyODVMNTkuNzc2MyAyMC4wNzI5QzU5Ljc1OTYgMTMuMzA0MyA1OS43NzA4IDEyLjk2ODEgNTkuOTgzOSAxMi41NDIzQzYwLjI0NzMgMTIuMDI2OCA2MC43OTEyIDExLjc1MjMgNjEuNTM3IDExLjc1MjNDNjIuNTM1MSAxMS43NTIzIDYzLjEyMzkgMTIuMjU2NSA2My4yMTkyIDEzLjE5MjNDNjMuMjQxNiAxMy4zODg0IDYzLjI3NTIgMTMuNTQ1MyA2My4yOTIxIDEzLjU0NTNDNjMuMzE0NCAxMy41NDUzIDYzLjM3NjIgMTMuNDU1NiA2My40Mzc5IDEzLjM0MzVDNjMuNjAwNCAxMy4wMzU0IDY0LjIzNDEgMTIuNDc1IDY0LjY4MjcgMTIuMjM5OFpNNjguMjcxMiAxNi4yOTA5QzY4LjAwNzcgMTUuMzE1OSA2Ny40MzAxIDE0LjY2NTkgNjYuNjMzOSAxNC40MjVDNjUuNzI1NiAxNC4xNTA0IDY0LjcxNjMgMTQuMzc0NiA2NC4xMjE5IDE0Ljk3OTdDNjMuODMwMyAxNS4yNzEgNjMuNTI3NiAxNS44NDgyIDYzLjQwOTggMTYuMzE4OEM2My4yMDggMTcuMTQ4MSA2My4yNDE2IDE4LjUyMDggNjMuNDg4MyAxOS4yODg1QzYzLjg5MiAyMC41NTQ4IDY0Ljk0NjIgMjEuMjMyNyA2Ni4yMzAyIDIxLjA1MzRDNjcuMjQ1MSAyMC45MDc3IDY3Ljk1NzIgMjAuMjA3NCA2OC4yNzEyIDE5LjAzNjNDNjguNDE3IDE4LjUxNTIgNjguNDE3IDE2LjgxMTkgNjguMjcxMiAxNi4yOTA5Wk04MC4zNDM0IDExLjc3NDdDNzkuMjg5MyAxMS45OTg4IDc4LjMxOTMgMTIuNTk4MyA3Ny44MzE1IDEzLjMzOEw3Ny42ODU3IDEzLjU1NjVMNzcuNjE4MyAxMy4xNTNDNzcuNTIzMSAxMi41OTgzIDc3LjM0MzcgMTIuMjY3OCA3Ny4wMTI4IDEyLjA0OTJDNzYuNjcwOCAxMS44MTM5IDc2LjQzNTIgMTEuNzUyMyA3NS45MDI2IDExLjc1MjNDNzUuMTEyIDExLjc1MjMgNzQuNTQgMTIuMDg4NCA3NC4zMDQ2IDEyLjY5MzZDNzQuMjA5MiAxMi45NDAyIDc0LjIwMzcgMTMuMzE1NiA3NC4xODY4IDE5LjU2ODZDNzQuMTcgMjQuNDIwOSA3NC4xODY4IDI2LjI4MTIgNzQuMjMxNyAyNi41NjEzQzc0LjMyNyAyNy4xMDQ4IDc0LjU1MTIgMjcuNDE4NiA3NS4wMTEgMjcuNjQ4M0M3NS4zMzYyIDI3LjgxNjQgNzUuNDE0OCAyNy44MzMyIDc1Ljg4NTggMjcuODMzMkM3Ni41Njk5IDI3LjgzMzIgNzYuOTIzMSAyNy43MjY3IDc3LjIyNTkgMjcuNDE4NkM3Ny42NjMyIDI2Ljk4MTYgNzcuNjY4OSAyNi45NDc5IDc3LjcwODEgMjQuMjQ3Mkw3Ny43MzYxIDIxLjg2NTlMNzcuODY1MSAyMi4wNzMyQzc4LjAzMzMgMjIuMzQ3OCA3OC41NzE2IDIyLjgyOTcgNzguOTU4NSAyMy4wNjVDNzkuNjgxOCAyMy40OTA4IDgwLjc3NTIgMjMuNzMxNyA4MS42ODkyIDIzLjY1ODlDODQuMTIyNyAyMy40NjI4IDg1LjY4MTQgMjEuOTM4OCA4Ni4yMTQxIDE5LjIzMjRDODYuMjg3IDE4Ljg1NyA4Ni4zMDk0IDE4LjQ1MzYgODYuMzA5NCAxNy42NjM1Qzg2LjMwOTQgMTYuMTY3NSA4Ni4xMzU3IDE1LjMyNzEgODUuNjE0MiAxNC4yOTA1Qzg0Ljk5MTggMTMuMDUyMiA4My45NjU3IDEyLjIwNjEgODIuNjcwNCAxMS44NTg3QzgyLjA5ODYgMTEuNzA3NCA4MC44ODE4IDExLjY2MjYgODAuMzQzNCAxMS43NzQ3Wk04MS4xMDYgMTQuNDUzQzgxLjkyNDcgMTQuNzUgODIuNDA2OSAxNS4zMzI3IDgyLjY4MTcgMTYuMzQ2OEM4Mi44MjE4IDE2Ljg1NjcgODIuODIxOCAxOC40NDggODIuNjgxNyAxOS4wMDI3QzgyLjMxNzIgMjAuNDU5NSA4MS4yNDA2IDIxLjIzODQgNzkuODY2OSAyMS4wNDc5Qzc4LjgwNzEgMjAuOTAyMiA3OC4wNTAxIDIwLjEyOSA3Ny43ODEgMTguOTE4NkM3Ny42NDA4IDE4LjI5MTEgNzcuNjU3NyAxNi45MDE1IDc3LjgwOSAxNi4zNDEzQzc3Ljk0OTIgMTUuODIwMSA3OC4xOTAzIDE1LjMzMjcgNzguNDY1MSAxNS4wMTg5Qzc4LjcxMTggMTQuNzMzMSA3OS4zNjIyIDE0LjM5MTMgNzkuNzg4MyAxNC4zMjk3QzgwLjE5NzcgMTQuMjczNiA4MC43NTg0IDE0LjMyNCA4MS4xMDYgMTQuNDUzWk04Ny40NDc4IDEzLjUxMTZDODcuMzAyIDEyLjY4MjMgODcuNjk0NSAxMi4wMzggODguNDczOSAxMS44MzA3Qzg4LjYxNCAxMS43OTE1IDg4Ljg5NDQgMTEuNzU3OSA4OS4wOTYyIDExLjc1NzlDODkuODE0IDExLjc0NjcgOTAuMzEzIDEyLjAwOTkgOTAuNTcwOSAxMi41MzExQzkwLjYzODIgMTIuNjcxMSA5MS4yNzE5IDE0LjI0NTcgOTEuOTg0IDE2LjAyMThDOTIuNjkwNCAxNy44MDM2IDkzLjI3OTIgMTkuMjYwNSA5My4yOTYgMTkuMjYwNUM5My4zMTI5IDE5LjI2MDUgOTMuOTAxNiAxNy44MzE2IDk0LjYwODEgMTYuMDc3OUM5NS45MDkgMTIuODUwNCA5Ni4wMzc5IDEyLjU2NDcgOTYuMzI5NiAxMi4yMzQxQzk2LjYyMTEgMTEuOTAzNSA5Ni45NDA3IDExLjc4NTkgOTcuNTg1NiAxMS43ODAzQzk4LjA2MjEgMTEuNzgwMyA5OC4xNzk5IDExLjc5NzEgOTguMzg3MyAxMS45MDkxQzk4LjgzNTkgMTIuMTUwMSA5OS4xMjc0IDEyLjc1NTIgOTkuMDQ5IDEzLjMwNDNDOTkuMDA0NCAxMy42NDk2IDk4Ljk5ODYgMTMuNjYyNyA5NS45NzA0IDIwLjUyOUw5NS45NzAzIDIwLjUyOTJMOTUuOTE0NiAyMC42NTU2QzkzLjkxMjggMjUuMTgyOSA5My4wNzE4IDI3LjAzMiA5Mi45MDkxIDI3LjI0NDhDOTIuNTYxNSAyNy43MDQzIDkxLjkwNTQgMjcuOTQ1MiA5MS4yMjcgMjcuODYxMkM5MC4zODAzIDI3Ljc1NDggODkuOTQ4NiAyNy4yMjgxIDg5Ljk5OSAyNi4zNTk2QzkwLjAxNTkgMjUuOTg0MiA5MC4wNjYzIDI1Ljg0OTcgOTAuNzI4IDI0LjQwNDFMOTEuNDM0NCAyMi44NTJMODkuNDcxOSAxOC4zNTI3Qzg4LjA4NyAxNS4xNzU4IDg3LjQ4NyAxMy43NTI2IDg3LjQ0NzggMTMuNTExNlpNNTAuODI3MyAzMC4zNjAyQzQ5LjE1MDggMzAuNTc4OCA0Ny44MjE5IDMxLjM0NjMgNDcuMDA4OSAzMi41Njc5QzQ2LjAyMiAzNC4wNTgyIDQ1Ljg1MzggMzYuNTA2OCA0Ni42MTY0IDM4LjMxMTFDNDcuMjI3NiAzOS43NjIyIDQ4LjUzNCA0MC44MTU2IDUwLjIwNSA0MS4yMDIyQzUwLjkwMDIgNDEuMzY0NyA1Mi43Njc0IDQxLjM1MzUgNTMuNDQ1OSA0MS4xNzk5QzU1LjQ4NjkgNDAuNjY0NCA1Ni43ODIyIDM5LjM1ODkgNTcuMjU4OCAzNy4zNDE3QzU3LjM1OTcgMzYuOTEwMyA1Ny4zNzY2IDM2LjY1ODEgNTcuMzc2NiAzNS43ODk3QzU3LjM3MDkgMzQuODQ4MyA1Ny4zNTk3IDM0LjcwMjcgNTcuMjI1MSAzNC4xOTI3QzU2LjgwNDYgMzIuNjM1MSA1NS45NDY3IDMxLjU2NDkgNTQuNTc4NiAzMC45MDkzQzUzLjQ5NjMgMzAuMzg4MiA1Mi4xNTYyIDMwLjE5MjEgNTAuODI3MyAzMC4zNjAyWk01Mi42NjA5IDMyLjg3MDRDNTMuMzAwMSAzMy4xMTY5IDUzLjc5OTEgMzMuNzMzMyA1NC4wMjM0IDM0LjU0MDFDNTQuMTU4IDM1LjAzMzIgNTQuMTkxNyAzNi4yMjEgNTQuMDc5NiAzNi43OTgyQzUzLjgzMjggMzguMTE0OSA1My4wODE0IDM4Ljg4MjUgNTEuOTQzMiAzOC45NjY2QzUwLjc3MTMgMzkuMDU2MyA0OS44Njg2IDM4LjM3MjcgNDkuNTI2NiAzNy4xMjg4QzQ5LjM4MDcgMzYuNjE4OCA0OS4zODA3IDM1LjA3MjQgNDkuNTI2NiAzNC41NjI1QzQ5Ljc5NTcgMzMuNTg3NiA1MC4zNjIgMzIuOTY1NyA1MS4xNjk0IDMyLjc2NEM1MS41MjgyIDMyLjY3NDIgNTIuMjk2NCAzMi43MzAzIDUyLjY2MDkgMzIuODcwNFpNNjIuOTYxMyAzMS43NDk4QzYzLjQ0OTEgMzEuMDQzOCA2NC40NDE2IDMwLjQ3MjMgNjUuNDAwNSAzMC4zMzc4QzY1Ljc3MDYgMzAuMjg3NCA2Ni4zNzYxIDMwLjMwNDIgNjYuODAyMiAzMC4zODI3QzY3LjcxNjIgMzAuNTQ1MSA2OC40OTU2IDMxLjA5OTggNjguOTA0OSAzMS44ODQzQzY5LjAxMTUgMzIuMDkxNiA2OS4xMTIzIDMyLjI1OTcgNjkuMTI5MiAzMi4yNTk3QzY5LjE0NiAzMi4yNTk3IDY5LjIzMDEgMzIuMTQ3NiA2OS4zMTQyIDMyLjAwNzVDNjkuNDA0IDMxLjg3MyA2OS42NjE5IDMxLjU4NzMgNjkuODg2MSAzMS4zNjg3QzcwLjgxNyAzMC41MDU5IDcyLjEzNDcgMzAuMTQxNyA3My41MDI4IDMwLjM3N0M3NC42MDE4IDMwLjU2MTkgNzUuMzE5NiAzMS4wODg2IDc1Ljc1MTIgMzIuMDA3NUM3Ni4yMDU1IDMyLjk4MjUgNzYuMjUwMyAzMy40NjQzIDc2LjI1MDMgMzcuMDg0Qzc2LjI1MDMgNDAuMjYwOSA3Ni4yNDQ3IDQwLjMyODIgNzUuOTQ3NiA0MC43NzY0Qzc1LjU2NjIgNDEuMzUzNSA3NC4zMDQ2IDQxLjQ5MzcgNzMuNjI2MSA0MS4wMzQxQzczLjQ1NzkgNDAuOTIyMSA3My4zMTc4IDQwLjc2NTIgNzMuMjIyNSA0MC41ODAzTDczLjA4MjIgNDAuMzA1N0w3My4wNDg2IDM3LjIxODRDNzMuMDIwNiAzNC43MTk0IDcyLjk5ODEgMzQuMDg2MyA3Mi45MzA5IDMzLjg1NjVDNzIuNjk1MyAzMy4wNzIxIDcyLjM0MjEgMzIuODIgNzEuNDYxOCAzMi44MkM3MC41OTI3IDMyLjgyNTYgNzAuMDA5NiAzMy4yNjI2IDY5LjY3MzEgMzQuMTUzNUM2OS41NjEgMzQuNDYxNyA2OS41NTUzIDM0LjU5MDUgNjkuNTIxNyAzNy4zNTg1TDY5LjUxOTYgMzcuNTcwMkM2OS40OTQ4IDM5Ljk4NTQgNjkuNDkwMiA0MC40NDA1IDY5LjI2NjMgNDAuNzIxMUM2OS4yMTQzIDQwLjc4NjIgNjkuMTUwNiA0MC44NDE5IDY5LjA3MTkgNDAuOTEwNUw2OS4wMzk1IDQwLjkzODlDNjguNzM2NyA0MS4yMDIyIDY4LjM5NDcgNDEuMzA4NyA2Ny44MzM5IDQxLjI5NzVDNjcuMTI3NCA0MS4yOTE5IDY2LjY3ODkgNDEuMDI4NiA2Ni40MjY2IDQwLjQ3MzhDNjYuMjk3NyA0MC4xODgyIDY2LjI5NzYgNDAuMTgyNSA2Ni4yNjk2IDM3LjA4MjJWMzcuMDgyMVYzNy4wNzg0QzY2LjI0MTYgMzQuMDMwMyA2Ni4yMzU5IDMzLjk2MyA2Ni4xMTI2IDMzLjY1NDlDNjUuOTcyMyAzMy4zMDE5IDY1LjcyIDMzLjAzMjkgNjUuNDE3MiAzMi45MDk2QzY1LjE0MjYgMzIuNzkxOSA2NC40MDggMzIuNzkxOSA2NC4wNjU5IDMyLjkwOTZDNjMuNzUxOSAzMy4wMTYxIDYzLjM0ODIgMzMuMzYzNSA2My4xNTc2IDMzLjY4MjhMNjMuMTMyNyAzMy43MjU2QzYzLjA3NiAzMy44MjIzIDYzLjAyOTkgMzMuOTAxMSA2Mi45OTIgMzMuOTgzOUM2Mi44MjQ4IDM0LjM0OTQgNjIuODIgMzQuNzg5MyA2Mi43OTQ0IDM3LjE3NFYzNy4xNzQxTDYyLjc5MzEgMzcuMzAyNUw2Mi43OTE2IDM3LjQyODZDNjIuNzYwOCAzOS45NTY4IDYyLjc1NTMgNDAuNDA1MSA2Mi41NDAyIDQwLjcwMTZDNjIuNDkzOSA0MC43NjU0IDYyLjQzNzggNDAuODIyMyA2Mi4zNjk2IDQwLjg5MTNMNjIuMzYxMyA0MC44OTk2QzYyLjEwMzQgNDEuMTYzIDYxLjcxMDkgNDEuMjk3NSA2MS4xOTUxIDQxLjMwMzFDNjAuNjIzMSA0MS4zMDMxIDYwLjI5NzkgNDEuMTk2NyA1OS45ODM5IDQwLjg5NDFDNTkuOTY3MSA0MC44Nzc3IDU5Ljk1MSA0MC44NjIyIDU5LjkzNTMgNDAuODQ3MkM1OS44Nzg0IDQwLjc5MjUgNTkuODI5NiA0MC43NDU2IDU5Ljc4NzggNDAuNjkzMkM1OS41MzU3IDQwLjM3NyA1OS41Mzc0IDM5Ljg1ODYgNTkuNTUwMyAzNi4yMTY3TDU5LjU1MjEgMzUuN0w1OS41NjkgMzEuMzkxMkw1OS43MDM2IDMxLjEyMjNDNTkuOTcyNyAzMC41NzMxIDYwLjUwNTMgMzAuMzIwOSA2MS4yNzkxIDMwLjM2NThDNjIuMTE0NyAzMC40MTYyIDYyLjYwMjQgMzAuODc1NyA2Mi42Njk4IDMxLjY3MTNDNjIuNjgxIDMxLjg3MyA2Mi43MDkgMzIuMDM1NiA2Mi43MzE0IDMyLjAzNTZDNjIuNzQ4MiAzMi4wMjk5IDYyLjg1NDggMzEuOTAxIDYyLjk2MTMgMzEuNzQ5OFpNODIuNzgyNiAzMC4zNzdDODAuNjkxMSAzMC43MDIgNzguOTkyMSAzMi4yMjA1IDc4LjUwNDMgMzQuMTkyN0M3OC4zNDE3IDM0LjgzMTUgNzguMzEzNyAzNS4xMDYgNzguMzE5MyAzNS44OTYxQzc4LjMyNDkgMzcuNTI2NiA3OC44MDE1IDM4Ljc4MTcgNzkuNzg4MyAzOS43NTY3QzgwLjU4NDYgNDAuNTQ2NyA4MS42NzggNDEuMDU2NSA4My4wMDY5IDQxLjI2MzlDODMuNzkxOSA0MS4zODE1IDg1LjM3MzEgNDEuMzM2OCA4Ni4xNDY5IDQxLjE2ODdDODcuMTUwNiA0MC45NTU3IDg4LjA3NTggNDAuNTA3NSA4OC4zMzkyIDQwLjEwNEM4OC41MzU2IDM5LjgwNzEgODguNjI1MiAzOS4zMzY0IDg4LjUzNTYgMzkuMDM5NEM4OC40NDAyIDM4LjcwODkgODguMTM3NCAzOC4zOTUxIDg3LjgyOSAzOC4zMTExQzg3LjUyNjIgMzguMjI3IDg3LjMzIDM4LjI2MDcgODYuNjc0IDM4LjUxMjhDODUuNzgyNCAzOC44NTQ2IDg1LjI5NDYgMzguOTQ5OCA4NC4zODA3IDM4Ljk0OThDODMuNjQwNCAzOC45NDk4IDgzLjUyODMgMzguOTM4NiA4My4xMjQ3IDM4Ljc5ODVDODIuMTI2NiAzOC40NTExIDgxLjYwNTEgMzcuODIzNSA4MS4zODA4IDM2LjcwMjlMODEuMzQ3MSAzNi41MjM3TDg0Ljc4NDMgMzYuNTA2OEw4NS4xMjEyIDM2LjUwNTRDODcuOTgzMyAzNi40OTI4IDg4LjM2ODYgMzYuNDkxIDg4LjU2MDIgMzYuMjk3N0M4OC41OSAzNi4yNjc4IDg4LjYxNTEgMzYuMjMzIDg4LjY0NDIgMzYuMTkyOUM4OC42NTA4IDM2LjE4MzkgODguNjU3NCAzNi4xNzQ2IDg4LjY2NDQgMzYuMTY1MUM4OC43NzEgMzYuMDI0OSA4OC43ODIyIDM1LjkzNTMgODguNzcxIDM1LjQxOThDODguNzMxOCAzMy4zODYgODcuODY4MyAzMS43Nzc4IDg2LjM3MTEgMzAuOTM3NEM4NS4zODk5IDMwLjM5MzkgODQuMDQ5OCAzMC4xODA5IDgyLjc4MjYgMzAuMzc3Wk04NC44OTA5IDMyLjYxMjZDODUuMjgzMyAzMi44MDMyIDg1LjYzMSAzMy4xNjczIDg1LjgzODQgMzMuNjIxMkM4NS45ODQyIDMzLjkyMzggODYuMTE4OSAzNC40OTUzIDg2LjExODkgMzQuNzkyM0M4Ni4xMTg5IDM0Ljg4NzUgODUuOTY3NSAzNC44OTMxIDgzLjczMDIgMzQuODkzMUg4MS4zNDE2TDgxLjM3NTIgMzQuNjgwMkM4MS41MDQxIDMzLjk1MTggODEuOTA3OSAzMy4yMjM0IDgyLjM5MDEgMzIuODU5MkM4Mi44Mjc0IDMyLjUyODYgODMuMjI1NiAzMi40Mjc4IDgzLjk2MDEgMzIuNDQ0NkM4NC40OTgzIDMyLjQ2MTQgODQuNjE2MSAzMi40NzgyIDg0Ljg5MDkgMzIuNjEyNlpNOTAuNTU0MSAzMi45ODgxQzkwLjg2ODEgMzEuNjIwOSA5Mi4yNzU2IDMwLjYxMjQgOTQuMjI2OCAzMC4zNjAyQzk1LjUyNzcgMzAuMTk3NyA5Ny4wMzYgMzAuMzg4MiA5OC4xMzUgMzAuODU4OUM5OC45NTkyIDMxLjIxNzUgOTkuMjAwMyAzMS40NzUyIDk5LjIwMDMgMzIuMDA3NUM5OS4yMDAzIDMyLjUzNDIgOTguODgwOCAzMy4wMTA2IDk4LjQzMjIgMzMuMTU2MkM5OC4xNTc0IDMzLjI0NTggOTcuOTc4IDMzLjIxMjIgOTcuMzEwOCAzMi45NjU3Qzk2LjQ2NCAzMi42NDYzIDk1Ljg3NTMgMzIuNTIzIDk1LjIwMjQgMzIuNTIzQzk0LjI4MjkgMzIuNTIzIDkzLjczMzMgMzIuNzMwMyA5My40NTg3IDMzLjE3ODVDOTMuMzA3MiAzMy40MjUxIDkzLjMxMjggMzMuODY3OCA5My40ODEgMzQuMTA4OEM5My42OTk4IDM0LjQzOTMgOTMuOTgwMSAzNC41MzQ2IDk1LjU5NDkgMzQuODE0N0M5Ni40MTM2IDM0Ljk1NDggOTcuMjcxNCAzNS4xMzQxIDk3LjUwMTMgMzUuMjEyNUM5OC41NTU2IDM1LjU1OTkgOTkuMjExNiAzNi4xNzYzIDk5LjQ0MTUgMzcuMDQ0OEM5OS41MzY4IDM3LjM5MjIgOTkuNTQyNCAzOC4yNDk0IDk5LjQ1ODMgMzguNjU4NUM5OS4yMTE2IDM5LjgzNTEgOTguMTkxMSA0MC43NTQgOTYuNjgyOCA0MS4xNDYyQzk1LjU5NSA0MS40MzIgOTMuNDgxIDQxLjM4NzIgOTIuMjAyNiA0MS4wNTFDOTAuODkwNiA0MC43MDkyIDkwLjI2MjYgNDAuMjA0OSA5MC4yNzM4IDM5LjQ4NzdDOTAuMjc5MyAzOS4wNDUxIDkwLjQ0NzYgMzguNzM2OSA5MC43OTUyIDM4LjUyOTZDOTEuMTAzNiAzOC4zNTAzIDkxLjQxNzYgMzguMzcyNyA5Mi4wNjI0IDM4LjYxOTJDOTIuOTU0IDM4Ljk2MSA5My42MTU3IDM5LjEwMTEgOTQuNTE4MyAzOS4xMzQ3Qzk1LjQ0MzYgMzkuMTczOSA5NS43ODU2IDM5LjExNzkgOTYuMTcyNCAzOC44NzEzQzk2LjYzMjIgMzguNTggOTYuNzk0OSAzOC4wMjUzIDk2LjUzMTMgMzcuNjMzMUM5Ni4zMDE0IDM3LjI4NTcgOTYuMDQ5MSAzNy4yMDE2IDk0LjQyODcgMzYuOTA0NkM5Mi42OTA1IDM2LjU4NTMgOTIuMjAyNiAzNi40Mzk2IDkxLjY1MzEgMzYuMDY5OEM5MC44Mjg5IDM1LjUyMDcgOTAuNDkyNCAzNC44NTk2IDkwLjQ5MjQgMzMuODE3M0M5MC40OTI0IDMzLjQ5OCA5MC41MjA1IDMzLjEyODEgOTAuNTU0MSAzMi45ODgxWiIgZmlsbD0iI0YxNTg1OCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzM2NzE3XzY2ODcyIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSI0OC44NTM2IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjgyODEyNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
            alt="Embedded Image"
          />

          <div style="width: 50%">
            <h1 style="margin-top: 0.5rem; text-align: right">
              Purchase Order
            </h1>

            <div class="body-text">
              <div style="display: flex">
                <div class="header-purchase-order-info">
                  <span>Nomor Pesanan</span>
                </div>

                <div class="header-purchase-order-info-data">
                  <span>{{orderNo}}</span>
                </div>
              </div>

              <div style="display: flex">
                <div class="header-purchase-order-info">
                  <span>Tanggal Pemesanan</span>
                </div>

                <div class="header-purchase-order-info-data">
                  <span>{{orderDate}}</span>
                </div>
              </div>

              <div style="display: flex">
                <div class="header-purchase-order-info">
                  <span>Metode Pembayaran</span>
                </div>

                <div class="header-purchase-order-info-data">
                  <span>{{orderPaymentMethod}}</span>
                </div>
              </div>

              <div style="display: flex">
                <div class="header-purchase-order-info">
                  <span>Waktu Pembayaran</span>
                </div>

                <div class="header-purchase-order-info-data">
                  <span>{{orderTime}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- HEADER PURCHASE ORDER DOC -->

        <!-- PURCHASE ORDER AND BUYER -->
        <div class="body body-text">
          <div class="body-container">
            <div class="buyer-info">
              <span>Pembeli</span>
            </div>

            <div
              style="
                font-weight: 700 !important;
                margin-top: 1rem;
                margin-bottom: 1rem;
              "
            >
              <span>{{buyerName}}</span>
            </div>

            <div>
              <span>{{buyerAddress}}</span>
            </div>

            <div style="margin-top: 1rem; display: flex">
              <div style="margin-right: 0.25rem">
                <span> Telp: </span>
              </div>

              <div>{{buyerContacts}}</div>
            </div>
          </div>

          <div class="order-container">
            <div class="order-info">
              <span>Order Ke</span>
            </div>

            <div
              style="
                font-weight: 700 !important;
                margin-top: 1rem;
                margin-bottom: 1rem;
              "
            >
              <span>Happy Homes Indonesia</span>
            </div>

            <div>
              <span>Telp: 082118832184</span>
            </div>

            <div>
              <span>Email: juansyah@happyhomes.id</span>
            </div>
          </div>
        </div>
        <!-- PURCHASE ORDER AND BUYER -->

        <!-- ORDERED ITEMS -->

        {{totalAndFooterHtml}}

        <!-- ORDERED ITEMS -->
      </div>
    </div>
  </body>
</html>


`;
module.exports.templateOrder = templateOrder;
