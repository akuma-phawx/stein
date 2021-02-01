<template>
  <div class="contentBox">
    <!-- https://codepen.io/heypablete/pen/qdIsm -->
    <!-- {{ $route.params.id }} -->
    <h1>ID Selected: {{ $route.params.id }} || {{ shortName }}</h1>
    <div class="tableContent">
      <table class="container">
        <thead>
          <tr>
            <th><h1>ID</h1></th>
            <th><h1>Name</h1></th>
            <th><h1>Market</h1></th>
            <th><h1>ISIN</h1></th>
            <th><h1>WKN</h1></th>
            <th><h1>Instrument ID</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in content" :key="c.id">
            <td>{{ c.id }}</td>
            <td>{{ c.instrument.shortName }}</td>
            <td>{{ c.market.name }}</td>
            <td>{{ c.instrument.isin }}</td>
            <td>{{ c.instrument.nsin.wkn }}</td>
            <td>{{ c.instrument.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.content;
    },
    shortName() {
      const selectedIdx = this.$store.state.indicies.filter((idx) => {
        return idx.id === this.$route.params.id;
      });
      return selectedIdx[0].shortName;
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadContent", this.$route.params.id);
  },
};
</script>

<style>
.tableContent .container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
}

.tableContent .container td {
  font-weight: normal;
  color: #a7a1ae;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
}

.tableContent .container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.tableContent .container td,
.container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
}

/* Background-color of the odd rows */
.tableContent .container tr:nth-child(odd) {
  background-color: #323c50;
}

/* Background-color of the even rows */
.tableContent .container tr:nth-child(even) {
  background-color: #2c3446;
}

.tableContent .container th {
  background-color: #1f2739;
}

.tableContent .container td:nth-child(2) {
  color: #fb667a;
}

.tableContent .container tr:hover {
  background-color: #464a52;
  -webkit-box-shadow: 0 6px 6px -6px #0e1119;
  -moz-box-shadow: 0 6px 6px -6px #0e1119;
  box-shadow: 0 6px 6px -6px #0e1119;
}

.tableContent .container td:hover {
  background-color: #fff842;
  color: #403e10;
  font-weight: bold;

  box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px,
    #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: line;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
</style>
