<template>
  <div>
    <table id="board">
      <tr v-for="(row, i) in state.cells" :key="i">
        <td
          v-for="(cell, j) in row"
          :key="j"
          @click="state.cells = clicked(state.cells, j, i)"
          :class="{'light-on':  state.cells[i][j] === 1}"
        />
      </tr>
    </table>
  </div>

</template>

<script>
import "@/assets/css/style.css";

import { defineComponent, reactive } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      cells: [...Array(5)].map(() => Array(5).fill(0))
    });

    const clicked = (inputCells, x, y) => {
      let cells = JSON.parse(JSON.stringify(inputCells));

      cells[y][x] = Number(!cells[y][x]);
      const dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
      ];
      for (const next of dir) {
        const nx = next[0] + x;
        const ny = next[1] + y;

        if (nx < 0 || nx >= cells.length ||
            ny < 0 || ny >= cells.length) {
          continue;
        }

        cells[ny][nx] = Number(!state.cells[ny][nx]);
      }

      return cells;
    };

    for (let i = 0; i < 10; i++) {
      const x = Math.floor(Math.random() * state.cells.length);
      const y = Math.floor(Math.random() * state.cells.length);
      state.cells = clicked(state.cells, x, y);
    }

    return {
      state,
      clicked
    };
  }
});
</script>
