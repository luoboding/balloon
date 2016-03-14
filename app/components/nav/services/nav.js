'use strict';
module.exports = function(ngModel){
    ngModel.service('Nav',function(HttpResource, $http){
        return {
          getStatisticsMenu:function(){
            return [
              {
                text:'账户活跃',
                url:'app.statistic.account'
              },
              {
                text:'用户留存',
                url:'app.statistic.retained'
              },
              {
                text:'充值消费',
                url:'app.statistic.recharge'
              },
              {
                text:'竞赛参与',
                url:'app.statistic.participation'
              },
              {
                text:'移动端',
                url:'app.statistic.mobile'
              }
            ];
          }
        };
    });
};
