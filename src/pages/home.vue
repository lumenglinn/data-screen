<template>
  <div class="home-page">
    <div class="content">
      <!-- <div class="main-data">
        <div class="data-item">
          <img class="data-icon" src="../assets/home/top1.png" alt="">
          <div class="data-right">
            <div class="data-name">当日总销售</div>
            <div class="data">1,536</div>
          </div>
        </div>
        <div class="data-item">
          <img class="data-icon" src="../assets/home/top2.png" alt="">
          <div class="data-right">
            <div class="data-name">能源销售</div>
            <div class="data">1,978</div>
          </div>
        </div>
        <div class="data-item">
          <img class="data-icon" src="../assets/home/top3.png" alt="">
          <div class="data-right">
            <div class="data-name">零售销售</div>
            <div class="data">1,978</div>
          </div>
        </div>
        <div class="data-item">
          <img class="data-icon" src="../assets/home/top4.png" alt="">
          <div class="data-right">
            <div class="data-name">商户销售</div>
            <div class="data">1,978</div>
          </div>
        </div>
        <div class="data-item">
          <img class="data-icon" src="../assets/home/top5.png" alt="">
          <div class="data-right">
            <div class="data-name">车流情况</div>
            <div class="data">1,978</div>
          </div>
        </div>
        <div class="data-item">
          <img class="data-icon" src="../assets/home/top6.png" alt="">
          <div class="data-right">
            <div class="data-name">客流情况</div>
            <div class="data">1,978</div>
          </div>
        </div>
      </div> -->
      <div class="ratio-wrap">
        <div class="hexagon"></div>
        <div class="ratio-box">
          <div class="data f-w-900">
            <div>18%</div>
            <img class="icon-up-down" src="../assets/home/down.png" alt="" />
            <div>0%</div>
          </div>
          <div class="ratio-name">入区率</div>
        </div>
        <div class="ratio-box">
          <div class="data f-w-900">8:2</div>
          <div class="ratio-name">客货比</div>
        </div>
        <div class="ratio-box">
          <div class="data">
            <div class="f-w-900">20</div>分
            <img class="icon-up-down" src="../assets/home/up.png" alt="" />
            <div class="f-w-900">0%</div>
          </div>
          <div class="ratio-name">平均停留时间</div>
        </div>
        <!-- <div class="ratio-box">
          <div class="data f-w-900">2.9</div>
          <div class="ratio-name">车客转换系数</div>
        </div> -->
      </div>
      <!-- <div class="content-left">
        <div class="wrap">
          <div class="wrap-title">商铺销售</div>
          <div class="wrap-cont">
            <div class="chart-handle">
              <div class="handle-box">
                <div class="handle-item">年</div>
                <div class="handle-item active">月</div>
                <div class="handle-item">日</div>
              </div>
            </div>
            <shop-chart class="bar-chart" :dataSource="carData" />
          </div>
        </div>
        <div class="wrap">
          <div class="wrap-title">服务质量</div>
          <div class="wrap-cont wrap-2">
            <services />
          </div>
        </div>
        <div class="wrap">
          <div class="wrap-title">客流</div>
          <div class="wrap-cont">
            <div class="chart-handle">
              <div class="handle-box">
                <div class="handle-item">内场</div>
                <div class="handle-item active">外场</div>
              </div>
              <div class="handle-box">
                <div class="handle-item">年</div>
                <div class="handle-item active">月</div>
                <div class="handle-item">日</div>
              </div>
            </div>
            <passenger-chart :dataSource="carData" />
          </div>
        </div>
      </div> -->
      <div class="content-right animate__animated animate__fadeInRight">
        <div class="wrap">
          <div class="wrap-title">车流</div>
          <div class="wrap-cont">
            <div class="chart-handle">
              <div class="handle-box">
                <div class="handle-item">年</div>
                <div class="handle-item active">月</div>
                <div class="handle-item">日</div>
              </div>
            </div>
            <car-chart :dataSource="carData" />
          </div>
        </div>
        <div class="wrap">
          <div class="wrap-title">能耗监测</div>
          <div class="wrap-cont">
            <div class="chart-handle">
              <div class="handle-box">
                <div class="handle-item">内场</div>
                <div class="handle-item active">外场</div>
              </div>
              <div class="handle-box">
                <div class="handle-item">年</div>
                <div class="handle-item active">月</div>
                <div class="handle-item">日</div>
              </div>
            </div>
            <energy-chart :dataSource="energyData" />
          </div>
        </div>
        <div class="wrap equipment">
          <div class="wrap-title">设备监测</div>
          <div class="equipment-box">
            <div class="equipment-item">
              <div class="item-content">
                <div>总数</div>
                <div class="equipment-data">999</div>
              </div>
            </div>
            <div class="equipment-item">
              <div class="item-content">
                <div>在线率</div>
                <div class="equipment-data">79%</div>
              </div>
            </div>
            <div class="equipment-item">
              <div class="item-content">
                <div>故障</div>
                <div class="equipment-data error">6</div>
              </div>
            </div>
          </div>
          <div class="wrap-cont">
            <equipment />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const carData = ref([20, 40, 30, 45, 55, 50, 40, 20, 25, 30, 25, 10]) // 车流图表数据
const energyData = ref([1, 1.2, 1.5, 1.3, 2, 2.5, 2.2, 3, 2.5, 2.1, 2]) // 能源图表数据
const passengerData = ref([200, 300, 360, 600, 450, 800, 1200, 1600, 1450, 1500, 1780, 1690]) // 客流图表数据

</script>

<style lang="scss" scoped>
.home-page {
  .main-data {
    width: 900px;
    position: absolute;
    top: 135px;
    left: 50%;
    margin-left: -450px;
    display: flex;
    justify-content: space-around;

    .data-item {
      width: 140px;
      display: flex;
      align-items: center;
    }

    .data-icon {
      width: 40px;
      height: 40px;
      margin-right: 9px;
    }

    .data-name {
      font-size: 18px;
      color: #50E3C2;
    }

    .data {
      font-size: 24px;
      color: #FFFFFF;

    }
  }

  .content {
    .bar-chart {
      padding-top: 50px;
      padding-left: 16px;
    }
  }

  .equipment {
    .equipment-box {
      display: flex;
      justify-content: space-between;
    }

    .equipment-item {
      margin-top: 15px;
      position: relative;
      width: 140px;
      height: 55px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 30px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.59;
        background: rgba(74, 74, 74, 0.61);
        border: 1px solid rgba(147, 226, 239, 1);
        box-shadow: inset 0px 0px 39px 2px rgba(92, 188, 218, 0.82);
      }
    }

    .item-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .equipment-data {
      color: #00BEE2;
      font-size: 18px;
      line-height: 18px;

      &.error {
        color: #FF5959;
      }
    }

    .wrap-cont {
      height: 176px;
    }
  }

  .ratio-wrap {
    position: absolute;
    top: 75px;
    right: 18px;
    display: flex;
    text-align: center;

    .data {
      padding-top: 8px;
      display: flex;
      justify-content: center;
      font-size: 21px;
    }

    .icon-up-down {
      width: 20px;
      height: 20px;
      padding: 0 7px;
    }

    .ratio-box {
      width: 148px;
      height: 66px;
      border: 2px solid rgba(54, 255, 251, 0.22);
    }

    .ratio-box+.ratio-box {
      margin-left: 29px;
    }

    // .ratio-box:nth-child(1) {
    //   width: 138px;
    // }

    // .ratio-box:nth-child(2) {
    //   width: 108px;
    // }

    // .ratio-box:nth-child(3) {
    //   width: 128px;
    // }

    // .ratio-box:nth-child(4) {
    //   width: 131px;
    // }

    .ratio-name {
      font-size: 18px;
    }
  }


  .hexagon {
    position: relative;
    width: 100px;
    height: 55px;
    background-color: #ccc;
    margin: 50px auto;
  }

  .hexagon:before,
  .hexagon:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 27.5px solid #ccc;
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 27.5px solid #ccc;
    transform: rotate(180deg);
  }



}
</style>
