<template>
  <div class="crud-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>增删改查demo</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row class="operation" :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        过滤条件
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        全局按钮组
      </el-col>
    </el-row>

    <el-table
      class="table"
      stripe
      border
      :data="
        tableData.filter(
          data =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
    >
      <el-table-column label="Date" prop="date"> </el-table-column>
      <el-table-column label="Name" prop="name"> </el-table-column>
      <el-table-column align="right">
        <!-- <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CrudDemoPage extends Vue {
  tableData = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄"
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄"
    }
  ];

  search = "";

  currentPage = 1;

  handleEdit(index: any, row: any) {
    console.log(index, row);
  }
  handleDelete(index: any, row: any) {
    console.log(index, row);
  }

  handleSizeChange(val: any) {
    console.log(`每页 ${val} 条`);
  }
  handleCurrentChange(val: any) {
    console.log(`当前页: ${val}`);
  }
}
</script>

<style scoped lang="less">
@partMarginTop: 1rem;

.partMarginTop {
  margin-top: @partMarginTop;
}
.operation {
  &:extend(.partMarginTop);
}
.table {
  margin-top: @partMarginTop;
}
.pagination {
  text-align: center;
  margin-top: @partMarginTop;
}
</style>
