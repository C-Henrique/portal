import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração para excluir o arquivo "data.json" do build
  exclude: ['./src/assets/db/dado.json']
},)
