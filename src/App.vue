<template>
  <div>
    <table id="board">
      <tr v-for="(row, i) in state.cells" :key="i">
        <td
          v-for="(cell, j) in row"
          :key="j"
          @click="clicked(j, i)"
          :class="{'light-on':  state.cells[i][j] === -1}"
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
      cells: [...Array(5)].map(() => Array(5).fill(1))
    });

    const clicked = (x, y) => {
      state.cells[y][x] *= -1;

      const dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
      ];
      for (const next of dir) {
        const nx = next[0] + x;
        const ny = next[1] + y;

        if (nx < 0 || nx >= state.cells.length ||
            ny < 0 || ny >= state.cells.length) {
          continue;
        }

        state.cells[ny][nx] *= -1;
      }
    };

    for (let i = 0; i < 10; i++) {
      const x = Math.floor(Math.random() * state.cells.length);
      const y = Math.floor(Math.random() * state.cells.length);
      clicked(x, y);
    }

    return {
      state,
      clicked
    };
  }
});
</script>
