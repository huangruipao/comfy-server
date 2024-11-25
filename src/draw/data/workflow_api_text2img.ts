export const text2img = {
  "18": {
    "inputs": {
      "text": "paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, manboobs,(ugly:1.331), (duplicate:1.331), (morbid:1.21), (mutilated:1.21), (tranny:1.331), mutated hands, (poorly drawn hands:1.331), blurry, (bad anatomy:1.21), (bad proportions:1.331), extra limbs, (disfigured:1.331), (more than 2 nipples:1.331), (missing arms:1.331), (extra legs:1.331), (fused fingers:1.61051), (too many fingers:1.61051), (unclear eyes:1.331), bad hands, missing fingers, extra digit, (futa:1.1), bad body, NG_DeepNegative_V1_75T,"
    },
    "class_type": "ttN text",
    "_meta": {
      "title": "text"
    }
  },
  "19": {
    "inputs": {
      "text": "(8k, best quality, masterpiece:1.2)"
    },
    "class_type": "ttN text",
    "_meta": {
      "title": "text"
    }
  },
  "25": {
    "inputs": {
      "delimiter": ",",
      "clean_whitespace": "true",
      "text_a": [
        "55",
        0
      ],
      "text_b": [
        "19",
        0
      ]
    },
    "class_type": "Text Concatenate",
    "_meta": {
      "title": "Text Concatenate"
    }
  },
  "26": {
    "inputs": {
      "delimiter": "",
      "clean_whitespace": "true",
      "text_a": [
        "58",
        0
      ],
      "text_b": [
        "18",
        0
      ]
    },
    "class_type": "Text Concatenate",
    "_meta": {
      "title": "Text Concatenate"
    }
  },
  "44": {
    "inputs": {
      "upscale_type": "latent",
      "hires_ckpt_name": "(use same)",
      "latent_upscaler": "nearest-exact",
      "pixel_upscaler": "4x-UltraSharp.pth",
      "upscale_by": 1.5,
      "use_same_seed": true,
      "seed": -1,
      "hires_steps": 12,
      "denoise": 0.3,
      "iterations": 1,
      "use_controlnet": false,
      "control_net_name": "control_sd15_random_color.pth",
      "strength": 1,
      "preprocessor": "CannyEdgePreprocessor",
      "preprocessor_imgs": false
    },
    "class_type": "HighRes-Fix Script",
    "_meta": {
      "title": "HighRes-Fix Script"
    }
  },
  "45": {
    "inputs": {
      "input_mode": "simple",
      "lora_count": 5,
      "lora_name_1": "lcm\\lcm_sd1.5_pytorch_lora_weights.safetensors",
      "lora_wt_1": 1,
      "model_str_1": 1,
      "clip_str_1": 1,
      "lora_name_2": "None",
      "lora_wt_2": 0.5,
      "model_str_2": 1,
      "clip_str_2": 1,
      "lora_name_3": "None",
      "lora_wt_3": 0.5,
      "model_str_3": 1,
      "clip_str_3": 1,
      "lora_name_4": "None",
      "lora_wt_4": 1,
      "model_str_4": 1,
      "clip_str_4": 1,
      "lora_name_5": "None",
      "lora_wt_5": 1,
      "model_str_5": 1,
      "clip_str_5": 1,
      "lora_name_6": "None",
      "lora_wt_6": 1,
      "model_str_6": 1,
      "clip_str_6": 1,
      "lora_name_7": "None",
      "lora_wt_7": 1,
      "model_str_7": 1,
      "clip_str_7": 1,
      "lora_name_8": "None",
      "lora_wt_8": 1,
      "model_str_8": 1,
      "clip_str_8": 1,
      "lora_name_9": "None",
      "lora_wt_9": 1,
      "model_str_9": 1,
      "clip_str_9": 1,
      "lora_name_10": "None",
      "lora_wt_10": 1,
      "model_str_10": 1,
      "clip_str_10": 1,
      "lora_name_11": "None",
      "lora_wt_11": 1,
      "model_str_11": 1,
      "clip_str_11": 1,
      "lora_name_12": "None",
      "lora_wt_12": 1,
      "model_str_12": 1,
      "clip_str_12": 1,
      "lora_name_13": "None",
      "lora_wt_13": 1,
      "model_str_13": 1,
      "clip_str_13": 1,
      "lora_name_14": "None",
      "lora_wt_14": 1,
      "model_str_14": 1,
      "clip_str_14": 1,
      "lora_name_15": "None",
      "lora_wt_15": 1,
      "model_str_15": 1,
      "clip_str_15": 1,
      "lora_name_16": "None",
      "lora_wt_16": 1,
      "model_str_16": 1,
      "clip_str_16": 1,
      "lora_name_17": "None",
      "lora_wt_17": 1,
      "model_str_17": 1,
      "clip_str_17": 1,
      "lora_name_18": "None",
      "lora_wt_18": 1,
      "model_str_18": 1,
      "clip_str_18": 1,
      "lora_name_19": "None",
      "lora_wt_19": 1,
      "model_str_19": 1,
      "clip_str_19": 1,
      "lora_name_20": "None",
      "lora_wt_20": 1,
      "model_str_20": 1,
      "clip_str_20": 1,
      "lora_name_21": "None",
      "lora_wt_21": 1,
      "model_str_21": 1,
      "clip_str_21": 1,
      "lora_name_22": "None",
      "lora_wt_22": 1,
      "model_str_22": 1,
      "clip_str_22": 1,
      "lora_name_23": "None",
      "lora_wt_23": 1,
      "model_str_23": 1,
      "clip_str_23": 1,
      "lora_name_24": "None",
      "lora_wt_24": 1,
      "model_str_24": 1,
      "clip_str_24": 1,
      "lora_name_25": "None",
      "lora_wt_25": 1,
      "model_str_25": 1,
      "clip_str_25": 1,
      "lora_name_26": "None",
      "lora_wt_26": 1,
      "model_str_26": 1,
      "clip_str_26": 1,
      "lora_name_27": "None",
      "lora_wt_27": 1,
      "model_str_27": 1,
      "clip_str_27": 1,
      "lora_name_28": "None",
      "lora_wt_28": 1,
      "model_str_28": 1,
      "clip_str_28": 1,
      "lora_name_29": "None",
      "lora_wt_29": 1,
      "model_str_29": 1,
      "clip_str_29": 1,
      "lora_name_30": "None",
      "lora_wt_30": 1,
      "model_str_30": 1,
      "clip_str_30": 1,
      "lora_name_31": "None",
      "lora_wt_31": 1,
      "model_str_31": 1,
      "clip_str_31": 1,
      "lora_name_32": "None",
      "lora_wt_32": 1,
      "model_str_32": 1,
      "clip_str_32": 1,
      "lora_name_33": "None",
      "lora_wt_33": 1,
      "model_str_33": 1,
      "clip_str_33": 1,
      "lora_name_34": "None",
      "lora_wt_34": 1,
      "model_str_34": 1,
      "clip_str_34": 1,
      "lora_name_35": "None",
      "lora_wt_35": 1,
      "model_str_35": 1,
      "clip_str_35": 1,
      "lora_name_36": "None",
      "lora_wt_36": 1,
      "model_str_36": 1,
      "clip_str_36": 1,
      "lora_name_37": "None",
      "lora_wt_37": 1,
      "model_str_37": 1,
      "clip_str_37": 1,
      "lora_name_38": "None",
      "lora_wt_38": 1,
      "model_str_38": 1,
      "clip_str_38": 1,
      "lora_name_39": "None",
      "lora_wt_39": 1,
      "model_str_39": 1,
      "clip_str_39": 1,
      "lora_name_40": "None",
      "lora_wt_40": 1,
      "model_str_40": 1,
      "clip_str_40": 1,
      "lora_name_41": "None",
      "lora_wt_41": 1,
      "model_str_41": 1,
      "clip_str_41": 1,
      "lora_name_42": "None",
      "lora_wt_42": 1,
      "model_str_42": 1,
      "clip_str_42": 1,
      "lora_name_43": "None",
      "lora_wt_43": 1,
      "model_str_43": 1,
      "clip_str_43": 1,
      "lora_name_44": "None",
      "lora_wt_44": 1,
      "model_str_44": 1,
      "clip_str_44": 1,
      "lora_name_45": "None",
      "lora_wt_45": 1,
      "model_str_45": 1,
      "clip_str_45": 1,
      "lora_name_46": "None",
      "lora_wt_46": 1,
      "model_str_46": 1,
      "clip_str_46": 1,
      "lora_name_47": "None",
      "lora_wt_47": 1,
      "model_str_47": 1,
      "clip_str_47": 1,
      "lora_name_48": "None",
      "lora_wt_48": 1,
      "model_str_48": 1,
      "clip_str_48": 1,
      "lora_name_49": "None",
      "lora_wt_49": 1,
      "model_str_49": 1,
      "clip_str_49": 1
    },
    "class_type": "LoRA Stacker",
    "_meta": {
      "title": "LoRA Stacker"
    }
  },
  "51": {
    "inputs": {
      "output_path": "[time(%Y-%m-%d)]",
      "filename_prefix": "text2img_output_final_",
      "filename_delimiter": "_",
      "filename_number_padding": 4,
      "filename_number_start": "false",
      "extension": "png",
      "dpi": 100,
      "quality": 100,
      "optimize_image": "false",
      "lossless_webp": "false",
      "overwrite_mode": "prefix_as_filename",
      "show_history": "true",
      "show_history_by_prefix": "true",
      "embed_workflow": "true",
      "show_previews": "true",
      "images": [
        "54",
        5
      ]
    },
    "class_type": "Image Save",
    "_meta": {
      "title": "Image Save"
    }
  },
  "52": {
    "inputs": {
      "ckpt_name": "majicmixRealistic_v7.safetensors",
      "vae_name": "Baked VAE",
      "clip_skip": -2,
      "lora_name": "None",
      "lora_model_strength": 1,
      "lora_clip_strength": 1,
      "positive": [
        "25",
        0
      ],
      "negative": [
        "26",
        0
      ],
      "token_normalization": "none",
      "weight_interpretation": "A1111",
      "empty_latent_width": 512,
      "empty_latent_height": 512,
      "batch_size": 1
    },
    "class_type": "Efficient Loader",
    "_meta": {
      "title": "Efficient Loader"
    }
  },
  "54": {
    "inputs": {
      "seed": 127132725962822,
      "steps": 20,
      "cfg": 7,
      "sampler_name": "dpmpp_2m",
      "scheduler": "karras",
      "denoise": 1,
      "preview_method": "none",
      "vae_decode": "true",
      "model": [
        "52",
        0
      ],
      "positive": [
        "52",
        1
      ],
      "negative": [
        "52",
        2
      ],
      "latent_image": [
        "52",
        3
      ],
      "optional_vae": [
        "52",
        4
      ]
    },
    "class_type": "KSampler (Efficient)",
    "_meta": {
      "title": "KSampler (Efficient)"
    }
  },
  "55": {
    "inputs": {
      "text": "一个女孩",
      "platform": "alibaba",
      "source": "auto",
      "target": "en"
    },
    "class_type": "ZFTextTranslation",
    "_meta": {
      "title": "Text Translation 🍕🅩🅕"
    }
  },
  "58": {
    "inputs": {
      "text": "",
      "platform": "alibaba",
      "source": "auto",
      "target": "en"
    },
    "class_type": "ZFTextTranslation",
    "_meta": {
      "title": "Text Translation 🍕🅩🅕"
    }
  }
}