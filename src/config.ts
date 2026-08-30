import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-suzumi",
  slug: "suzumi",
  title: "Suzumi",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 12.000000953674316,
    "lines": [
      {
        "id": "suzumi_memoriallobby_1_1",
        "text": {
          "zh-cn": "……好漂亮啊。",
          "ja": "……綺麗ですね。",
          "ko": "……예쁘네요.",
          "en": "...It's beautiful."
        }
      },
      {
        "id": "suzumi_memoriallobby_1_2",
        "text": {
          "zh-cn": "在这里，星星好像 一伸手就能抓到。",
          "ja": "ここからなら、\n星が掴めてしまいそうです。",
          "ko": "여기서라면, 별을\n잡을 수 있을 것만 같아요.",
          "en": "I feel like I could reach the stars from here."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 16,
    "lines": [
      {
        "id": "suzumi_memoriallobby_2_1",
        "text": {
          "zh-cn": "最近开始能享受一些 像这样悠闲安静的日子了……",
          "ja": "ここ最近はこうしてゆっくりと、\n落ち着いた時間も\n過ごすことができて……。",
          "ko": "최근에는 이렇게 느긋하고,\n차분한 시간도\n보낼 수 있게 되었네요…….",
          "en": "I've been enjoying these moments of reprieve lately..."
        }
      },
      {
        "id": "suzumi_memoriallobby_2_2",
        "text": {
          "zh-cn": "好像，就是从 和老师见面开始的。",
          "ja": "……先生と出会った頃から、\nかもしれません。",
          "ko": "……선생님과\n만났을 무렵부터,\n인지도 모릅니다.",
          "en": "I think it's been that way since I met you."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 15.666667938232422,
    "lines": [
      {
        "id": "suzumi_memoriallobby_3_1",
        "text": {
          "zh-cn": "……老师。",
          "ja": "……先生。",
          "ko": "……선생님.",
          "en": "...Sensei."
        }
      },
      {
        "id": "suzumi_memoriallobby_3_2",
        "text": {
          "zh-cn": "方便的话， 以后也能一直陪在我身边吗？",
          "ja": "よろしければ\nこれからも、一緒に\n居ていただけますでしょうか。",
          "ko": "괜찮으시다면\n앞으로도 함께\n해주실 수 있을까요?",
          "en": "Do you think we could hang out here and there?"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 10.000000953674316,
    "lines": [
      {
        "id": "suzumi_memoriallobby_4",
        "text": {
          "zh-cn": "虽然我可能总是 说一些很无聊的事情……",
          "ja": "私はいつも、つまらない\nことばかり口にしてしまうかも\nしれませんが……。",
          "ko": "저는 언제나,\n재미없는 이야기를 계속 하게\n될지도 모르겠습니다만…….",
          "en": "I know I talk about boring stuff all the time, but..."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 15.833333969116211,
    "lines": [
      {
        "id": "suzumi_memoriallobby_5_1",
        "text": {
          "zh-cn": "但总有一天我也会……",
          "ja": "それでもいつかは、\n私も……。",
          "ko": "그래도 언젠가는 저도…….",
          "en": "Maybe someday, I'll..."
        }
      },
      {
        "id": "suzumi_memoriallobby_5_2",
        "text": {
          "zh-cn": "……嗯。 总有一天，一定会。",
          "ja": "……はい。\nいつか、きっと。",
          "ko": "……네. 언젠가, 반드시.",
          "en": "...Yes, one day..."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
