import { Get, Query, Body, Controller, Post } from '@nestjs/common';
import { DrawService, DrawTask } from './draw.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('AI绘画')
@Controller('draw')
export class DrawController {
  constructor(private readonly drawService: DrawService) {}

  @ApiOperation({
    summary: '通用接口，',
    description:
      'AI绘画接口，可提交任意绘图的comfyui工作流API任务，直接返回绘图成功的结果：图片或者视频的url',
    operationId: 'submitDrawTask',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              source: {
                type: 'string',
                description:
                  'web or wechat,来源识别，区分web端任务和微信端任务，默认web',
                example: 'web',
              },
              prompt: {
                type: 'object',
                description: 'comfyui绘画API',
                example: { prompt: 'your comfyui prompt' },
              },
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              api: {
                type: 'string',
                description: 'api名称具体，文生图，图生图，决定任务的超时时间',
                example: '文生图',
              },
              lifo: {
                type: 'boolean',
                description: '是否使用lifo队列，默认false',
              },
            },
          },
        },
      },
    },
  })
  @Post('submitTask')
  async submitDrawTask(@Body() data: DrawTask) {
    const { source, socket_id, client_id, prompt, api } = data;
    return await this.drawService.submitDrawTask(data);
  }

  @ApiOperation({
    summary: '文生图',
    description: '文生图:图片或者视频的url',
    operationId: 'text2img',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              params: {
                type: 'object',
                description: 'comfyui绘画API关键参数',
                example: {
                  positive: '一个女孩',
                  negative: '丑陋的',
                  seed: 12345678912345,
                  width: 512,
                  height: 768,
                  ckpt_name_id: 0,
                  filename_prefix: 'iamgename', //文件名前缀
                  upscale_by: 1,
                },
              },
              options: {
                type: 'object',
                description: '其他可选控制任务分发和队列参数等',
                example: {
                  source: 'web', //web or wechat,来源识别，区分web端任务和微信端任务，默认web
                  lifo: false, //是否使用lifo队列，默认false
                },
              },
            },
          },
        },
      },
    },
  })
  @Post('text2img')
  async text2img(
    @Body('params') params: any,
    @Body('client_id') client_id: string,
    @Body('socket_id') socket_id: string,
  ) {
    console.log(socket_id);
    return await this.drawService.text2img(client_id, socket_id, params);
  }

  /**
   * 图生图
   * @param params
   * @param client_id
   * @param socket_id
   */
  @ApiOperation({
    summary: '图生图',
    description: '图生图，直接返回绘图成功的结果:图片或者视频的url',
    operationId: 'image2img',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              params: {
                type: 'object',
                description: 'comfyui绘画API关键参数',
                example: {
                  image_path:
                    'https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/t2i_1.jpg',
                  denoise: 0.5,
                  noise_seed: 1212121212121212,
                  ckpt_name_id: 0,
                  filename_prefix: 'your imagename here', //文件名前缀
                  upscale_by: 1,
                },
              },
              options: {
                type: 'object',
                description: '其他可选控制任务分发和队列参数等',
                example: {
                  source: 'web', //web or wechat,来源识别，区分web端任务和微信端任务，默认web
                  lifo: false, //是否使用lifo队列，默认false
                },
              },
            },
          },
        },
      },
    },
  })
  @Post('img2img')
  async img2img(
    @Body('params') params: any,
    @Body('client_id') client_id: string,
    @Body('socket_id') socket_id: string,
  ) {
    console.log(socket_id);
    return await this.drawService.image2img(client_id, socket_id, params);
  }
  @ApiOperation({
    summary: '图生视频',
    description: '图生视频，直接返回绘图成功的结果:图片或者视频的url',
    operationId: 'image2video',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              params: {
                type: 'object',
                description: 'comfyui绘画API关键参数',
                example: {
                  image_path:
                    'https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/u%3D1090338134%2C2696420997%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG.webp',
                  video_frames: 25,
                  fps: 8,
                  motion_bucket_id: 127, //运动幅度，默认127
                  augmentation_level: 0, //增强，默认为0
                  filename_prefix: '文生视频',
                  cfg: 3,
                  steps: 20,
                  min_cfg: 1,
                },
              },
              options: {
                type: 'object',
                description: '其他可选控制任务分发和队列参数等',
                example: {
                  source: 'web', //web or wechat,来源识别，区分web端任务和微信端任务，默认web
                  lifo: false, //是否使用lifo队列，默认false
                },
              },
            },
          },
        },
      },
    },
  })
  @Post('img2video')
  async img2video(
    @Body('params') params: any,
    @Body('client_id') client_id: string,
    @Body('socket_id') socket_id: string,
  ) {
    console.log(socket_id);
    return await this.drawService.image2video(client_id, socket_id, params);
  }
  @ApiOperation({
    summary: '抠图',
    description:
      '抠图，万物皆可扣，目前最强大的抠图，任意文本抠图，不需要任何复杂操作，直接返回绘图成功的结果:图片或者视频的url',
    operationId: 'segmentAnything',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              params: {
                type: 'object',
                description: 'comfyui绘画API关键参数',
                example: {
                  image_path:
                    'https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/4c226c64d37f410c857f98ebb3ecb5ef.jpeg',
                  segmentparts: '西瓜',
                },
              },
              options: {
                type: 'object',
                description: '其他可选控制任务分发和队列参数等',
                example: {
                  source: 'web', //web or wechat,来源识别，区分web端任务和微信端任务，默认web
                  lifo: false, //是否使用lifo队列，默认false
                },
              },
            },
          },
        },
      },
    },
  })
  @Post('segmentAnything')
  async segmentAnything(
    @Body('params') params: any,
    @Body('client_id') client_id: string,
    @Body('socket_id') socket_id: string,
  ) {
    // console.log(socket_id, params);
    return await this.drawService.segmentAnything(client_id, params, socket_id);
  }
  @ApiOperation({
    summary: '局部重绘',
    description:
      '局部重绘，上传原图及遮罩，将遮罩部分进行重绘，直接返回绘图成功的结果图片',
    operationId: 'inpainting',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              params: {
                type: 'object',
                description: 'comfyui绘画API关键参数',
                example: {
                  image_path:
                    'https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/R-C.jpg',
                  image_path_mask:
                    'https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/R-C__segment_output_final__0001.png',
                  ckpt_name_id: 0,
                  denoise: 0.5,
                  positive: '一个女孩',
                  nagative: '',
                },
              },
              options: {
                type: 'object',
                description: '其他可选控制任务分发和队列参数等',
                example: {
                  source: 'web', //web or wechat,来源识别，区分web端任务和微信端任务，默认web
                  lifo: false, //是否使用lifo队列，默认false
                },
              },
            },
          },
        },
      },
    },
  })
  @Post('inpainting')
  async inpainting(
    @Body('params') params: any,
    @Body('client_id') client_id: string,
    @Body('socket_id') socket_id: string,
  ) {
    return await this.drawService.inpainting(client_id, params, socket_id);
  }
  @ApiOperation({
    summary: '背景擦除',
    description:
      '背景擦除，仅仅需要去除背景的时候，建议使用这个接口，速度比抠图segmentanything快，直接返回去除背景之后的透明背景图片',
    operationId: 'removebg',
    tags: ['AI绘画'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'client_id，客户端唯一标识',
                example: 'your client id',
              },
              socket_id: {
                type: 'string',
                description:
                  'socket_id，websocket唯一标识,web端调用的时候必须，否则无法接受到websocket实时消息',
                example: 'your socket id',
              },
              params: {
                type: 'object',
                description: 'comfyui绘画API关键参数',
                example: {
                  image_path:
                    'https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/R-C.jpg',
                },
              },
              options: {
                type: 'object',
                description: '其他可选控制任务分发和队列参数等',
                example: {
                  source: 'web', //web or wechat,来源识别，区分web端任务和微信端任务，默认web
                  lifo: false, //是否使用lifo队列，默认false
                },
              },
            },
          },
        },
      },
    },
  })
  @Post('removebg')
  async removebg(
    @Body('params') params: any,
    @Body('client_id') client_id: string,
    @Body('socket_id') socket_id: string,
  ) {
    return await this.drawService.removebg(client_id, params, socket_id);
  }

  @ApiOperation({
    summary: '加入绘画黑名单',
    description: '加入绘画黑名单',
    operationId: 'addBlackList',
    tags: ['用户管理'],
    parameters: [
      {
        name: 'client_id',
        in: 'query',
        description: 'client_id，客户端唯一标识',
        required: true,
        schema: {
          type: 'string',
          example: 'your client id',
        },
      },
    ],
  })
  @Get('addBlackList')
  async addBlackList(@Query('client_id') client_id: string) {
    console.log(client_id);
    return await this.drawService.addBlackList(client_id);
  }

  @ApiOperation({
    summary: '获取绘画黑名单',
    description: '获取绘画黑名单',
  })
  @Get('getBlackList')
  async getBlackList() {
    return await this.drawService.getBlackList();
  }

  @ApiOperation({
    summary: '移除绘画黑名单',
    description: '移除绘画黑名单',
    parameters: [
      {
        name: 'client_id',
        in: 'query',
        description: 'client_id，客户端唯一标识',
        required: true,
        schema: {
          type: 'string',
          example: 'your client id',
        },
      },
    ],
  })
  @Get('removeBlackList')
  async removeBlackList(@Query('client_id') uid: string) {
    return await this.drawService.removeBlackList(uid);
  }

}
