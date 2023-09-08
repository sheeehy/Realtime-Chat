import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    
    return (<div style={{height: '100vh'}}>
<PrettyChatWindow
projectId='7d367a00-f376-4f57-994b-c38da60e05d6'
username={props.user.username}
secret={props.user.secret}
style={{height: '100%'}} />
    </div>
    )
}

export default ChatsPage