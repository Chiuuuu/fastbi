import router from '../../router'
import screenManage from '../../api/modules/screenManage'
import { Message } from 'ant-design-vue'
console.log(Message)
const app = {
    state: {
        pageSettings: { width: 1920, height: 1080, backgroundColor: '#0d2a42', gridStep: 1, backgroundSrc: '', backgroundType: 1, opacity: 1 },
        // 状态数据
        canvasRange: 0, // 画布缩放
        optionsExpand: true, // 参数面板打开关闭
        modelExpand: true, // 8-14数据模型面板
        coverageExpand: false, // 图层面板打开关闭
        isScreen: false, // 是否全屏
        screenId: '', // 大屏id
        fileName: ''
    },
    mutations: {
        SET_CANVAS_RANGE: (state, val) => {
            state.canvasRange = val
        },
        SET_OPTIONS_EXPAND: (state) => {
            state.optionsExpand = !state.optionsExpand
        },
        SET_MODEL_EXPAND: (state) => {
            state.modelExpand = !state.modelExpand
        },
        SET_COVERAGE_EXPAND: (state) => {
          state.coverageExpand = !state.coverageExpand
      },
        SET_PAGE_SETTING: (state, setting) => {
            state.pageSettings = { ...setting }
        },
        SET_IS_SCREEN: (state, val) => {
            state.isScreen = val
        },
        SET_SCREEN_ID: (state, val) => {
          state.screenId = val
        },
        SET_FILE_NAME(state, val) {
          state.fileName = val
        }
    },
    actions: {
        SetCanvasRange: ({ commit }, val) => {
            commit('SET_CANVAS_RANGE', val)
        },
        ToggleOptionsExpand: ({ commit }) => {
            commit('SET_OPTIONS_EXPAND')
        },
        ToggleModelExpand: ({ commit }) => {
            commit('SET_MODEL_EXPAND')
        },
        ToggleCoverageExpand: ({ commit }) => {
          commit('SET_COVERAGE_EXPAND')
      },
        SetPageSettings: ({ commit }, setting) => {
            commit('SET_PAGE_SETTING', setting)
        },
        SetIsScreen: ({ commit }, val) => {
            commit('SET_IS_SCREEN', val)
        },
        SetScreenId: ({ commit }, val) => {
          commit('SET_SCREEN_ID', val)
        },
        SetFileName({ commit }, val) {
          commit('SET_FILE_NAME', val)
        },
        // 保存大屏
        saveScreenData(store, mes) {
          const { commit, state, rootGetters } = store
          const json = {
            setting: state.pageSettings,
            components: rootGetters.canvasMap
          }
          let params = {
            json
          }
          if (!state.screenId) {
            params.id = -1
            params.name = router.history.current.query.name
            params.parentId = router.history.current.query.parentId
          } else {
            params.id = state.screenId
          }
          screenManage.saveScreen(params).then(res => {
            if (res.code === 200) {
              if (mes) {

              }
              commit('SET_SCREEN_ID', res.id)
            } else {
              this.$message.error(res.msg)
            }
          })
        }
    }
}

export default app
