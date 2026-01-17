<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "DisclaimerModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `Hi, Supersonic Seven here. If you proceed, you will experience what no man should have to experience.
      This game features total suffering, QoL nerfs, gameplay nerfs, and worst of all, a Little Dickhead. This Little Dickhead
      will stop at nothing to make you rage quit, even going so far as to try and make you say racial slurs to prevent a
      potential softlock (don't worry you don't have to comply). You will want to scream. You will want to cry. You will want to run
      to Mommy. You will want to die. But you can't, because you know you have a mission. You have to reach Reality in this mod.
      If you do, Little Dickhead will be destroyed and you will beat the game. Please also note that this mod is intended for
      Mature audiences, due to many of the things you may encounter within the game's play span. If you feel uncomfortable,
      please consult a psychiatrist before continuing. If you wish to continue, you will be one of the few who dare to beat this
      challenging Reality. This is your last chance to leave. Good luck, kid.`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      player.antimatter = new Decimal(10);
      player.options.hasSeenDisclaimer = true;
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="false"
    @confirm="handleYesClick"
  >
    <template #header>
      DISCLAIMER
    </template>
    <div class="c-modal-message__text">
      <span
        v-for="(line, index) in message"
        :key="index"
      >
        {{ line }} <br>
      </span>
    </div>
    <template #confirm-text>
      I understand
    </template>
  </ModalWrapperChoice>
</template>
