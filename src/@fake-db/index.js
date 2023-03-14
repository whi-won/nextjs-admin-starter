import mock from './mock'

import './auth/jwt'
import './apps/email'

//Fake DB 사용시 해당 부분에 하위 데이터 Import 해야함

mock.onAny().passThrough()
