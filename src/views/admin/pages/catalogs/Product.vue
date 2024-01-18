<script setup>
import { computed, ref, unref, reactive } from 'vue';
import { Table } from 'ant-design-vue';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Tên',
    dataIndex: 'name',
  },
  {
    title: 'Hình ảnh',
    dataIndex: "image",
  },
  {
    title: 'Giá',
    dataIndex: 'price',
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
  },
  { 
    title: 'Ngày tạo',
    dataIndex: 'addedDate',
  },
  {
    title: 'Số lượng trang',
    dataIndex: 'pages',
  },
  {
    title: 'Thể loại',
    dataIndex: 'genre',
  }
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: i,
    name: `Edward King ${i}`,
    price: '120.000$',
    image: '',
    quantity: 56,
    addedDate: '1/18/2024',
    pages: 1200,
    genre: `Joke ${i}`,
  });
}
const selectedRowKeys = ref([]); // Check here to configure the default column

const onSelectChange = changableRowKeys => {
  console.log('selectedRowKeys changed: ', changableRowKeys);
  selectedRowKeys.value = changableRowKeys;
};
const rowSelection = computed(() => {
  return {
    selectedRowKeys: unref(selectedRowKeys),
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          selectedRowKeys.value = newSelectedRowKeys;
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          selectedRowKeys.value = newSelectedRowKeys;
        },
      },
    ],
  };
});

// Setting drawer
const form = reactive({
  name: '',
  url: '',
  owner: '',
  type: '',
  approver: '',
  dateTime: null,
  description: '',
});
const rules = {
  name: [
    {
      required: true,
      message: 'Please enter user name',
    },
  ],
  url: [
    {
      required: true,
      message: 'please enter url',
    },
  ],
  owner: [
    {
      required: true,
      message: 'Please select an owner',
    },
  ],
  type: [
    {
      required: true,
      message: 'Please choose the type',
    },
  ],
  approver: [
    {
      required: true,
      message: 'Please choose the approver',
    },
  ],
  dateTime: [
    {
      required: true,
      message: 'Please choose the dateTime',
      type: 'object',
    },
  ],
  description: [
    {
      required: true,
      message: 'Please enter url description',
    },
  ],
};
const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};

</script>

<template>
    <div>
        <h1>Product Manager</h1>

        <a-button type="primary" @click="showDrawer">
          <template #icon><PlusOutlined /></template>
          Thêm sản phẩm
        </a-button>
        <a-drawer
          title="Create a new product"
          :width="720"
          :open="open"
          :body-style="{ paddingBottom: '80px' }"
          :footer-style="{ textAlign: 'right' }"
          @close="onClose"
        >
          <a-form :model="form" :rules="rules" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Name" name="name">
                  <a-input v-model:value="form.name" placeholder="Please enter user name" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Url" name="url">
                  <a-input
                    v-model:value="form.url"
                    style="width: 100%"
                    addon-before="http://"
                    addon-after=".com"
                    placeholder="please enter url"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Owner" name="owner">
                  <a-select v-model:value="form.owner" placeholder="Please a-s an owner">
                    <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                    <a-select-option value="mao">Maomao Zhou</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Type" name="type">
                  <a-select v-model:value="form.type" placeholder="Please choose the type">
                    <a-select-option value="private">Private</a-select-option>
                    <a-select-option value="public">Public</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Approver" name="approver">
                  <a-select v-model:value="form.approver" placeholder="Please choose the approver">
                    <a-select-option value="jack">Jack Ma</a-select-option>
                    <a-select-option value="tom">Tom Liu</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="DateTime" name="dateTime">
                  <a-date-picker
                    v-model:value="form.dateTime"
                    style="width: 100%"
                    :get-popup-container="trigger => trigger.parentElement"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Description" name="description">
                  <a-textarea
                    v-model:value="form.description"
                    :rows="4"
                    placeholder="please enter url description"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Description" name="description">
                  <a-textarea
                    v-model:value="form.description"
                    :rows="4"
                    placeholder="please enter url description"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Description" name="description">
                  <a-textarea
                    v-model:value="form.description"
                    :rows="4"
                    placeholder="please enter url description"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Description" name="description">
                  <a-textarea
                    v-model:value="form.description"
                    :rows="4"
                    placeholder="please enter url description"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <template #extra>
            <a-space>
              <a-button @click="onClose">Cancel</a-button>
              <a-button type="primary" @click="onClose">Submit</a-button>
            </a-space>
          </template>
        </a-drawer>

        <!-- Table of content -->
        <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" bordered >
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'name'">
              <div class="">
              </div>
            </template>
          </template>
        </a-table>   

    </div>
</template>

<style lang="less" scoped>
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>