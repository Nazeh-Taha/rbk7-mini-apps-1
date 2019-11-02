class Summ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.allData = this.props.allData;
  }

  postData() {
    event.preventDefault();
    var that = this;
    $.ajax({
      type: "post",
      url: "/saveData",
      data: that.allData,
      dataType: "json",
      success: function (data) {
        console.log("\_(^_^)_/");
      }
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("form", null, React.createElement("h1", null, "summarizes the data"), React.createElement("h3", null, "Username"), React.createElement("p", null, this.allData.username), React.createElement("h3", null, "Email"), React.createElement("p", null, this.allData.email), React.createElement("h3", null, "Adress 1"), React.createElement("p", null, this.allData.adress1), React.createElement("h3", null, "Adress 2"), React.createElement("p", null, this.allData.adress2), React.createElement("h3", null, "State"), React.createElement("p", null, this.allData.state), React.createElement("h3", null, "Code"), React.createElement("p", null, this.allData.code), React.createElement("h3", null, "Phone"), React.createElement("p", null, this.allData.phone), React.createElement("h3", null, "Card #"), React.createElement("p", null, this.allData.cardnum), React.createElement("h3", null, "EXP"), React.createElement("p", null, this.allData.exp), React.createElement("h3", null, "CVV"), React.createElement("p", null, this.allData.cvv), React.createElement("h3", null, "Zip Code1"), React.createElement("p", null, this.allData.code1), React.createElement("h3", null, "Zip Code2"), React.createElement("p", null, this.allData.code2), React.createElement("button", {
      type: "submit",
      onClick: this.postData.bind(this)
    }, "Purchase")));
  }

}

export default Summ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zdW1tLmpzeCJdLCJuYW1lcyI6WyJTdW1tIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJhbGxEYXRhIiwicG9zdERhdGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGhhdCIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwidXNlcm5hbWUiLCJlbWFpbCIsImFkcmVzczEiLCJhZHJlc3MyIiwiY29kZSIsInBob25lIiwiY2FyZG51bSIsImV4cCIsImN2diIsImNvZGUxIiwiY29kZTIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFOLFNBQW1CQyxLQUFLLENBQUNDLFNBQXpCLENBQWtDO0FBQ2pDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBTztBQUNkLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQVcsRUFBWDtBQUdBLFNBQUtDLE9BQUwsR0FBZSxLQUFLRixLQUFMLENBQVdFLE9BQTFCO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsR0FBRTtBQUNQQyxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFJQyxJQUFJLEdBQUUsSUFBVjtBQUVBQyxJQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBTztBQUNGQyxNQUFBQSxJQUFJLEVBQUUsTUFESjtBQUVGQyxNQUFBQSxHQUFHLEVBQUUsV0FGSDtBQUdGQyxNQUFBQSxJQUFJLEVBQUVMLElBQUksQ0FBQ0osT0FIVDtBQUlGVSxNQUFBQSxRQUFRLEVBQUUsTUFKUjtBQUtGQyxNQUFBQSxPQUFPLEVBQUUsVUFBVUYsSUFBVixFQUFnQjtBQUN0QkcsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNIO0FBUEUsS0FBUDtBQVdGOztBQUNGQyxFQUFBQSxNQUFNLEdBQUU7QUFDSixXQUNJLGlDQUNILGtDQUNHLHNEQURILEVBRUcsMkNBRkgsRUFHRywrQkFBSSxLQUFLZCxPQUFMLENBQWFlLFFBQWpCLENBSEgsRUFJRyx3Q0FKSCxFQUtHLCtCQUFJLEtBQUtmLE9BQUwsQ0FBYWdCLEtBQWpCLENBTEgsRUFNRywyQ0FOSCxFQU9HLCtCQUFJLEtBQUtoQixPQUFMLENBQWFpQixPQUFqQixDQVBILEVBUUcsMkNBUkgsRUFTRywrQkFBSSxLQUFLakIsT0FBTCxDQUFha0IsT0FBakIsQ0FUSCxFQVVHLHdDQVZILEVBV0csK0JBQUksS0FBS2xCLE9BQUwsQ0FBYUQsS0FBakIsQ0FYSCxFQVlHLHVDQVpILEVBYUcsK0JBQUksS0FBS0MsT0FBTCxDQUFhbUIsSUFBakIsQ0FiSCxFQWNHLHdDQWRILEVBZUcsK0JBQUksS0FBS25CLE9BQUwsQ0FBYW9CLEtBQWpCLENBZkgsRUFnQkcseUNBaEJILEVBaUJHLCtCQUFJLEtBQUtwQixPQUFMLENBQWFxQixPQUFqQixDQWpCSCxFQWtCRyxzQ0FsQkgsRUFtQkcsK0JBQUksS0FBS3JCLE9BQUwsQ0FBYXNCLEdBQWpCLENBbkJILEVBb0JHLHNDQXBCSCxFQXFCRywrQkFBSSxLQUFLdEIsT0FBTCxDQUFhdUIsR0FBakIsQ0FyQkgsRUFzQkcsNENBdEJILEVBdUJHLCtCQUFJLEtBQUt2QixPQUFMLENBQWF3QixLQUFqQixDQXZCSCxFQXdCRyw0Q0F4QkgsRUF5QkcsK0JBQUksS0FBS3hCLE9BQUwsQ0FBYXlCLEtBQWpCLENBekJILEVBNEJIO0FBQVEsTUFBQSxJQUFJLEVBQUMsUUFBYjtBQUF1QixNQUFBLE9BQU8sRUFBRSxLQUFLeEIsUUFBTCxDQUFjeUIsSUFBZCxDQUFtQixJQUFuQjtBQUFoQyxrQkE1QkcsQ0FERyxDQURKO0FBbUNIOztBQTdEaUM7O0FBZ0VsQyxlQUFlaEMsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFN1bW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gY29uc3RydWN0b3IocHJvcHMpe1xuICAgICBzdXBlcihwcm9wcyk7XG4gICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICBcbiAgICAgfTtcbiAgICAgdGhpcy5hbGxEYXRhID0gdGhpcy5wcm9wcy5hbGxEYXRhO1xuIH1cbiBcbiBwb3N0RGF0YSgpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgIHZhciB0aGF0ID10aGlzO1xuICAgIFxuICAgICQuYWpheCh7ICAgIFxuICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICB1cmw6IFwiL3NhdmVEYXRhXCIsXG4gICAgICAgICBkYXRhOiB0aGF0LmFsbERhdGEsXG4gICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXF8oXl9eKV8vXCIpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgfSk7XG4gICAgIFxuIH1cbnJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgPGZvcm0gPlxuICAgICAgICA8aDE+c3VtbWFyaXplcyB0aGUgZGF0YTwvaDE+XG4gICAgICAgIDxoMz5Vc2VybmFtZTwvaDM+XG4gICAgICAgIDxwPnt0aGlzLmFsbERhdGEudXNlcm5hbWV9PC9wPlxuICAgICAgICA8aDM+RW1haWw8L2gzPlxuICAgICAgICA8cD57dGhpcy5hbGxEYXRhLmVtYWlsfTwvcD5cbiAgICAgICAgPGgzPkFkcmVzcyAxPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5hZHJlc3MxfTwvcD5cbiAgICAgICAgPGgzPkFkcmVzcyAyPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5hZHJlc3MyfTwvcD5cbiAgICAgICAgPGgzPlN0YXRlPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5zdGF0ZX08L3A+XG4gICAgICAgIDxoMz5Db2RlPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5jb2RlfTwvcD5cbiAgICAgICAgPGgzPlBob25lPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5waG9uZX08L3A+XG4gICAgICAgIDxoMz5DYXJkICM8L2gzPlxuICAgICAgICA8cD57dGhpcy5hbGxEYXRhLmNhcmRudW19PC9wPlxuICAgICAgICA8aDM+RVhQPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5leHB9PC9wPlxuICAgICAgICA8aDM+Q1ZWPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5jdnZ9PC9wPlxuICAgICAgICA8aDM+WmlwIENvZGUxPC9oMz5cbiAgICAgICAgPHA+e3RoaXMuYWxsRGF0YS5jb2RlMX08L3A+XG4gICAgICAgIDxoMz5aaXAgQ29kZTI8L2gzPlxuICAgICAgICA8cD57dGhpcy5hbGxEYXRhLmNvZGUyfTwvcD5cbiAgICAgICAgXG5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgIG9uQ2xpY2s9e3RoaXMucG9zdERhdGEuYmluZCh0aGlzKX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgICApXG4gICAgXG59XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFN1bW07Il19