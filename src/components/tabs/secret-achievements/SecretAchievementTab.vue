<script>
import SecretAchievementRow from "./SecretAchievementRow";
import wordShift from "@/core/word-shift";

export default {
  name: "SecretAchievementTab",
  data() {
    return {
      time: 0
    };
  },
  components: {
    SecretAchievementRow
  },
  computed: {
    rows: () => SecretAchievements.allRows,
  },
  methods: {
    update() {
      this.time = Date.now();
    },
    crossText() {
      return this.time % 5000 > 4000 ? `Secret Achievements are optional and give no bonuses.` : wordShift.randomCrossWords("Secret Achievements are optional and give no bonuses.");
    }
  }
};
</script>

<template>
  <div class="l-achievements-tab">
    <div class="c-achievements-tab__header">
      <span>
        {{ crossText() }}
      </span>
    </div>
    <div class="l-achievement-grid">
      <secret-achievement-row
        v-for="(row, i) in rows"
        :key="i"
        :row="row"
      />
    </div>
  </div>
</template>
