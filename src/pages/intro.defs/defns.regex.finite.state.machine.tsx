import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<正規表現>"} 正規表現の表現のために使われ、正規表現に効率的にマッチすることを可能にする不特定のデータ構造</p>
</>

const DefnsRegexFiniteStateMachine: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.regex.finite.state.machine">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.22" title="finite state machine" link="/intro.defs/defns.regex.finite.state.machine" linkString="defns.regex.finite.state.machine" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.22" title="finite state machine" link="/intro.defs/defns.regex.finite.state.machine" linkString="defns.regex.finite.state.machine" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexFiniteStateMachine;