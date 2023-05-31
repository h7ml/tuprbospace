/**
 * @author        yunhu <yunhu@dtstack.com>
 * @date          2023-05-31 21:27:08
 * @lastModified  2023-05-31 21:41:16
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 21:27:08
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 21:41:12
 * @FilePath: \tuprbospace\packages\hooks\src\pages\Hooks\components\props\children.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
export const Children: React.FC<any> = (props) => {
  const { flag, children } = props
  return (
    <div style={{ border: '1px solid #000', padding: 20 }}>
      <div>我是子组件</div>
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>父组件传递的children：{children}</div>
    </div>
  )
}
