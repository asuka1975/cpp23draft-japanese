import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} １つ以上のスレッドが, それぞれ１つ以上の他スレッドが条件を満たすのを待つためにブロックすることで実行を継続できない状況</p>
</>

const DefnsDeadlock: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.deadlock">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.15" title="deadlock" link="/intro.defs/defns.deadlock" linkString="defns.deadlock" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.15" title="deadlock" link="/intro.defs/defns.deadlock" linkString="defns.deadlock" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDeadlock;