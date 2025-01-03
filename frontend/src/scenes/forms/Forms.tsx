import {
    LemonButton,
    Link,
} from '@posthog/lemon-ui'
import { useValues } from 'kea'
import { PageHeader } from 'lib/components/PageHeader'
import { featureFlagLogic } from 'lib/logic/featureFlagLogic'
import { SceneExport } from 'scenes/sceneTypes'
import { urls } from 'scenes/urls'


import { formsLogic } from './formsLogic'

export const scene: SceneExport = {
    component: Forms,
    logic: formsLogic,
}

export function Forms(): JSX.Element {
    return (
        <div>
            <PageHeader
                buttons={
                    <>
                        <LemonButton
                            to={'#TODO'}
                            type="primary"
                            data-attr="new-form"
                        >
                            New waitlist
                        </LemonButton>
                    </>
                }
                caption={
                    <>
                        TODO Link to form docs up here
                    </>
                }
            />
            Hello world
        </div>
    )
}