// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import Email from 'src/views/apps/email/Email'

const EmailApp = ({ folder }) => {
  return <Email folder={folder} />
}

// getStaticPaths에서 리턴하지 않은 페이지는 모두 404로 연결
export const getStaticPaths = async () => {
  const res = await axios.get('/apps/email/allEmails')
  const data = await res.data.emails

  // 데이터들에서 folder를 찾아와서 여기에 있는지 검사
  const paths = data.map(mail => ({
    params: { folder: mail.folder }
  }))

  return {
    paths,
    fallback: false
  }
}

// 빌드시 알아서 함수를 실행하고, 그 props를 컴포넌트에 전달
// return하는 props를 활용하여 렌더링.. 여기서는 EmailApp = ({folder}) 이쪽으로 전달
// /posts/123으로 접근했다면 context.params는 { id: "123" }
export const getStaticProps = ({ params }) => {
  return {
    props: {
      folder: params?.folder
    }
  }
}

EmailApp.contentHeightFixed = true

export default EmailApp
