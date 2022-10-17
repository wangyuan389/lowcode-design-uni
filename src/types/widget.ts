/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-05-07 13:57:09
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-17 16:29:56
 */
export interface Widget {
  id: String;
  componentName: String;
  title: String;
  describe?: String;
  npm?: any;
  props: WidgetProps;
}

export interface WidgetProps {
  name: String;
  label: String;
  type: String;
  defaultValue: String;
  children?: any[];
  setter?: String;
}
