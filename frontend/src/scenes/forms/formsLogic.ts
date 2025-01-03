import { afterMount, connect, kea, listeners, path, selectors } from 'kea'
import { loaders } from 'kea-loaders'
import api from 'lib/api'
import { Scene } from 'scenes/sceneTypes'
import { teamLogic } from 'scenes/teamLogic'
import { urls } from 'scenes/urls'
import { userLogic } from 'scenes/userLogic'

import { Breadcrumb, Form } from '~/types'

import type { formsLogicType } from './formsLogicType'

export const formsLogic = kea<formsLogicType>([
    path(['scenes', 'forms', 'formsLogic']),
    connect(() => ({
        values: [userLogic, ['hasAvailableFeature'], teamLogic, ['currentTeam', 'currentTeamLoading']],
        actions: [teamLogic, ['loadCurrentTeam']],
    })),
    loaders({
        forms: {
            __default: [] as Form[],
            loadForms: async () => {
                const responseForms = await api.forms.list()
                return responseForms.results
            },
        },
    }),
    selectors({
        breadcrumbs: [
            () => [],
            (): Breadcrumb[] => [
                {
                    key: Scene.Forms,
                    name: 'Waitlists',
                    path: urls.forms(),
                },
            ],
        ]
    }),
    afterMount(({ actions }) => {
        actions.loadForms()
    }),
])
