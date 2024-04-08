export const removebg = {
  '62': {
    inputs: {
      image_path:
        'http://region-8.autodl.pro:23781/view?subfolder=2024-04-06&filename=R-C__segment_output_final__0001_inpaiting_output_final__0003.png&type=output',
      RGBA: 'false',
      filename_text_extension: 'true',
    },
    class_type: 'Image Load',
    _meta: {
      title: '图像加载',
    },
  },
  '63': {
    inputs: {
      output_path: '[time(%Y-%m-%d)]',
      filename_prefix: ['66', 0],
      filename_delimiter: '_',
      filename_number_padding: 4,
      filename_number_start: 'false',
      extension: 'png',
      quality: 100,
      lossless_webp: 'false',
      overwrite_mode: 'false',
      show_history: 'false',
      show_history_by_prefix: 'true',
      embed_workflow: 'true',
      show_previews: 'true',
      images: ['72', 0],
    },
    class_type: 'Image Save',
    _meta: {
      title: '图像保存',
    },
  },
  '66': {
    inputs: {
      delimiter: '-',
      clean_whitespace: 'true',
      text_a: ['62', 2],
      text_b: ['73', 0],
    },
    class_type: 'Text Concatenate',
    _meta: {
      title: '文本连锁',
    },
  },
  '72': {
    inputs: {
      transparency: true,
      model: 'u2net',
      post_processing: false,
      only_mask: false,
      alpha_matting: false,
      alpha_matting_foreground_threshold: 240,
      alpha_matting_background_threshold: 10,
      alpha_matting_erode_size: 10,
      background_color: 'none',
      images: ['62', 0],
    },
    class_type: 'Image Rembg (Remove Background)',
    _meta: {
      title: '移除背景',
    },
  },
  '73': {
    inputs: {
      text: 'removebg_output_final_',
    },
    class_type: 'Text Multiline',
    _meta: {
      title: '多行文本',
    },
  },
};
