
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'modelos/tela/apresentacao', component: () => import('pages/modelos/tela/apresentacao.vue') },
      { path: 'modelos/tela/aula', component: () => import('pages/modelos/tela/aula.vue') },
      { path: 'modelos/tela/proposta', component: () => import('pages/modelos/tela/proposta.vue') },
      { path: 'modelos/destaque', component: () => import('pages/modelos/destaque/index.vue') },
      { path: 'modelos/imagem', component: () => import('pages/modelos/imagem/index.vue') },
      { path: 'modelos/navegacao', component: () => import('pages/modelos/navegacao/index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
