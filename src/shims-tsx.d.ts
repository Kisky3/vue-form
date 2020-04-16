import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  /**
   * Event周りの拡張
   * VueはEvent型がほとんど用意されていないので自前で作成
   */
  type VueEvent<T> = Event & {
    readonly target: T
  }

  /**
   * vee-validate拡張
   */
  interface ValidateObserverType extends Vue {
    validate({ silent }?: { silent?: boolean | undefined }): Promise<boolean>
  }

  /**
   * アプリケーション固有の拡張
   */
  // propertyを動的に検証したい（例：object[key]で使うなど）場合はこのinterfaceで拡張する
  interface StringKeyObject {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
