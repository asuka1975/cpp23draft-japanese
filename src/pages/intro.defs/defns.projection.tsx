import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsProjection: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.projection">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.44" title="projection" link="/intro.defs/defns.projection" linkString="defns.projection" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.44" title="projection" link="/intro.defs/defns.projection" linkString="defns.projection" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProjection;