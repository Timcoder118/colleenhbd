# API密钥设置说明

## 问题解决

如果您仍然看到API密钥提示窗口弹出，请按照以下步骤操作：

### 1. 清除浏览器缓存
- 按 **Ctrl+F5** 强制刷新页面
- 或者按 **F12** 打开开发者工具，右键点击刷新按钮，选择"清空缓存并硬性重新加载"

### 2. 预配置API密钥（推荐方式）

#### 方法1：修改配置文件
1. 打开 `config.js` 文件
2. 找到以下行：
   ```javascript
   apiKey: 'sk-your-api-key-here',
   ```
3. 将 `sk-your-api-key-here` 替换为您的真实API密钥
4. 确保 `usePreconfiguredKey` 设置为 `true`
5. 保存文件并刷新页面

#### 方法2：通过浏览器控制台设置
1. 按 **F12** 打开开发者工具
2. 切换到 **Console** 标签
3. 输入以下命令并按回车：
   ```javascript
   localStorage.setItem('deepseek_api_key', '您的API密钥');
   ```
4. 刷新页面

### 3. 获取DeepSeek API密钥
1. 访问 [DeepSeek平台](https://platform.deepseek.com/)
2. 注册或登录账户
3. 在API密钥管理页面创建新的API密钥
4. 复制生成的密钥（格式：sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx）

## 配置选项说明

在 `config.js` 文件中，您可以调整以下设置：

```javascript
deepseek: {
    // 您的API密钥
    apiKey: 'sk-your-api-key-here',
    
    // 是否自动使用预配置的密钥（设为true则跳过用户输入）
    usePreconfiguredKey: true,
    
    // 是否在页面加载时显示API密钥输入提示
    showPromptOnLoad: false
}
```

## 故障排除

### 问题1：提示窗口仍然弹出
- 检查 `config.js` 文件是否正确加载
- 确认API密钥格式正确（以sk-开头）
- 清除浏览器缓存

### 问题2：API密钥无效
- 确认密钥没有多余的空格
- 检查密钥是否已过期
- 验证账户余额是否充足

### 问题3：配置文件不生效
- 确认 `config.js` 在 `index.html` 中被正确引用
- 检查浏览器控制台是否有JavaScript错误
- 确认文件保存成功

## 安全提醒

⚠️ **重要安全提醒**：
- 不要将包含真实API密钥的配置文件上传到公开的代码仓库
- 在生产环境中，建议使用环境变量或服务器端配置
- 定期更换API密钥以提高安全性

## 联系支持

如果问题仍然存在，请：
1. 检查浏览器控制台的错误信息
2. 确认所有文件都已正确保存
3. 尝试使用不同的浏览器测试
