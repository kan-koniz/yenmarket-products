**Câu hỏi**: Nếu API trả về chậm, bạn sẽ debug và tối ưu cách nào để cải thiện tốc độ load?

**Trả lời**:

1. Đo hiệu suất và tìm điểm nghẽn: Dùng log, DevTools, APM để xác định phần chậm (DB, logic, gọi ngoài...).

2. Tối ưu database: Thêm index, phân trang, tránh truy vấn dư thừa, dùng Redis cache. Ví dụ dùng middle để cache response:

```typescript
const cacheMiddleware =
  (duration = 60) =>
  async (req, res, next) => {
    const key = req.originalUrl || req.url;

    try {
      const data = await client.get(key);
      if (data != null) {
        console.log(`Data retrieved from cache for key: ${key}`);
        return res.send(JSON.parse(data));
      } else {
        res.sendResponse = res.send;
        res.send = (body) => {
          console.log(
            `Data stored in cache for key: ${key} with duration: ${duration} seconds`
          );
          client.setEx(key, duration, JSON.stringify(body));
          res.sendResponse(body);
        };
        next();
      }
    } catch (err) {
      console.error('Redis cache error:', err);
      next();
    }
  };
```

3. Tối ưu logic xử lý: Refactor hàm nặng, dùng background job cho tác vụ lâu.

4. Giảm dung lượng và nén dữ liệu: Bật gzip, chỉ trả dữ liệu cần thiết.

5. Tăng tốc bằng kỹ thuật hỗ trợ: Caching, gọi song song (Promise.all), tinh chỉnh connection pool.
