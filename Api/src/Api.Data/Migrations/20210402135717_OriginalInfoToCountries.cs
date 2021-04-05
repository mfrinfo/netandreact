using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class OriginalInfoToCountries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "Id",
                keyValue: new Guid("d1543db7-54f3-49a8-bb7a-a36c7b094c9b"));

            migrationBuilder.AddColumn<bool>(
                name: "OriginalInfo",
                table: "Countries",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "CreateAt", "Email", "Name", "UpdateAt" },
                values: new object[] { new Guid("a53ab210-a010-4ea0-bad5-daaa783eea8f"), new DateTime(2021, 4, 2, 10, 57, 16, 988, DateTimeKind.Local).AddTicks(5712), "mfrinfo@mail.com", "Administrador", new DateTime(2021, 4, 2, 10, 57, 16, 989, DateTimeKind.Local).AddTicks(4053) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "Id",
                keyValue: new Guid("a53ab210-a010-4ea0-bad5-daaa783eea8f"));

            migrationBuilder.DropColumn(
                name: "OriginalInfo",
                table: "Countries");

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "CreateAt", "Email", "Name", "UpdateAt" },
                values: new object[] { new Guid("d1543db7-54f3-49a8-bb7a-a36c7b094c9b"), new DateTime(2021, 3, 31, 17, 24, 32, 363, DateTimeKind.Local).AddTicks(5954), "mfrinfo@mail.com", "Administrador", new DateTime(2021, 3, 31, 17, 24, 32, 364, DateTimeKind.Local).AddTicks(4586) });
        }
    }
}
