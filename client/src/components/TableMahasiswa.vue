<script setup lang="ts">
interface Props {
  mahasiswa: {
    name: string;
    class: string;
    score: number;
  }[];
}
defineProps<Props>();
</script>
<template>
  <table
    class="table-auto border-spacing border border-slate-500 border-spacing-3"
  >
    <thead class="bg-slate-500 text-white">
      <tr>
        <th class="text-start" scope="col">No</th>
        <th class="text-start" scope="col">Nama</th>
        <th class="text-start" scope="col">Kelas</th>
        <th class="text-start" scope="col">Nilai</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!mahasiswa.length">
        <td colspan="4" class="text-center">Tidak ada data</td>
      </tr>
      <tr
        v-for="(row, x) in mahasiswa"
        :key="x"
        class="table-item border border-slate-600"
      >
        <td class="text-center">{{ x + 1 }}</td>
        <td class="text-start">{{ row.name }}</td>
        <td class="text-center">{{ row.class }}</td>
        <td class="text-center">{{ row.score }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
th {
  text-align: start;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
td {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.table-item:nth-child(even) {
  background-color: #cbd5e1;
}
</style>
