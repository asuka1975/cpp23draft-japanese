import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsDirectNonListInit: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.direct.non.list.init">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.18" title="direct-non-list-initialization" link="/intro.defs/defns.direct.non.list.init" linkString="defns.direct.non.list.init" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.18" title="direct-non-list-initialization" link="/intro.defs/defns.direct.non.list.init" linkString="defns.direct.non.list.init" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDirectNonListInit;