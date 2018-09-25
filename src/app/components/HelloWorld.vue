<style scoped>

</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content>
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">4</div>
                    </CarouselItem>
                </Carousel>
                <Row :gutter="16">
                    <Col span="4" v-for="item in dataList">
                        <Card style="width:100%;margin:10px 0;">
                            <div style="text-align:center">
                                <img src="../../assets/logo.png">
                                <h3>A high quality UI Toolkit based on Vue.js</h3>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer class="layout-footer-center">2011-2018 &copy; 君临二次元</Footer>
        </Layout>
    </div>
</template>

<script>
import LocalStorageService from '../../core/storage/storage'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '123456JQD123456789123456789',
      value2: 0,
      dataList:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  },
  methods:{
    interception(value,fields,num){
        value=value.substring(value.indexOf(fields),num+value.indexOf(fields));
        return value;
    }
  },
  created(){
      console.log(this.interception(this.msg,'JQD',13));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./../css/public.less"></style>
<style lang="less" scoped src="./home.less"></style>

