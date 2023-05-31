/**
 * @author        yunhu <yunhu@dtstack.com>
 * @date          2023-05-31 21:27:51
 * @lastModified  2023-05-31 21:41:44
 * Copyright © www.h7ml.cn All rights reserved
 */

import { useState } from 'react'
import { Button } from 'antd'
import { Children } from './children'

/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-31 21:27:51
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-31 21:40:13
 * @FilePath: \tuprbospace\packages\hooks\src\pages\Hooks\components\props\father.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
export const Father: React.FC<any> = () => {
  const [flag, setFlag] = useState<boolean>(false)
  return (
    <>
      <div>this is Father pages</div>
      <Children flag={flag}>
        {' '}
        <Button type="primary" onClick={() => setFlag(!flag)}>
          setFlag
        </Button>
      </Children>
    </>
  )
}
