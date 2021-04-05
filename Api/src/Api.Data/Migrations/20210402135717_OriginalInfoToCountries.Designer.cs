﻿// <auto-generated />
using System;
using Api.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20210402135717_OriginalInfoToCountries")]
    partial class OriginalInfoToCountries
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.13");

            modelBuilder.Entity("Api.Domain.Entities.CountryEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<long?>("Area")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Capital")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("CreateAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(60);

                    b.Property<string>("ObjectJson")
                        .HasColumnType("TEXT");

                    b.Property<string>("OfficialLanguage")
                        .HasColumnType("TEXT")
                        .HasMaxLength(60);

                    b.Property<bool>("OriginalInfo")
                        .HasColumnType("INTEGER");

                    b.Property<long?>("Population")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("PopulationDensity")
                        .HasColumnType("TEXT");

                    b.Property<string>("SvgFile")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("UpdateAt")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Countries");
                });

            modelBuilder.Entity("Api.Domain.Entities.UserEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("CreateAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT")
                        .HasMaxLength(100);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(60);

                    b.Property<DateTime?>("UpdateAt")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("User");

                    b.HasData(
                        new
                        {
                            Id = new Guid("a53ab210-a010-4ea0-bad5-daaa783eea8f"),
                            CreateAt = new DateTime(2021, 4, 2, 10, 57, 16, 988, DateTimeKind.Local).AddTicks(5712),
                            Email = "mfrinfo@mail.com",
                            Name = "Administrador",
                            UpdateAt = new DateTime(2021, 4, 2, 10, 57, 16, 989, DateTimeKind.Local).AddTicks(4053)
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
