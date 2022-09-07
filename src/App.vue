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
    <button
      @click="solve(state.cells)"
    >Solve</button>
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

    const solve = (inputCells) => {
      let cells = JSON.parse(JSON.stringify(inputCells));
      let res = [];

      // ライトの点滅を確認する関数
      const isLightOn = (board => 
        board.reduce((acc, row) => 
          acc | row.some(v => v >= 1), false));

      while (isLightOn(cells)) {
        // ライトを最終行まで持っていく操作
        for (let y = 1; y < cells.length; y++) {
          for (let x = 0; x < cells[y].length; x++) {
            if (!cells[y - 1][x]) {
              continue;
            }

            res.push({ x: x, y: y });
            cells = clicked(cells, x, y);

            if (!isLightOn(cells)) {
              console.log(res);
              return res;
            }
          }
        }

        // 最初の行でクリックする数字を決める
        const lastCell = cells[cells.length - 1];
        const firstRowClicks = (() => {
          if (JSON.stringify(lastCell) === JSON.stringify([1, 1, 1, 0, 0])) {
            return [1];
          } else if (JSON.stringify(lastCell) === JSON.stringify([1, 1, 0, 1, 1])) {
            return [2];
          } else if (JSON.stringify(lastCell) === JSON.stringify([1, 0, 1, 1, 0])) {
            return [4];
          } else if (JSON.stringify(lastCell) === JSON.stringify([1, 0, 0, 0, 1])) {
            return [0, 1];
          } else if (JSON.stringify(lastCell) === JSON.stringify([0, 1, 1, 0, 1])) {
            return [0];
          } else if (JSON.stringify(lastCell) === JSON.stringify([0, 1, 0, 1, 0])) {
            return [0, 3];
          } else if (JSON.stringify(lastCell) === JSON.stringify([0, 0, 1, 1, 1])) {
            return [3];
          }

          return [0];
        })();

        for (const x of firstRowClicks) {
          res.push({ x: x, y: 0});
          cells = clicked(cells, x, 0);

          if (!isLightOn(cells)) {
            console.log(res);
            return res; 
          }
        }
      }

      console.log(res);
      return res;
    };

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

        cells[ny][nx] = Number(!cells[ny][nx]);
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
      clicked,
      solve
    };
  }
});
</script>
