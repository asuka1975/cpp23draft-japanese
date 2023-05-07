import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsLocaleSpecific: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.locale.specific">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.30" title="locale-specific behavior" link="/intro.defs/defns.locale.specific" linkString="defns.locale.specific" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.30" title="locale-specific behavior" link="/intro.defs/defns.locale.specific" linkString="defns.locale.specific" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsLocaleSpecific;