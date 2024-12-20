export const image2img = {
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
        "98",
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
  "51": {
    "inputs": {
      "output_path": "[time(%Y-%m-%d)]",
      "filename_prefix": "img2img_output_final_",
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
        "85",
        5
      ]
    },
    "class_type": "Image Save",
    "_meta": {
      "title": "Image Save"
    }
  },
  "70": {
    "inputs": {
      "image_path": "./ComfyUI/input/example.png",
      "RGBA": "false",
      "filename_text_extension": "false"
    },
    "class_type": "Image Load",
    "_meta": {
      "title": "Image Load"
    }
  },
  "71": {
    "inputs": {
      "image": [
        "70",
        0
      ]
    },
    "class_type": "Image Size to Number",
    "_meta": {
      "title": "Image Size to Number"
    }
  },
  "72": {
    "inputs": {
      "number_type": "integer",
      "number": 512
    },
    "class_type": "Constant Number",
    "_meta": {
      "title": "Constant Number"
    }
  },
  "73": {
    "inputs": {
      "operation": "division",
      "number_a": [
        "72",
        0
      ],
      "number_b": [
        "71",
        0
      ]
    },
    "class_type": "Number Operation",
    "_meta": {
      "title": "Number Operation"
    }
  },
  "74": {
    "inputs": {
      "upscale_method": "nearest-exact",
      "scale_by": [
        "73",
        1
      ],
      "image": [
        "70",
        0
      ]
    },
    "class_type": "ImageScaleBy",
    "_meta": {
      "title": "Upscale Image By"
    }
  },
  "85": {
    "inputs": {
      "seed": 878998063847385,
      "steps": 20,
      "cfg": 7,
      "sampler_name": "dpmpp_2m",
      "scheduler": "karras",
      "denoise": 1,
      "preview_method": "none",
      "vae_decode": "true",
      "model": [
        "92",
        0
      ],
      "positive": [
        "92",
        1
      ],
      "negative": [
        "92",
        2
      ],
      "latent_image": [
        "86",
        0
      ],
      "optional_vae": [
        "92",
        4
      ]
    },
    "class_type": "KSampler (Efficient)",
    "_meta": {
      "title": "KSampler (Efficient)"
    }
  },
  "86": {
    "inputs": {
      "pixels": [
        "74",
        0
      ],
      "vae": [
        "92",
        4
      ]
    },
    "class_type": "VAEEncode",
    "_meta": {
      "title": "VAE Encode"
    }
  },
  "87": {
    "inputs": {
      "operation": "division",
      "number_a": [
        "88",
        0
      ],
      "number_b": [
        "73",
        0
      ]
    },
    "class_type": "Number Operation",
    "_meta": {
      "title": "Number Operation"
    }
  },
  "88": {
    "inputs": {
      "number_type": "integer",
      "number": 1
    },
    "class_type": "Constant Number",
    "_meta": {
      "title": "Constant Number"
    }
  },
  "89": {
    "inputs": {
      "image": "R-C (1).jpg",
      "upload": "image"
    },
    "class_type": "LoadImage",
    "_meta": {
      "title": "Load Image"
    }
  },
  "92": {
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
      "batch_size": 1,
      "lora_stack": [
        "96",
        0
      ]
    },
    "class_type": "Efficient Loader",
    "_meta": {
      "title": "Efficient Loader"
    }
  },
  "94": {
    "inputs": {
      "text": [
        "95",
        0
      ],
      "text2": "1.5"
    },
    "class_type": "ShowText|pysssss",
    "_meta": {
      "title": "Show Text 🐍"
    }
  },
  "95": {
    "inputs": {
      "number": [
        "87",
        0
      ]
    },
    "class_type": "Number to Text",
    "_meta": {
      "title": "Number to Text"
    }
  },
  "96": {
    "inputs": {
      "input_mode": "simple",
      "lora_count": 4,
      "lora_name_1": "sd15_lcm_lora_rank1.safetensors",
      "lora_wt_1": 1,
      "model_str_1": 1,
      "clip_str_1": 1,
      "lora_name_2": "None",
      "lora_wt_2": 1,
      "model_str_2": 1,
      "clip_str_2": 1,
      "lora_name_3": "None",
      "lora_wt_3": 1,
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
  "98": {
    "inputs": {
      "model": "wd-v1-4-moat-tagger-v2",
      "threshold": 0.35,
      "character_threshold": 0.85,
      "replace_underscore": false,
      "trailing_comma": false,
      "exclude_tags": "",
      "tags": "1girl, solo, looking_at_viewer, smile, simple_background, dress, full_body, sleeveless, no_humans, outstretched_arms, pink_dress, oekaki, spread_arms",
      "image": [
        "70",
        0
      ]
    },
    "class_type": "WD14Tagger|pysssss",
    "_meta": {
      "title": "WD14 Tagger 🐍"
    }
  }
}