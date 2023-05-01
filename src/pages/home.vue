<template>
  <div class="home-page">
    <div class="content">
      <div class="main-data">
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
      </div>
      <div class="content-left">
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
            <shop-chart class="bar-chart" />
          </div>
        </div>
        <div class="wrap">
          <div class="wrap-title">服务质量</div>
          <div class="wrap-cont wrap-2">

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
            <passenger-chart />
          </div>
        </div>
      </div>
      <div class="content-right">
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
            <car-chart />
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
            <energy-chart />
          </div>
        </div>
        <div class="wrap">
          <div class="wrap-title">设备监测</div>
          <div class="wrap-cont wrap-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

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
}
</style>
