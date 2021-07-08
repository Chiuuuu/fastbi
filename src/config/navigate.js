import { DEFAULT_COLORS } from '../utils/defaultColors'
import guangzhou from '../utils/guangdong.json'

function chartClick(e) {
  console.log(e)
}

/**
 * type = 1 维度度量都需要的图表
 * type = 2 只有度量的图表(仪表盘、环形图)
 * type = 3 不区分维度或者度量（表格）
 * chatType: 用于判断v-chart图表类型(非v-chart则是自定义的组件)
 * config: 即echarts的setOption(config)
 * apis: v-charts封装的settings配置项
 * api_data: 维度度量相关数据
 *   .dimensions: 维度列表
 *   .measures: 度量列表
 *   .columns: coulumns[0]默认为维度, 剩下的是默认的度量
 *   .rows: 默认的数据
 *   .source: 具体的图表数据
 *     .columns: key-value的映射
 *     .rows: obj:{ key(类目): string, value(值): string | number }[]
 * view: 视图宽高, 相对画布的位置
 * background: 视图背景设置
 */

const list = [
  {
    type: 'Basic',
    title: '添加图表',
    icon: 'bar-chart',
    hovered: false,
    tabs: [
      {
        title: '添加图表',
        children: [
          {
            title: '折线图',
            name: 've-line',
            chartType: 'v-line',
            icon: 'icon_line_chart.png',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              dimensions: [],
              measures: [],
              source: {},
              columns: ['日期', '访问用户', '下单用户'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393,
                  下单用户: 1093
                },
                {
                  日期: '1/2',
                  访问用户: 3530,
                  下单用户: 3230
                },
                {
                  日期: '1/3',
                  访问用户: 2923,
                  下单用户: 2623
                },
                {
                  日期: '1/4',
                  访问用户: 1723,
                  下单用户: 1423
                },
                {
                  日期: '1/5',
                  访问用户: 3792,
                  下单用户: 3492
                },
                {
                  日期: '1/6',
                  访问用户: 4593,
                  下单用户: 4293
                }
              ],
              options: {}
            },
            apis: {
              labelMap: {
                x: '类目',
                y: '值',
                s: '系列1'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '折线图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 50,
                top: 60,
                right: 50,
                bottom: 50
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                name: '',
                nameLocation: 'middle',
                nameGap: 5,
                nameTextStyle: {
                  color: '#fff',
                  fontSize: '12',
                  align: 'right',
                  padding: [30, 0, 0, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    width: 2,
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              yAxis: {
                name: '单位:个',
                position: 'left',
                nameLocation: 'middle',
                nameTextStyle: {
                  color: '#fff',
                  fontSize: 12,
                  padding: [0, 0, 40, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              series: {
                type: 'line',
                selectedMode: 'single',
                smooth: false, // 可选的
                step: false, // step line
                lineStyle: {
                  width: 1
                },
                label: {
                  show: false,
                  color: '#fff',
                  fontSize: 12,
                  position: 'top'
                },
                areaStyle: {
                  // 可选的
                  opacity: 0
                },
                itemStyle: {
                  normal: {}
                }
              },
              color: DEFAULT_COLORS
            },
            view: {
              width: 500,
              height: 400,
              x: 710,
              y: 340
            } // 计算中间值(1920-500)*0.5,(1080-400)*0.5
          },
          {
            title: '柱状图',
            chartType: 'v-histogram',
            name: 've-histogram',
            icon: 'icon_histogram.png',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户', '下单用户', '下单率'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393,
                  下单用户: 1093,
                  下单率: 0.32
                },
                {
                  日期: '1/2',
                  访问用户: 3530,
                  下单用户: 3230,
                  下单率: 0.26
                },
                {
                  日期: '1/3',
                  访问用户: 2923,
                  下单用户: 2623,
                  下单率: 0.76
                },
                {
                  日期: '1/4',
                  访问用户: 1723,
                  下单用户: 1423,
                  下单率: 0.49
                },
                {
                  日期: '1/5',
                  访问用户: 3792,
                  下单用户: 3492,
                  下单率: 0.323
                },
                {
                  日期: '1/6',
                  访问用户: 4593,
                  下单用户: 4293,
                  下单率: 0.78
                }
              ],
              options: {}
            },
            apis: {
              // stack: { '用户': ['系列1', '系列2'] },
              // showLine: ['下单率'],
              // axisSite: { right: ['下单率'] },
              yAxisName: [],
              labelMap: {
                x: '类目',
                y: '值',
                s: '系列1'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              stack: false, // 是否是堆叠柱状图
              mixed: false, // 是否是混合柱状图
              title: {
                show: true,
                content: '柱状图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 50,
                top: 60,
                right: 50,
                bottom: 50
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                name: '',
                nameLocation: 'middle',
                nameGap: 20,
                nameTextStyle: {
                  color: '#fff',
                  fontSize: '12',
                  align: 'right',
                  padding: [30, 0, 0, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              yAxis: {
                name: '单位:个',
                position: 'left',
                nameLocation: 'middle',
                nameTextStyle: {
                  color: '#fff',
                  fontSize: 12,
                  padding: [0, 0, 40, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              series: {
                selectedMode: 'single',
                label: {
                  show: false,
                  color: '#fff',
                  fontSize: 12,
                  position: 'top'
                },
                itemStyle: {
                  normal: {
                    barBorderRadius: [0]
                  }
                },
                barWidth: '20%',
                barGap: '40%',
                barCategoryGap: '40%'
              },
              color: DEFAULT_COLORS
            },
            view: {
              width: 500,
              height: 400,
              x: 710,
              y: 340
            }
          },
          {
            title: '条形图',
            chartType: 'v-bar',
            name: 've-bar',
            icon: 'icon_.png',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户', '下单用户', '下单率'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393,
                  下单用户: 1093,
                  下单率: 0.32
                },
                {
                  日期: '1/2',
                  访问用户: 3530,
                  下单用户: 3230,
                  下单率: 0.26
                },
                {
                  日期: '1/3',
                  访问用户: 2923,
                  下单用户: 2623,
                  下单率: 0.76
                },
                {
                  日期: '1/4',
                  访问用户: 1723,
                  下单用户: 1423,
                  下单率: 0.49
                },
                {
                  日期: '1/5',
                  访问用户: 3792,
                  下单用户: 3492,
                  下单率: 0.323
                },
                {
                  日期: '1/6',
                  访问用户: 4593,
                  下单用户: 4293,
                  下单率: 0.78
                }
              ],
              options: {}
            },
            apis: {
              labelMap: {
                x: '类目',
                y: '值',
                s: '系列1'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '条形图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 50,
                top: 60,
                right: 50,
                bottom: 50
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                name: '',
                position: 'bottom',
                nameLocation: 'middle',
                nameTextStyle: {
                  color: '#fff',
                  fontSize: '12',
                  //   align: "right",
                  padding: [30, 0, 0, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              yAxis: {
                name: '单位:个',
                position: 'left',
                // nameLocation: 'middle',
                nameTextStyle: {
                  color: '#fff',
                  fontSize: 12,
                  padding: [0, 0, 30, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              series: {
                selectedMode: 'single',
                label: {
                  show: false,
                  color: '#fff',
                  fontSize: 12,
                  position: 'inside'
                  // offset: [0, 1]
                },
                barWidth: '20%', // 可选
                barGap: '40%',
                barCategoryGap: '40%',
                itemStyle: {
                  normal: {}
                }
              },
              color: DEFAULT_COLORS
            },
            view: {
              width: 500,
              height: 450,
              x: 710,
              y: 340
            }
          },
          {
            title: '饼图',
            name: 've-pie',
            chartType: 'v-pie',
            icon: '饼图.png',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393
                },
                {
                  日期: '1/2',
                  访问用户: 3530
                },
                {
                  日期: '1/3',
                  访问用户: 2923
                },
                {
                  日期: '1/4',
                  访问用户: 1723
                },
                {
                  日期: '1/5',
                  访问用户: 3792
                },
                {
                  日期: '1/6',
                  访问用户: 4593
                }
              ],
              options: {}
            },
            apis: {},
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '饼图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 20,
                top: 60,
                right: 20,
                bottom: 30
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              yAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              series: {
                // selectedMode: 'single',
                label: {
                  show: true,
                  color: '',
                  fontSize: 12,
                  position: 'outside', // 可选inside
                  formatter: '{b}: {@2012} ({d}%)',
                  formatterSelect: ['{b}', '{@2012}', '({d}%)']
                },
                // 选中时样式
                select: {
                  itemStyle: {
                    normal: {}
                  }
                },
                roseType: false, // 饼图可选玫瑰图
                center: ['50%', '50%'], // 饼图可选
                radius: ['0', '70%'], // 饼图可选
                itemStyle: {
                  normal: {}
                }
              },
              color: DEFAULT_COLORS
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '雷达图',
            name: 've-radar',
            chartType: 'v-radar',
            icon: 'icon_radar_map.png',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户', '下单用户', '下单率', '日期'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393,
                  下单用户: 1093,
                  下单率: 0.32
                },
                {
                  日期: '1/2',
                  访问用户: 3530,
                  下单用户: 3230,
                  下单率: 0.26
                },
                {
                  日期: '1/3',
                  访问用户: 2923,
                  下单用户: 2623,
                  下单率: 0.76
                },
                {
                  日期: '1/4',
                  访问用户: 1723,
                  下单用户: 1423,
                  下单率: 0.49
                }
              ],
              options: {}
            },
            apis: {
              labelMap: {
                // 'x': '类目',
                // 'y': '值',
                // 's': '系列1'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '雷达图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 20,
                top: 60,
                right: 20,
                bottom: 30
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              radar: {
                // 雷达图可选
                shape: 'circle', // polygon, circle
                center: ['50%', '60%'],
                radius: '75%',
                name: {
                  formatter: '{value}',
                  textStyle: {
                    fontSize: 12, // 外圈标签字体大小
                    color: '#fff' // 外圈标签字体颜色
                  }
                },
                splitArea: {
                  areaStyle: {
                    color: 'transparent', // 圆环颜色
                    shadowColor: 'aqua', // 圆颜色
                    shadowBlur: 10
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#fff' // 分割线
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#fff', // 圆线
                    width: 1
                  }
                }
              },
              xAxis: {
                show: false
              },
              yAxis: {
                show: false
              },
              series: {
                type: 'radar',
                selectedMode: 'single',
                label: {
                  show: false,
                  color: '',
                  fontSize: 12,
                  position: 'inside' // 可选inside
                },
                areaStyle: {
                  // 可选的
                  opacity: 0.3
                },
                itemStyle: {
                  normal: {}
                }
              },
              color: DEFAULT_COLORS
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '仪表盘',
            name: 've-gauge',
            chartType: 'v-gauge',
            icon: '图表-雷达图.png',
            type: '2',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['type', 'value'],
              rows: [
                {
                  type: 'speed',
                  value: 60
                }
              ],
              options: {}
              // source: [
              //   { x: 'type', y: 60, s: 'value' }
              // ]
            },
            apis: {
              labelMap: {
                x: '类目',
                y: '值',
                s: '系列1'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '仪表盘',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              tooltip: {
                show: false
              },
              grid: {
                left: 0,
                top: 60,
                right: 0,
                bottom: 30
              },
              xAxis: {
                show: false
              },
              yAxis: {
                show: false
              },
              legend: {
                show: false,
                orient: 'horizontal',
                data: [],
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              series: {
                name: '',
                selectedMode: 'single',
                type: 'gauge',
                center: ['50%', '50%'],
                radius: '80%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                  show: true,
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, '#f5c942']],
                    shadowColor: '#ccc',
                    shadowBlur: 2,
                    width: 15
                  }
                },
                splitLine: {
                  show: true,
                  length: 25, // 刻度节点线长度
                  lineStyle: {
                    width: 2,
                    color: '#fff'
                  } // 刻度节点线
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: 14,
                    color: '#fff'
                  }
                },
                // title: {
                //   show: true
                // },
                detail: {
                  show: true
                },
                pointer: {
                  // 指针样式
                  length: '60%'
                }
              }
              // color: DEFAULT_COLORS
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '地图',
            name: 've-map',
            type: '1',
            isEmpty: false,
            chartType: 'v-map',
            // fillType: 'area', // area/dot
            // labelType: 'area',
            icon: 'icon_map.png',
            modelId: '',
            api_data: {
              //   columns: ['位置', '人口'],
              //   rows: [
              //     { 位置: '从化区', 人口: 50 },
              //     { 位置: '白云区', 人口: 90 },
              //     { 位置: '南沙区', 人口: 100 }
              //   ],
            },
            apis: {
              mapOrigin: guangzhou,
              position: 'guangzhou',
              labelMap: {
                x: '位置',
                y: '人口',
                s: '系列1'
              },
              selectedMode: false
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '地图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: { left: 0, top: 10, right: 0, bottom: 10 },
              legend: {
                show: false,
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemStyle: {
                  color: DEFAULT_COLORS[0]
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                orient: 'horizontal',
                data: ['人口']
              },
              xAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              yAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              // 地图独有的
              geo: {
                type: 'map',
                map: 'guangzhou',
                aspectScale: 0.75,
                zoom: 1.1,
                roam: false,
                // mapLocation: {
                //   x: 'left',
                //   y: 'top'
                // },
                label: {
                  normal: {
                    show: false,
                    color: '#fff'
                  },
                  emphasis: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(1, 33, 92, 0.45)',
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 2,
                    shadowColor: 'rgba(0,54,255, 1)',
                    shadowBlur: 100
                  },
                  emphasis: {
                    borderColor: '#073684',
                    areaColor: '#061E3D'
                  }
                }
              },
              series: []
              //   color: DEFAULT_COLORS
            },
            view: { width: 300, height: 500, x: 710, y: 290 }
          },
          {
            title: '环形图',
            name: 've-pie',
            chartType: 'v-ring',
            icon: 'CHART-环形图.png',
            type: '2',
            modelId: '',
            api_data: {
              columns: ['日期', '访问用户'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 3530
                },
                {
                  日期: '1/2',
                  访问用户: 1393
                }
              ],
              options: {}
            },
            apis: {
              hoverAnimation: false,
              labelMap: {
                x: '类目',
                y: '值',
                s: '系列1'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '环形图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              chartTitle: {
                show: true,
                text: '70%',
                x: 'center',
                y: 'center',
                itemGap: 20,
                textStyle: {
                  color: '#ffffff',
                  fontFamily: 'not specified',
                  fontSize: 20,
                  fontWeight: 'normal'
                }
              },
              tooltip: {
                show: false
              },
              grid: {
                left: 20,
                top: 20,
                right: 20,
                bottom: 30
              },
              legend: {
                show: false,
                orient: 'horizontal',
                data: [],
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                show: false
              },
              yAxis: {
                show: false
              },
              series: {
                radius: ['60%', '70%'],
                center: ['50%', '50%'],
                label: {
                  normal: {
                    show: false,
                    position: 'center',
                    textStyle: {
                      fontSize: '30'
                    }
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                itemStyle: {
                  normal: {}
                }
              },
              color: ['#0185FE', '#9ED1FF']
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '嵌套饼图',
            name: 've-pie',
            chartType: 'v-multiPie',
            icon: 'icon_pie_chart.png',
            // iconFont: 'icon-Pie-chart',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393
                },
                {
                  日期: '1/2',
                  访问用户: 3530
                },
                {
                  日期: '1/3',
                  访问用户: 2923
                },
                {
                  日期: '1/4',
                  访问用户: 1723
                },
                {
                  日期: '1/5',
                  访问用户: 3792
                },
                {
                  日期: '1/6',
                  访问用户: 4593
                }
              ],
              options: {}
            },
            apis: {
              level: [['1/1', '1/2', '1/3'], ['1/4', '1/5']],
              labelMap: {
                x: '类目',
                y: '值',
                s: '系列1'
              },
              radius: 100
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '嵌套饼图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 20,
                top: 60,
                right: 20,
                bottom: 30
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              yAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              series: {
                label: {
                  show: true,
                  color: '',
                  fontSize: 12,
                  position: 'outside', // 可选inside
                  formatter: '{b}: {@2012} ({d}%)'
                },
                center: ['50%', '50%'] // 饼图可选
              },
              color: DEFAULT_COLORS
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '散点图',
            name: 've-scatter',
            chartType: 'v-scatter',
            icon: 'icon_pie_chart.png',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              dimensions: [],
              measures: [],
              source: {},
              origin_source:{},//原始数据
              columns: [
                // 'x','y','日期'
              ],
              rows: [
                // { 日期: '1/1', x: 1393, y: 1093 },
                // { 日期: '1/2', x: 3530, y: 3230 },
                // { 日期: '1/3', x: 2923, y: 2623 },
                // { 日期: '1/4', x: 1723, y: 1423 },
                // { 日期: '1/5', x: 3792, y: 3492 },
                // { 日期: '1/6', x: 4593, y: 4293 }
              ],
              options: {},
            },
            apis: {
              // level: [['1/1', '1/2', '1/3'], ['1/4', '1/5']],
              labelMap: {
                x: '值',
                y: '值',
                s: '类目'
              },
              radius: 100,
              // 自定义参数
              scatterColor: '1', //散点颜色 0单色 1按维度
              scatterSize: '', //散点大小  0：按度量1  1：按度量2  默认空，为无
              scatterLabel: [], //指标-显示内容
              arrange: 'horizontal', //指标-排列 horizontal水平  vertical垂直
              scatterTargetColor: '0', //0使用图例 1：自定义
              xMax: 1000, //度量1 最大值
              yMax: 1000 //度量2 最大值
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '散点图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              tooltip: {
                show: true,
                trigger: 'item',
                confine: true,
                formatter: ''
              },
              grid: {
                left: 50,
                top: 60,
                right: 50,
                bottom: 50
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                data: ['广州1', '广州2', '广州3']
              },
              xAxis: {
                type: 'value',
                name: '',
                nameLocation: 'middle',
                nameGap: 20,
                nameTextStyle: {
                  color: '#fff',
                  fontSize: '12',
                  align: 'right',
                  padding: [30, 0, 0, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: true
                }
              },
              yAxis: {
                type: 'value',
                name: '',
                position: 'left',
                nameLocation: 'middle',
                nameTextStyle: {
                  color: '#fff',
                  fontSize: 12,
                  padding: [0, 0, 40, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#fff'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    type: 'solid',
                    color: '#fff'
                  }
                },
                axisTick: {
                  show: false
                }
              },
              series: {
                name: '',
                type: 'scatter',
                symbolSize: 15,
                label: {
                  show: false,
                  color: '',
                  fontSize: 12,
                  position: 'outside', // 可选inside
                  align: 'left',
                  offset: [-10, 0]
                },
                data: [
                  {
                    label: '广州1',
                    data: [
                      {
                        name: '',
                        value: [1000, 1000, '广州1', 'x', 'y', '地区']
                      },
                      {
                        name: '',
                        value: [130, 1050, '广州1', 'x', 'y', '地区']
                      }
                    ]
                  },
                  {
                    label: '广州2',
                    data: [
                      {
                        name: '',
                        value: [550, 700, '广州2', 'x', 'y', '地区']
                      },
                      {
                        name: '',
                        value: [660, 120, '广州2', 'x', 'y', '地区']
                      }
                    ]
                  },
                  {
                    label: '广州3',
                    data: [
                      {
                        name: '',
                        value: [660, 700, '广州3', 'x', 'y', '地区']
                      },
                      {
                        name: '',
                        value: [880, 120, '广州3', 'x', 'y', '地区']
                      }
                    ]
                  }
                ]
              },
              color: DEFAULT_COLORS
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '旭日图',
            name: 've-sun',
            chartType: 'v-sun',
            icon: 'icon_pie_chart.png',
            // iconFont: 'icon-Pie-chart',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户'],
              rows: [],
              options: {}
            },
            apis: {},
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '旭日图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 20,
                top: 60,
                right: 20,
                bottom: 30
              },
              legend: {
                show: true,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              yAxis: {
                show: false,
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#cccccc'
                  }
                }
              },
              series: {
                label: {
                  show: true,
                  color: '',
                  fontSize: 12,
                  position: 'outside', // 可选inside
                  formatter: '{b}: {@2012} ({d}%)'
                },
                center: ['50%', '50%'] // 饼图可选
              },
              color: DEFAULT_COLORS
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '矩形树图',
            name: 've-tree',
            chartType: 'v-treemap',
            icon: 'icon_pie_chart.png',
            // iconFont: 'icon-Pie-chart',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              dimensions: [],
              measures: [],
              source: {},
              columns: [],
              rows: [],
              options: {}
            },
            apis: {
              labelMap: {
                x: '值',
                y: '值',
                s: '类目'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '矩形树图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              grid: {
                left: 50,
                top: 60,
                right: 50,
                bottom: 50
              },
              legend: {
                show: false,
                orient: 'horizontal',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                itemGap: 12,
                icon: '',
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              visualMap: {
                show: true,
                type: 'continuous',
                orient: 'horizontal',
                dimension: 1,
                max: 0,
                textStyle: {
                  color: '#ffffff',
                  fontSize: 12
                },
                inRange: {
                  color: ['#ffff0d', '#f69f2e']
                },
                itemGap: 12,
                left: 'center',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
              },
              xAxis: {
                type: 'value',
                name: '',
                nameLocation: 'middle',
                nameGap: 20,
                nameTextStyle: {
                  color: '#fff',
                  fontSize: '12',
                  align: 'right',
                  padding: [30, 0, 0, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12,
                  rotate: 0
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                }
              },
              yAxis: {
                type: 'value',
                name: '',
                position: 'left',
                nameLocation: 'middle',
                nameTextStyle: {
                  color: '#fff',
                  fontSize: 12,
                  padding: [0, 0, 40, 0]
                },
                axisLabel: {
                  color: '#ffffff',
                  fontSize: 12
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                }
              },
              series: {
                name: '矩形树图',
                type: 'treemap',
                recSize: 'value', // 矩形大小依据度量等比或所有矩形等大(none)
                recDimensionIndex: 0, // 矩形颜色(即视觉映射的维度)
                visualMaxList: [],
                // 由于visualMap数组中的颜色定义, 即使隐藏了也会优先取piecewise的颜色集, 所以这里才去分开记录重新赋值到visualMap的方式解决
                continuousColors: ['#ffff0d', '#f69f2e'],
                piecewiseColors: ['#f69f2e', '#0fabf1', '#ed8693', '#ffff0d', '#0d8686'],
                breadcrumb: { show: false },
                tooltip: {
                  show: true,
                  formatter: '{b} {c}'
                },
                // 由于JSON.stringfy不支持转换function类型, 所以需要2个数组记录formatter的字段
                tooltipShowList: [], // 记录tooltip需要展示的字段
                labelShowList: [], // 记录label需要展示的字段
                label: {
                  show: true,
                  align: 'center',
                  position: 'inside',
                  fontSize: 12,
                  color: '#fff',
                  ellipsis: true,
                  formatter: '{b}'
                },
                emphasis: {
                  upperLabel: {
                    show: true,
                    align: 'center',
                    position: 'inside',
                    height: 30
                  }
                },
                itemStyle: {
                  color: 'transparent',
                  borderWidth: 0.2
                },
                data: [
                  {
                    name: '广东省',
                    value: [1000, 1000],
                    children: [
                      {
                        name: '广州市',
                        value: [800, 800]
                      },
                      {
                        name: '深圳市',
                        value: [100, 100]
                      },
                      {
                        name: '东莞市',
                        value: [100, 100]
                      }
                    ]
                  },
                  {
                    name: '江苏省',
                    value: [1000, 1000],
                    children: [
                      {
                        name: '南京市',
                        value: [700, 700]
                      },
                      {
                        name: '苏州市',
                        value: [200, 200]
                      },
                      {
                        name: '无锡市',
                        value: [100, 100]
                      }
                    ]
                  }
                ]
              },
              // color: DEFAULT_COLORS
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '矩形热力图',
            name: 've-heatmap',
            chartType: 'e-heat',
            icon: 'icon_pie_chart.png',
            // iconFont: 'icon-Pie-chart',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              dimensions: [],
              measures: [],
              source: {},
              columns: [],
              rows: [],
              options: {}
            },
            apis: {
              labelMap: {
                x: '值',
                y: '值',
                s: '类目'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                show: true,
                content: '矩形热力图',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              tooltip: {
                position: 'top'
              },
              grid: {
                height: '50%',
                top: '10%'
              },
              xAxis: {
                type: 'category',
                data: [
                  '1a',
                  '2a',
                  '3a',
                  '4a',
                  '5a',
                  '6a',
                  '7a',
                  '8a',
                  '9a',
                  '10a',
                  '11a',
                  '12a'
                ],
                splitArea: {
                  show: true
                }
              },
              yAxis: {
                type: 'category',
                data: [
                  'Saturday',
                  'Friday',
                  'Thursday',
                  'Wednesday',
                  'Tuesday',
                  'Monday',
                  'Sunday'
                ],
                splitArea: {
                  show: true
                }
              },
              visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
              },
              series: {
                name: 'Punch Card',
                type: 'heatmap',
                data: [
                  ['1a', 'Sunday', 2],
                  ['2a', 'Saturday', 4],
                  ['3a', 'Friday', 6],
                  ['4a', 'Saturday', 8],
                  ['5a', 'Thursday', 10],
                  ['6a', 'Saturday', 1],
                  ['7a', 'Wednesday', 2],
                  ['8a', 'Saturday', 3],
                  ['9a', 'Tuesday', 24],
                  ['10a', 'Saturday', 5],
                  ['11a', 'Monday', 20],
                  ['12a', 'Saturday', 12]
                ],
                label: {
                  show: true
                }
                // emphasis: {
                //   itemStyle: {
                //     shadowBlur: 10,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                //   }
                // }
              },
              color: DEFAULT_COLORS
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '立体饼图',
            name: 'high-pie',
            chartType: 'high-pie',
            icon: 'icon_pie_chart.png',
            // iconFont: 'icon-Pie-chart',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户'],
              rows: [
                {
                  日期: '1/1',
                  访问用户: 1393
                },
                {
                  日期: '1/2',
                  访问用户: 3530
                },
                {
                  日期: '1/3',
                  访问用户: 2923
                },
                {
                  日期: '1/4',
                  访问用户: 1723
                },
                {
                  日期: '1/5',
                  访问用户: 3792
                },
                {
                  日期: '1/6',
                  访问用户: 4593
                }
              ],
              options: {}
            },
            apis: {},
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              // title: {
              //   show: true,
              //   content: '立体饼图',
              //   textAlign: 'left',
              // textStyle: {
              //   color: '#ffffff',
              //   fontSize: 20,
              //   fontFamily: 'not specified',
              //   fontWeight: 'normal'
              // }
              // },
              //去掉右下角广告
              credits: {
                enabled: false
              },
              colors: '#058DC7,#50B432,#ED561B,#DDDF00,#24CBE5,#64E572,#FF9655,#FFF263,#6AF9C4'.split(
                ','
              ),
              chart: {
                backgroundColor: 'rgba(0,0,0,0)', //背景透明
                plotBackgroundImage: '', //背景图片
                borderColor: '#335cad', //边框颜色
                borderWidth: 0, //边框宽度
                borderRadius: 0, //边框圆角
                type: 'pie',
                reflow: true,
                options3d: {
                  enabled: true, //使用3d功能
                  alpha: 60, //延y轴向内的倾斜角度
                  beta: 0
                }
              },
              //标题属性设置
              title: {
                text: '立体饼图',
                content: '立体饼图',
                align: 'center', //对齐方式left center right
                style: {
                  //标题属性设置（字体、颜色、大小，粗细）
                  fontFamily: '微软雅黑',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '20'
                }
              },
              //图例属性设置
              legend: {
                shadow: false, //图例阴影
                enabled: true, //是否显示图例
                layout: 'horizontal', //horizontal(水平) vertical(垂直)
                align: 'center', //水平对齐，有left（左），centerr（中），右（right）
                verticalAlign: 'top', //垂直对齐，有top（上），middle（中），下（bottom）
                itemStyle: {
                  cursor: 'pointer',
                  fontSize: '20',
                  color: '#fff'
                }
              },
              //图形种类配置
              plotOptions: {
                pie: {
                  allowPointSelect: true, //每个扇块能否选中
                  cursor: 'pointer', //鼠标指针
                  depth: 45, //饼图厚度
                  center: ['50%', '50%'], //图形中心位置
                  size: '80%', //饼图外圈直径大小
                  innerSize: 0, //饼图的内圈直径大小
                  showInLegend: true, //是否显示图利
                  //数据引导线
                  dataLabels: {
                    enabled: true, //是否显示饼图的线形tip
                    color: '#fff',
                    distance: '30%', //显示位置，正数外部，负数在图形中
                    format:
                      '{point.name}：{point.y}（{point.percentage:.1f}%）',
                    style: {
                      fontSize: 12,
                      textOutline: 'none' //去掉文字白边
                    }
                  }
                }
              },
              series: [
                {
                  type: 'pie',
                  name: '图形占比',
                  //模块名和所占比，也可以{name: '测试1',y: 12}
                  data: [
                    {
                      name: 'Chrome',
                      y: 61.41
                    },
                    {
                      name: 'Internet Explorer',
                      y: 11.84
                    },
                    {
                      name: 'Firefox',
                      y: 10.85
                    },
                    {
                      name: 'Edge',
                      y: 4.67
                    },
                    {
                      name: 'Safari',
                      y: 4.18
                    },
                    {
                      name: 'Other',
                      y: 7.05
                    }
                  ]
                }
              ]
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '立体柱形图',
            name: 'high-pie',
            chartType: 'high-column',
            icon: 'icon_pie_chart.png',
            // iconFont: 'icon-Pie-chart',
            type: '1',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: ['日期', '访问用户'],
              rows: [],
              options: {}
            },
            apis: {},
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              //去掉右下角广告
              credits: {
                enabled: false
              },
              colors: '#058DC7,#50B432,#ED561B,#DDDF00,#24CBE5,#64E572,#FF9655,#FFF263,#6AF9C4'.split(
                ','
              ),
              chart: {
                backgroundColor: 'rgba(0,0,0,0)', //背景透明
                plotBackgroundImage: '', //背景图片
                borderColor: '#335cad', //边框颜色
                borderWidth: 0, //边框宽度
                borderRadius: 0, //边框圆角
                type: 'column', //cylinder圆柱
                reflow: true,
                //图形边距
                marginTop: 100,
                marginBottom: 60,
                marginLeft: 60,
                marginRight: 60,

                options3d: {
                  enabled: true,
                  alpha: 0,
                  beta: 30,
                  depth: 60,
                  viewDistance: 25
                }
              },
              //标题属性设置
              title: {
                text: '立体柱形图',
                content: '立体柱形图',
                align: 'center', //对齐方式left center right
                style: {
                  //标题属性设置（字体、颜色、大小，粗细）
                  fontFamily: '微软雅黑',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '20'
                }
              },
              //图例属性设置
              legend: {
                shadow: false, //图例阴影
                enabled: true, //是否显示图例
                layout: 'horizontal', //horizontal(水平) vertical(垂直)
                align: 'center', //水平对齐，有left（左），centerr（中），右（right）
                verticalAlign: 'top', //垂直对齐，有top（上），middle（中），下（bottom）
                itemStyle: {
                  cursor: 'pointer',
                  fontSize: '20',
                  color: '#fff'
                }
              },
              xAxis: {
                type: 'category',
                visible: true,
                gridLineColor: '#fff', //网格线颜色
                gridLineWidth: 0, //纵向网格线宽度
                labels: {
                  rotation: 0,
                  style: {
                    color: '#fff',
                    fontSize: 12,
                    fontFamily: '微软雅黑'
                  }
                },
                title: {
                  text: '',
                  fontSize: 12,
                  align: 'high', //"low"，"middle" 和 "high
                  style: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              yAxis: {
                type: 'value',
                visible: true,
                gridLineColor: '#fff', //网格线颜色
                gridLineWidth: 1, //纵向网格线宽度
                labels: {
                  style: {
                    color: '#fff',
                    fontSize: 12,
                    fontFamily: '微软雅黑'
                  }
                },
                title: {
                  text: '',
                  fontSize: 12,
                  align: 'middle', //"low"，"middle" 和 "high
                  style: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              //图形种类配置
              plotOptions: {
                // series: {
                //   depth: 25,
                //   colorByPoint: true
                // }
                column: {
                  depth: 25,
                  //是否显示数值
                  dataLabels: {
                    enabled: true, //设置显示对应y的值
                    inside: false, //是否显示在内部
                    color: '#fff',
                    style: {
                      fontSize: 13,
                      textOutline: 'none' //去掉文字白边
                    }
                  },
                  stacking: null //null（不进行堆叠）、"normal"（普通堆叠） 和 "percent"（百分比堆叠
                }
              },
              series: [
                {
                  // type: 'pie',
                  name: '图形占比',
                  //模块名和所占比，也可以{name: '测试1',y: 12}
                  data: [
                    {
                      name: 'Chrome',
                      y: 61.41
                    },
                    {
                      name: 'Internet Explorer',
                      y: 11.84
                    },
                    {
                      name: 'Firefox',
                      y: 10.85
                    },
                    {
                      name: 'Edge',
                      y: 4.67
                    },
                    {
                      name: 'Safari',
                      y: 4.18
                    },
                    {
                      name: 'Other',
                      y: 7.05
                    }
                  ]
                }
              ]
            },
            chartEvents: {
              click: chartClick
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          }

          //   {
          //     title: '高德地图',
          //     name: 'a-map',
          //     chartType: 'a-map',
          //     type: '4',
          //     icon: 'icon_map.png',
          //     api_data: {},
          //     apis: {},
          //     modelId: '',
          //     canEdit: true,
          //     background: {
          //       backgroundType: '1',
          //       backgroundColor: '',
          //       borderColor: '',
          //       borderWidth: 0,
          //       borderStyle: '',
          //       borderRadius: 0
          //     },
          //     config: {
          //       title: {
          //         textAlign: 'left',
          //         textStyle: {
          //           color: '#ffffff',
          //           fontSize: 20,
          //           fontFamily: 'not specified',
          //           fontWeight: 'normal'
          //         }
          //       }
          //     },
          //     view: { width: 500, height: 400, x: 710, y: 340 }
          //   }
        ]
      }
    ]
  },
  {
    type: 'Tool',
    title: '添加控件',
    hovered: false,
    icon: 'menu',
    tabs: [
      {
        title: '添加控件',
        children: [
          {
            title: '文本',
            name: 've-text',
            chartType: 'v-text',
            type: '2',
            icon: 'icon_add.png',
            api_data: {},
            apis: {},
            modelId: '',
            canEdit: true,
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              title: {
                total: '',
                content: '文本',
                text: '',
                textAlign: 'left',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              }
            },
            view: {
              width: 500,
              height: 400,
              x: 710,
              y: 340
            }
          },
          {
            title: '图片',
            name: 've-image',
            chartType: 'v-image',
            icon: 'icon_Uploadphotos.png',
            modelId: '',
            api_data: {},
            apis: {},
            config: {
              noTitle: true,
              title: {
                content: '图片'
              }
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          },
          {
            title: '表格',
            name: 've-tables',
            chartType: 'v-tables',
            icon: 'icon_time.png',
            type: '3',
            modelId: '',
            isEmpty: false,
            api_data: {
              columns: [
                {
                  title: '日期',
                  dataIndex: 'date',
                  key: 'date',
                  scopedSlots: {
                    customRender: 'date'
                  }
                },
                {
                  title: '访问用户',
                  dataIndex: 'user1',
                  key: 'user1',
                  width: 80
                },
                {
                  title: '下单用户',
                  dataIndex: 'user2',
                  key: 'user2',
                  ellipsis: true
                },
                {
                  title: '下单率',
                  dataIndex: 'rate',
                  key: 'rate',
                  ellipsis: true
                }
              ],
              rows: [
                {
                  // key: '1',
                  date: '1/1',
                  user1: 1393,
                  user2: '1093',
                  rate: '10%'
                },
                {
                  // key: '2',
                  date: '1/2',
                  user1: 2341,
                  user2: '2312',
                  rate: '12%'
                },
                {
                  // key: '3',
                  date: '1/3',
                  user1: 2378,
                  user2: '2555',
                  rate: '34%'
                },
                {
                  // key: '4',
                  date: '1/4',
                  user1: 3256,
                  user2: '5488',
                  rate: '45%'
                },
                {
                  // key: '5',
                  date: '1/5',
                  user1: 3452,
                  user2: '3210',
                  rate: '33%'
                },
                {
                  // key: '6',
                  date: '1/6',
                  user1: 1234,
                  user2: '3321',
                  rate: '30%'
                }
              ],
              options: {}
            },
            apis: {},
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            config: {
              index: {
                show: false
              },
              title: {
                show: true,
                content: '表格',
                textAlign: 'left',
                textStyle: {
                  color: '#fff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              header: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'left'
                },
                backgroundColor: ''
              },
              table: {
                textStyle: {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'left'
                },
                oddBackgroundColor: '',
                evenBackgroundColor: '',
                pageSize: 10,
                ellipsis: true
              }
            },
            view: {
              width: 500,
              height: 400,
              x: 710,
              y: 340
            } // 计算中间值(1920-500)*0.5,(1080-400)*0.5
          },
          {
            title: '进度条',
            name: 'steepBar',
            chartType: 'steepBar',
            icon: 'icon-zhexian3.png',
            type: '2',
            modelId: '',
            api_data: {},
            apis: {},
            config: {
              title: {
                show: true,
                content: '进度条',
                textAlign: 'left',
                textStyle: {
                  color: '#fff',
                  fontSize: 20,
                  fontFamily: 'not specified',
                  fontWeight: 'normal'
                }
              },
              common: {
                height: 5,
                targetValue: 100,
                isShowValue: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 20
                },
                location: 'inside' // inside/outside
              },
              buttonBar: {
                background: '#f5f5f5',
                borderRadius: 100
              },
              valueBar: {
                backgroundType: '1',
                background: '#1890ff',
                lineColor: ['#108ee9', '#87d068'],
                radialColor: ['#108ee9', '#87d068'],
                borderRadius: 100
              } // 背景类型(单色:1||线性渐变:2||径向渐变:3)
            },
            background: {
              backgroundType: '1',
              backgroundColor: '',
              borderColor: '',
              borderWidth: 0,
              borderStyle: '',
              borderRadius: 0
            },
            view: {
              width: 400,
              height: 200,
              x: 760,
              y: 340
            }
          }
        ]
      }
    ]
  },
  {
    type: 'Figure',
    title: '添加图形',
    hovered: false,
    icon: 'scissor',
    tabs: [
      {
        title: '添加图形',
        children: [
          {
            key: 0,
            name: 'figure',
            title: '直线',
            chartType: 'line',
            icon: 'icon_addteb.png',
            modelId: '',
            config: {
              title: '直线',
              noTitle: true, // 默认写死没有标题
              name: 'figure',
              style: {
                backgroundColor: 'transparent',
                opacity: 1,
                borderColor: '#fff',
                borderRadius: 0,
                borderWidth: 20,
                borderStyle: 'solid',
                shadowColor: '#fff',
                showShadow: false
              }
            },
            api_data: {},
            apis: {},
            view: {
              width: 400,
              height: 20,
              x: 760,
              y: 340,
              rotate: 0
            }
          },
          {
            key: 1,
            name: 'figure',
            title: '圆形',
            chartType: 'circle',
            icon: 'icon_addteb.png',
            modelId: '',
            config: {
              title: '圆形',
              noTitle: true, // 默认写死没有标题
              name: 'figure',
              style: {
                backgroundColor: '#fff',
                opacity: 1,
                borderColor: '#000',
                borderRadius: '50%',
                borderWidth: 1,
                borderStyle: 'solid'
              }
            },
            api_data: {},
            apis: {},
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340,
              rotate: 0
            }
          },
          {
            key: 2,
            name: 'figure',
            title: '矩形',
            chartType: 'rectangle',
            icon: 'icon_addteb.png',
            modelId: '',
            config: {
              title: '矩形',
              noTitle: true, // 默认写死没有标题
              name: 'figure',
              style: {
                backgroundColor: '#fff',
                opacity: 1,
                borderColor: '#000',
                borderRadius: 0,
                borderWidth: 1,
                borderStyle: 'solid'
              }
            },
            api_data: {},
            apis: {},
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340,
              rotate: 0
            }
          }
        ]
      }
    ]
  },
  {
    type: 'Base',
    title: '素材库',
    hovered: false,
    icon: 'database',
    tabs: [
      {
        title: '图片',
        children: [
          {
            key: 0,
            name: 'material',
            chartType: 'material',
            icon: 'icon_addteb.png',
            modelId: '',
            api_data: {},
            apis: {},
            isEmpty: false,
            imgName: 'test',
            url:
              'http://10.10.20.66:8080/profile/avatar/2021/04/12/0f4667b1-34a6-44f6-a503-c815534a0efb.gif',
            view: {
              width: 400,
              height: 400,
              x: 760,
              y: 340
            }
          }
        ]
      }
    ]
  }
  // {
  //     type: 'Sort',
  //     title: '排序',
  //     hovered: false,
  //     icon: 'unordered-list',
  //     children: [{
  //             title: '上移一层'
  //         },
  //         {
  //             title: '下移一层'
  //         },
  //         {
  //             title: '置于顶层'
  //         },
  //         {
  //             title: '置于底层'
  //         }
  //     ]
  // },
  // {
  //     type: 'Theme',
  //     title: '主题风格',
  //     hovered: false,
  //     icon: 'bg-colors',
  //     children: []
  // },
  // {
  //     type: 'Recommend',
  //     title: '智能推荐',
  //     hovered: false,
  //     icon: 'compass',
  //     children: []
  // }
]

export default list
